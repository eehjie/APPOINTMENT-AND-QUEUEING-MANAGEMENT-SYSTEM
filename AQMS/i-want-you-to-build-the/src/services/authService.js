import { apiRequest, delay, USE_MOCK_API } from './apiClient'

/** POST /auth/login | body: {email,password} | response: {data:{user:{id,name,email,role},token}} | errors: 401,422 */
export async function login({ email, password, role }) { if (!USE_MOCK_API) return apiRequest('/auth/login',{method:'POST',body:{email,password}}); const user={id:1,name:role==='Faculty'?'Prof. Laila Macapaar':role==='Office Staff'?'Nora B. Matalam':role==='System Administrator'?'AQMS Administrator':'Amina M. Ali',email,role}; localStorage.setItem('aqms-demo-role',role); localStorage.setItem('aqms-access-token','mock-aqms-token'); localStorage.setItem('aqms-user',JSON.stringify(user)); return delay({data:{user,token:'mock-aqms-token'}}) }
/** POST /auth/logout | response: 204 | errors: 401 */
export async function logout(){ if(!USE_MOCK_API) await apiRequest('/auth/logout',{method:'POST'}); ['aqms-demo-role','aqms-access-token','aqms-user'].forEach(key=>localStorage.removeItem(key)) }
/** GET /auth/me | response: {data:{id,name,email,role}} | errors: 401 */
export async function currentUser(){ if(!USE_MOCK_API)return apiRequest('/auth/me'); const user=JSON.parse(localStorage.getItem('aqms-user')||'null'); return delay({data:user}) }
/** POST /auth/forgot-password | body: {email} | response: {message} | errors: 422 */
export const forgotPassword=(email)=>USE_MOCK_API?delay({message:'Password reset request accepted.'}):apiRequest('/auth/forgot-password',{method:'POST',body:{email}})
export const currentRole=()=>localStorage.getItem('aqms-demo-role')
