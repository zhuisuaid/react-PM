import ajax from './ajax'

const BASE =''
export const reqLogin = (username,Password)=>ajax.post(BASE +'/login',{username,Password})