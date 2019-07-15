import ajax from './ajax'
import Password from 'antd/lib/input/Password';
const BASE =''
export const reqLogin = (username,Password)=>ajax.post(BASE +'/login',{username,Password})