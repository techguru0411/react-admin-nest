import { updateRoleMenus } from "@/api/microservice/role";
import { message, Modal, Tree } from "antd";
import React, { FC, useState } from "react";

const RoleAllocationMenuModal: FC<any> = ({ treeData, onOk, onCancel, initMenus, okText, cancelText, id, title }: any) => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([...initMenus]);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

  const onOkSubmit = async () => {
    //分配菜单
    const result: any = await updateRoleMenus({ id, mids: checkedKeys });
    if (result.data.code === 200) {
      message.info("操作成功");
      return onOk();
    }
    message.error("操作失败");
  };

  const onExpand = (datas: React.Key[]) => {
    setExpandedKeys(datas);
    setAutoExpandParent(false);
  };

  const onCheck = (checkedKeysValue: React.Key[]) => {
    setCheckedKeys(checkedKeysValue);
  };

  return (
    <Modal open title={title || "提示"} onOk={onOkSubmit} onCancel={onCancel} okText={okText || "确认"} cancelText={cancelText || "取消"} width={800}>
      <div>
        <Tree
          checkable
          multiple
          onExpand={onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
          checkedKeys={checkedKeys}
          onSelect={v => setSelectedKeys(v)}
          onCheck={onCheck}
          selectedKeys={selectedKeys}
          treeData={treeData}
        />
      </div>
    </Modal>
  );
};

export default RoleAllocationMenuModal;
