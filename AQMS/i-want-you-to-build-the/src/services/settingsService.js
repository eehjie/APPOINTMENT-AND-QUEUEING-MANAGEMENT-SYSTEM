import { apiRequest, delay, USE_MOCK_API } from './apiClient'
/** GET /settings | response: {data:Settings} | errors: 401,403 */ export const getSettings=()=>USE_MOCK_API?delay({data:{}}):apiRequest('/settings')
/** PATCH /settings | body: {section,values} | response: {data:Settings} | errors: 401,403,422 */ export const updateSettings=(section,values)=>USE_MOCK_API?delay({data:{section,values}}):apiRequest('/settings',{method:'PATCH',body:{section,values}})
