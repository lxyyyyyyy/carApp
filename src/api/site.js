import mockRequests from './mockRequest'
// 查询车辆站点数据列表
export function selectSiteList() {
    return mockRequests({
      url: '/car/site/selectSiteList',
      method: 'get'
    })
  }
  
  // 查询车辆站点数据列表
  export function listSite(query) {
    return mockRequests({
      url: '/car/site/list',
      method: 'get',
      params: query
    })
  }
  
  // 查询车辆站点数据详细
  export function getSite(uuid) {
    return mockRequests({
      url: '/car/site/' + uuid,
      method: 'get'
    })
  }
  
  // 新增车辆站点数据
  export function addSite(data) {
    return mockRequests({
      url: '/car/site',
      method: 'post',
      data: data
    })
  }
  
  // 修改车辆站点数据
  export function updateSite(data) {
    return mockRequests({
      url: '/car/site',
      method: 'put',
      data: data
    })
  }
  
  // 删除车辆站点数据
  export function delSite(uuid) {
    return mockRequests({
      url: '/car/site/' + uuid,
      method: 'delete'
    })
  }
  
  // 导出车辆站点数据
  export function exportSite(query) {
    return mockRequests({
      url: '/car/site/export',
      method: 'get',
      params: query
    })
  }

  //获取车辆实时坐标
/*   export function getRoute(query) {
    return mockRequests({
      url: '/route',
      method: 'get',
      params: query
    })
  } */
  export const getRoute =(point)=>mockRequests({url:'/route',method:'get'});

  export const reqCarStatusInfoList =()=>mockRequests({url:'/carStatusInfoList',method:'get'});
  export const reqCarStatusInfo =(carId)=>mockRequests({url:'/carStatusInfo',method:'get'});