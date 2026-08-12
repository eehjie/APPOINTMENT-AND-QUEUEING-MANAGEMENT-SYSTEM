import { Navigate, Route, Routes } from 'react-router-dom'
import StudentLayout from '../layouts/StudentLayout'
import FacultyLayout from '../layouts/FacultyLayout'
import StaffLayout from '../layouts/StaffLayout'
import AdminLayout from '../layouts/AdminLayout'
import { currentRole } from '../services/authService'
import { Login, Register, Forgot } from '../pages/auth'
import { StudentDashboard, BookAppointment, StudentAppointments, QueueStatus, WalkInQueue, QueueTicket, QRCheckIn, StudentProfile } from '../pages/student'
import { FacultyDashboard, FacultyConsultations, FacultySchedule, FacultyQueue } from '../pages/faculty'
import { StaffDashboard, QueueManagement, StaffWalkIns, SkippedQueues, TransactionHistory } from '../pages/staff'
import { AdminDashboard, AdminUsers, AdminOffices, AdminServices, Reports, AdminSettings } from '../pages/admin'
import { PublicQueueDisplay } from '../pages/public'
import { NotFound } from '../pages'

function ProtectedRoute({ role, Layout, children }) { return currentRole()===role ? <Layout>{children}</Layout> : <Navigate to="/login" replace /> }
const protect=(role,Layout,Page)=><ProtectedRoute role={role} Layout={Layout}><Page/></ProtectedRoute>

export default function AppRoutes(){return <Routes>
  <Route path="/" element={<Navigate to="/login" replace/>}/>
  <Route path="/login" element={<Login/>}/><Route path="/register" element={<Register/>}/><Route path="/forgot-password" element={<Forgot/>}/>
  <Route path="/student" element={protect('Student',StudentLayout,StudentDashboard)}/><Route path="/student/book" element={protect('Student',StudentLayout,BookAppointment)}/><Route path="/student/appointments" element={protect('Student',StudentLayout,StudentAppointments)}/><Route path="/student/walk-in" element={protect('Student',StudentLayout,WalkInQueue)}/><Route path="/student/queue" element={protect('Student',StudentLayout,QueueStatus)}/><Route path="/student/ticket" element={protect('Student',StudentLayout,QueueTicket)}/><Route path="/student/check-in" element={protect('Student',StudentLayout,QRCheckIn)}/><Route path="/student/profile" element={protect('Student',StudentLayout,StudentProfile)}/>
  <Route path="/faculty" element={protect('Faculty',FacultyLayout,FacultyDashboard)}/><Route path="/faculty/consultations" element={protect('Faculty',FacultyLayout,FacultyConsultations)}/><Route path="/faculty/schedule" element={protect('Faculty',FacultyLayout,FacultySchedule)}/><Route path="/faculty/queue" element={protect('Faculty',FacultyLayout,FacultyQueue)}/>
  <Route path="/staff" element={protect('Office Staff',StaffLayout,StaffDashboard)}/><Route path="/staff/queue" element={protect('Office Staff',StaffLayout,QueueManagement)}/><Route path="/staff/walk-ins" element={protect('Office Staff',StaffLayout,StaffWalkIns)}/><Route path="/staff/skipped" element={protect('Office Staff',StaffLayout,SkippedQueues)}/><Route path="/staff/history" element={protect('Office Staff',StaffLayout,TransactionHistory)}/>
  <Route path="/admin" element={protect('System Administrator',AdminLayout,AdminDashboard)}/><Route path="/admin/users" element={protect('System Administrator',AdminLayout,AdminUsers)}/><Route path="/admin/offices" element={protect('System Administrator',AdminLayout,AdminOffices)}/><Route path="/admin/services" element={protect('System Administrator',AdminLayout,AdminServices)}/><Route path="/admin/reports" element={protect('System Administrator',AdminLayout,Reports)}/><Route path="/admin/settings" element={protect('System Administrator',AdminLayout,AdminSettings)}/>
  <Route path="/display/:officeId" element={<PublicQueueDisplay/>}/><Route path="*" element={<NotFound/>}/>
</Routes>}
