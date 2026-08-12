import { apiRequest, delay, USE_MOCK_API } from './apiClient'; import { mockStore } from './mockStore'
/** GET /offices | response: {data:Office[]} | errors: 401 */ export const listOffices=()=>USE_MOCK_API?delay({data:mockStore.offices()}):apiRequest('/offices')
/** POST /offices | body: {name,code,description,location,status} | response: {data:Office} | errors: 401,403,422 */ export const createOffice=(body)=>USE_MOCK_API?delay({data:body}):apiRequest('/offices',{method:'POST',body})
/** PATCH /offices/{id} | body: Partial<Office> | response: {data:Office} | errors: 401,403,404,422 */ export const updateOffice=(id,body)=>USE_MOCK_API?delay({data:{id,...body}}):apiRequest(`/offices/${id}`,{method:'PATCH',body})
