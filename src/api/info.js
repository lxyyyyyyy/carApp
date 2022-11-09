import mockRequests from './mockRequest'


// 查询车辆基本信息列表
export function listInfo(query) {
  return mockRequests({
    url: '/car/carInfo/list',
    method: 'get',
    params: query
  })
}

// 查询车辆基本信息列表
export function listRealInfo(query) {
  return mockRequests({
    url: '/car/carInfo/reallist',
    method: 'get',
    params: query
  })
}

// 查询车辆基本信息列表
export function getCarList(data) {
  return mockRequests({
    url: '/car/carInfo/getCarList',
    method: 'post',
    data: data
  })
}


// 查询车辆基本信息详细
export function getInfo(carId) {
  return mockRequests({
    url: '/car/carInfo/' + carId,
    method: 'get'
  })
}

// 查询车辆基本信息详细
export function getCarInfoById(data) {
  return mockRequests({
    url: '/car/carInfo/getCarInfoById',
    method: 'post',
    data: data
  })
}

// 新增车辆基本信息
export function addInfo(data) {
  return mockRequests({
    url: '/car/carInfo',
    method: 'post',
    data: data
  })
}

// 修改车辆基本信息
export function updateInfo(data) {
  return mockRequests({
    url: '/car/carInfo',
    method: 'put',
    data: data
  })
}

// 删除车辆基本信息
export function delInfo(carId) {
  return mockRequests({
    url: '/car/carInfo/' + carId,
    method: 'delete'
  })
}

// 导出车辆基本信息
export function exportInfo(query) {
  return mockRequests({
    url: '/car/carInfo/export',
    method: 'get',
    params: query
  })
}

// 创建订单，锁定车辆
export function createRecord(query) {
  return mockRequests({
    url: '/caroperate/createRecord',
    method: 'post',
    data: query
  })
}

// 初始化检查锁定、订单状态
export function checkStatus(query) {
  return mockRequests({
    url: '/caroperate/checkStatus',
    method: 'post',
    data: query
  })
}

// 更新车辆状态
export function changeStatus(query) {
  return mockRequests({
    url: '/caroperate/changeStatus',
    method: 'post',
    data: query
  })
}

// 结束控车
export function relieveCar(query) {
  return mockRequests({
    url: '/caroperate/relieveCar',
    method: 'post',
    data: query
  })
}
// 结束控车
export function lockCar(query) {
  return mockRequests({
    url: '/caroperate/lockCar',
    method: 'post',
    data: query
  })
}

