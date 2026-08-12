import AppRoutes from './routes/AppRoutes'
import { logout } from './services/authService'
import { setSessionExpiredHandler } from './services/apiClient'

setSessionExpiredHandler(()=>{ logout(); window.location.assign('/login') })
export default function App(){ return <AppRoutes/> }
