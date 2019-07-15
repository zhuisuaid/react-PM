import axios from 'axios'
import qs from 'qs'
import {message} from 'antd'

axios.interceptors.request.use(function(config){
    const {method,data} = config
    if(method.toLowerCase()==='post'&&data=='Object'){
        config.data=qs.stringify(data)
    }
    return config
})

axios.interceptors.response.use(function(respons){
    return respons.data
},function(error){
    message.error('请求出错'+error.message)
    return new Promise(()=>{})
})
export default axios