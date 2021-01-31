import React, { FC } from 'react';
import { LogoutOutlined, UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout, Dropdown, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import HeaderNoticeComponent from './notice';
import Avator from 'assets/header/avator.png';
import { ReactComponent as LanguageSvg } from 'assets/header/language.svg';
import { ReactComponent as ZhCnSvg } from 'assets/header/zh_CN.svg';
import { ReactComponent as EnUsSvg } from 'assets/header/en_US.svg';
import AntdSvg from 'assets/logo/antd.svg';
import { setUserItem, logoutSystem } from 'stores/user.store';
import { useAppDispatch, useAppState } from 'stores';
import './header.less';

const { Header } = Layout;

interface Props {
  collapsed: boolean;
  toggle: () => void;
}

const HeaderComponent: FC<Props> = ({ collapsed, toggle }) => {
  const { loginState, locale, device } = useAppState(state => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logout = async () => {
    navigate('/login');
    dispatch(logoutSystem());
  };

  const toLogin = () => {
    navigate('/login');
  };

  const selectLocale = ({ key }: { key: any }) => {
    dispatch(setUserItem({ locale: key }));
    localStorage.setItem('locale', key);
  };
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <span>
          <UserOutlined />
          <span onClick={() => navigate('/dashboard')}>个人设置</span>
        </span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">
        <span>
          <LogoutOutlined />
          <span onClick={() => logout()}>退出登录</span>
        </span>
      </Menu.Item>
    </Menu>
  );
  return (
    <Header className="layout-page-header">
      {device !== 'MOBILE' && (
        <div className="logo" style={{ width: collapsed ? 80 : 200 }}>
          <img src={AntdSvg} alt="" />
        </div>
      )}
      <div className="layout-page-header-main">
        <div onClick={toggle} className="togglesidebar">
          <span id="sidebar-trigger">{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</span>
        </div>
        <div className="actions">
          <HeaderNoticeComponent />
          <Dropdown
            trigger={['click']}
            overlay={
              <Menu onClick={selectLocale}>
                <Menu.Item style={{ textAlign: 'left' }} disabled={locale === 'zh_CN'} key="zh_CN">
                  <ZhCnSvg /> 简体中文
                </Menu.Item>
                <Menu.Item style={{ textAlign: 'left' }} disabled={locale === 'en_US'} key="en_US">
                  <EnUsSvg /> English
                </Menu.Item>
              </Menu>
            }
          >
            <span>
              <LanguageSvg id="language-change" />
            </span>
          </Dropdown>
          {loginState ? (
            <Dropdown overlay={menu} trigger={['click']}>
              <span className="user-action">
                <img src={Avator} className="user-avator" alt="avator" />
              </span>
            </Dropdown>
          ) : (
            <span style={{ cursor: 'pointer' }} onClick={toLogin}>
              测试文字
            </span>
          )}
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;