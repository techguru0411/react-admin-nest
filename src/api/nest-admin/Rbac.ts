import { request } from 'api/request';
const BASE_URL = process.env.REACT_APP_API_URL;
/** nest获取所有用户接口 */
export const FindAllUser = (payload: any) => {
  return request(`${BASE_URL}rbac/FindAllUser`, 'post', payload);
};
/** nest获取所有角色接口 */
export const GetAllRole = (payload: any) => {
  return request(`${BASE_URL}rbac/GetAllRole`, 'get', payload);
};