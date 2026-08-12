import { apiRequest, delay, USE_MOCK_API } from './apiClient'
import { mockStore } from './mockStore'
/** GET /queues | params: office_id,service_id,status,counter_id | response: {data:QueueTransaction[]} | errors: 401,403 */
export const listQueues=async(params={})=>{if(!USE_MOCK_API)return apiRequest('/queues',{params});return delay({data:mockStore.queues()})}
/** POST /queues/walk-ins | body: {client_type,name,contact,office_id,service_id,purpose} | response: {data:QueueTransaction} | errors: 401,422 */
export async function registerWalkIn(body){if(!USE_MOCK_API)return apiRequest('/queues/walk-ins',{method:'POST',body});const item={no:`R-${String(mockStore.queues().length+24).padStart(3,'0')}`,name:body.name,service:body.service,office:body.office,status:'Waiting',type:'Walk-in',purpose:body.purpose,time:'9:15 AM'};mockStore.setQueues([...mockStore.queues(),item]);return delay({data:item})}
/** POST /queues/{number}/call | response: {data:QueueTransaction} | errors: 401,403,409 */
export const callQueue=async(number)=>queueAction(number,'Called','call')
/** POST /queues/{number}/start | response: {data:QueueTransaction} | errors: 401,403,409 */
export const startQueue=async(number)=>queueAction(number,'Now Serving','start')
/** POST /queues/{number}/complete | response: {data:QueueTransaction} | errors: 401,403,409 */
export const completeQueue=async(number)=>queueAction(number,'Completed','complete')
/** POST /queues/{number}/skip | body: {reason?} | response: {data:QueueTransaction} | errors: 401,403,409 */
export const skipQueue=async(number)=>queueAction(number,'Skipped','skip')
async function queueAction(number,status,action){if(!USE_MOCK_API)return apiRequest(`/queues/${number}/${action}`,{method:'POST'});let updated;mockStore.setQueues(mockStore.queues().map(x=>{if((x.no||x.number)===number){updated={...x,status};return updated}return x}));return delay({data:updated})}
