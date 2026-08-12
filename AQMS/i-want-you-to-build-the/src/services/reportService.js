import { apiRequest, delay, USE_MOCK_API } from './apiClient'
/** GET /reports/{type} | params: date_from,date_to,office_id,service_id,status | response: {data:{rows,summary}} | errors: 401,403,422 */
export const generateReport=(type,params={})=>USE_MOCK_API?delay({data:{type,rows:[],summary:{}}}):apiRequest(`/reports/${type}`,{params})
