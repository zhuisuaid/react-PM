//action creator 模块（创建action的工厂函数）
// 包含N个action creator 模块
// action   表示要执行行为的对象
// 包含两个方面的属性
// type: 唯一标识   xxx:数据属性值（值类型任意，为可选属性）
import {INCREMENT,DECREMENT} from './action-types'

//创建一个增加的 action
export const increment=(number)=>({type:INCREMENT,number})

//创建一个用来减少的action
export const decrement=(number)=>({type:DECREMENT,number})