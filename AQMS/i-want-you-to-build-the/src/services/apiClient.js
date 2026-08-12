/**
 * Shared API transport boundary.
 * Set VITE_USE_MOCK_API=false when Laravel endpoints are available.
 */
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'
export const USE_MOCK_API = import.meta.env.VITE_USE_MOCK_API !== 'false'

export class ApiError extends Error {
  constructor(message, { status=0, code='NETWORK_ERROR', errors={} }={}) { super(message); this.name='ApiError'; this.status=status; this.code=code; this.errors=errors }
}

let sessionExpiredHandler = null
export const setSessionExpiredHandler = (handler) => { sessionExpiredHandler = handler }
export const getStoredToken = () => localStorage.getItem('aqms-access-token')

/** @param {string} path @param {{method?:string,body?:object,params?:object,headers?:object}} options */
export async function apiRequest(path, options={}) {
  const { method='GET', body, params, headers={} } = options
  const url = new URL(`${API_BASE_URL.replace(/\/$/,'')}/${path.replace(/^\//,'')}`, window.location.origin)
  Object.entries(params || {}).forEach(([key,value]) => value !== undefined && value !== null && url.searchParams.set(key, value))
  try {
    const response = await fetch(url, { method, headers:{ Accept:'application/json', ...(body?{'Content-Type':'application/json'}:{}), ...(getStoredToken()?{Authorization:`Bearer ${getStoredToken()}`}:{ }), ...headers }, body:body?JSON.stringify(body):undefined })
    if (response.status === 401) { sessionExpiredHandler?.(); throw new ApiError('Your session has expired. Please sign in again.', { status:401, code:'SESSION_EXPIRED' }) }
    const payload = await response.json().catch(() => null)
    if (!response.ok) throw new ApiError(payload?.message || 'The request could not be completed.', { status:response.status, code:payload?.code || 'API_ERROR', errors:payload?.errors || {} })
    return payload
  } catch (error) { if (error instanceof ApiError) throw error; throw new ApiError('Unable to connect to AQMS. Please try again.', { cause:error }) }
}

export const delay = (value, milliseconds=180) => new Promise(resolve => setTimeout(() => resolve(value), milliseconds))
