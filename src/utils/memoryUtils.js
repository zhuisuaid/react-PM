/*
用来在内存中缓存数据的工具对象
 */
import storageUtils from "./storageUtils"
export default {
    user: storageUtils.getUser(),  // 内存中保存登陆的user信息对象
  }
  