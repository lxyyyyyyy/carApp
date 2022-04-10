//引入uuid
import {v4 as uuidv4} from 'uuid'
//向外暴露一个函数，生成一个随机的字符串，每次执行不能发生变化，游客身份持久存储
export const getUUID=()=>{
    //先从本地存储获取uuid，看看本地存储是否有已经生成的uuid
    let uuid_token = localStorage.getItem('UUIDTOKEN');
    //如果没有
    if(!uuid_token){
        //随机生成一个游客临时身份
        uuid_token = uuidv4();
        //本地存储
        localStorage.setItem('UUIDTOKEN',uuid_token);
    }
    return uuid_token;
}