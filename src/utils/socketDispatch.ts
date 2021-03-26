import { notification } from 'antd';
const SocketDispatch = (payload: any, MySocketID: string) => {
  const { type } = payload;
  switch (type) {
    case 'STSTEM':
      SOCKET_SYSTE(payload, MySocketID);
      return;
    default:
      SOCKET_lOGIN(payload, MySocketID);
  }
};

const SOCKET_lOGIN = async (payload: any, MySocketID: string) => {
  const { message, name, id } = payload;
  if (name === 'loginMessage') {
    if (id === MySocketID) {
      // TODO 我自己上线，不用通知我，其实此时需要判断有没有登录，没登录，就不要提示了。
      return;
    }
    notification.open({
      message: '通知',
      description: message
    });
  }
};
const SOCKET_SYSTE = async (payload: any, MySocketID: string) => {
  const { name } = payload;
  switch (name) {
    case 'html2canvas':
      return;
  }
};
export default SocketDispatch;
