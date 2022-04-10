//接口统一管理
import requests from "./request";
//mock接口
import mockRequests from './mockRequest'

export const reqCategoryList =()=>requests({url:'/product/getBaseCategoryList',method:'get'});
export const reqGetBannerList =()=>mockRequests({url:'/banner',method:'get'});
export const reqFloorList =()=>mockRequests({url:'/floor',method:'get'});

export const reqGetSearchInfo = (searchInfo)=>requests({url:'/list',method:'post',data:searchInfo});

//获取商品详情信息的接口
export const reqGoodsInfo = (skuid)=>requests({url:`/item/${skuid}`,method:'get'});

//购物车将数据传递给服务器
export const reqAddOrUpdateShopCart = (skuId,skuNum) => requests ({url:`cart/addToCart/${skuId}/${skuNum}`,method:'post'})
//获取购物车的数据列表
export const reqCartList = () =>requests({url:'/cart/cartList',method:'get'});

//删除购物车内容的接口
export const reqDeleteCartById = (skuId) => requests({url:`/cart/deleteCart/${skuId}`,method:'delete'});

//勾选商品的选中状态接口
export const reqUpdateCheckedById = (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'});

export const reqGetCode = (phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'});


//注册api
export const reqUserRegister =(data) =>requests({url:'/user/passport/register',data,method:'post'});
//登录api
export const reqUserLogin = (data)=>requests({url:'/user/passport/login',data,method:'post'});

//token校验获取用户信息api
export const reqUserInfo = ()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'});
//退出登录
export const reqLogout = ()=>requests({url:'/user/passport/logout',method:'get'});
//获取用户地址信息
export const reqAddressInfo = ()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})

//获取商品列表
export const reqOrderInfo = ()=>requests({url:'/order/auth/trade',method:'get'});

//提交订单的接口
//URL:/api/order/auth/submitOrder?tradeNo={tradeNo}  method:post

export const reqSubmitOrder = (tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'});


//获取支付信息
//URL:/api/payment/weixin/createNative/{orderId}  GET
export const reqPayInfo = (orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'});

//获取支付订单状态
//URL:/api/payment/weixin/queryPayStatus/{orderId}  get
export  const reqPayStatus = (orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'});


//获取个人中心的数据
//api/order/auth/{page}/{limit}  get 
export const reqMyOrderList = (page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'});
