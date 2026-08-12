export const offices = [
  { id:'cics', name:'College of Information and Computing Sciences', short:'CICS', location:'1st Floor, CICS Building', color:'bg-blue-600' },
  { id:'registrar', name:"Registrar's Office", short:'Registrar', location:'Administration Building', color:'bg-purple-600' },
  { id:'ubo', name:'University Business Office', short:'UBO', location:'Administration Building', color:'bg-amber-600' },
  { id:'infirmary', name:'University Infirmary', short:'Infirmary', location:'Infirmary Building', color:'bg-rose-600' },
]
export const services = [
  {office:'Registrar', name:'Certificate of Enrollment', duration:'10 min', wait:'12 min', active:true},
  {office:'Registrar', name:'Transcript of Records', duration:'15 min', wait:'28 min', active:true},
  {office:'UBO', name:'Tuition Fee Assessment', duration:'10 min', wait:'18 min', active:true},
  {office:'CICS', name:'Student Advising', duration:'20 min', wait:'8 min', active:true},
  {office:'Infirmary', name:'Medical Consultation', duration:'15 min', wait:'5 min', active:true},
]
export const queue = [
  {no:'R-024', name:'Amina M. Ali', service:'Certificate of Enrollment', time:'8:30 AM', status:'Waiting', office:'Registrar'},
  {no:'R-025', name:'Jamal L. Macapodi', service:'Transcript of Records', time:'8:40 AM', status:'Called', office:'Registrar'},
  {no:'R-026', name:'Shaira B. Bantuas', service:'Certificate of Enrollment', time:'8:50 AM', status:'Waiting', office:'Registrar'},
  {no:'U-041', name:'Khadija S. Alonto', service:'Tuition Fee Assessment', time:'9:00 AM', status:'Waiting', office:'UBO'},
]
export const appointments = [
  {id:'APT-2026-084', office:'Registrar', service:'Certificate of Enrollment', date:'Aug 12, 2026', time:'9:00 AM', status:'Confirmed', queue:'R-024'},
  {id:'APT-2026-085', office:'CICS', service:'Consultation with Prof. L. Macapaar', date:'Aug 14, 2026', time:'1:30 PM', status:'Pending', queue:'—'},
  {id:'APT-2026-071', office:'University Infirmary', service:'Medical Consultation', date:'Aug 7, 2026', time:'10:00 AM', status:'Completed', queue:'I-011'},
]
export const users = [
  {name:'Amina M. Ali', email:'amina.ali@msumain.edu.ph', role:'Student', office:'—', status:'Active'},
  {name:'Prof. Laila Macapaar', email:'laila.macapaar@msumain.edu.ph', role:'Faculty', office:'CICS', status:'Active'},
  {name:'Nora B. Matalam', email:'nora.matalam@msumain.edu.ph', role:'Office Staff', office:'Registrar', status:'Active'},
  {name:'AQMS Administrator', email:'admin@msumain.edu.ph', role:'System Administrator', office:'ICT Center', status:'Active'},
]
export const roleHome = { Student:'/student', Faculty:'/faculty', 'Office Staff':'/staff', 'System Administrator':'/admin' }
