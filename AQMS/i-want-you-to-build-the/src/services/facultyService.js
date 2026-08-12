import { apiRequest, delay, USE_MOCK_API } from './apiClient'
/** GET /faculty/schedules | params: faculty_id,date_from,date_to | response: {data:Availability[]} | errors: 401,403 */
export const listFacultySchedules=(params={})=>USE_MOCK_API?delay({data:[]}):apiRequest('/faculty/schedules',{params})
/** POST /faculty/schedules | body: {date,start_time,end_time,duration_minutes,slots} | response: {data:Availability} | errors: 401,403,422 */
export const createFacultySchedule=(body)=>USE_MOCK_API?delay({data:{id:Date.now(),...body,status:'Active'}}):apiRequest('/faculty/schedules',{method:'POST',body})
/** PATCH /faculty/schedules/{id} | body: Partial<Availability> | response: {data:Availability} | errors: 401,403,404,422 */
export const updateFacultySchedule=(id,body)=>USE_MOCK_API?delay({data:{id,...body}}):apiRequest(`/faculty/schedules/${id}`,{method:'PATCH',body})
/** DELETE /faculty/schedules/{id} | response: 204 | errors: 401,403,404 */
export const deleteFacultySchedule=(id)=>USE_MOCK_API?delay({data:{id}}):apiRequest(`/faculty/schedules/${id}`,{method:'DELETE'})
