import { apiRequest, delay, USE_MOCK_API } from './apiClient'; import { mockStore } from './mockStore'
/** GET /services | params: office_id,status | response: {data:Service[]} | errors: 401 */ export const listServices=(params={})=>USE_MOCK_API?delay({data:mockStore.services()}):apiRequest('/services',{params})
/** POST /services | body: {office_id,name,duration_minutes,queue_settings,status} | response: {data:Service} | errors: 401,403,422 */ export const createService=(body)=>USE_MOCK_API?delay({data:body}):apiRequest('/services',{method:'POST',body})
/** PATCH /services/{id} | body: Partial<Service> | response: {data:Service} | errors: 401,403,404,422 */ export const updateService=(id,body)=>USE_MOCK_API?delay({data:{id,...body}}):apiRequest(`/services/${id}`,{method:'PATCH',body})
