import { appointments, offices, queue, services, users } from '../data/mockData'

const read=(key,fallback)=>JSON.parse(localStorage.getItem(key)||JSON.stringify(fallback))
const write=(key,value)=>{ localStorage.setItem(key,JSON.stringify(value)); return value }
export const mockStore={
  appointments:()=>read('aqms-appointments', appointments.map(a=>({...a,reference:a.id,personnel:a.service.includes('Consultation')?'Prof. Laila Macapaar':'Office service counter',purpose:'AQMS service request'}))),
  setAppointments:(value)=>write('aqms-appointments',value),
  queues:()=>read('aqms-queues', queue), setQueues:(value)=>write('aqms-queues',value),
  offices:()=>read('aqms-offices',offices), setOffices:(value)=>write('aqms-offices',value),
  services:()=>read('aqms-services',services), setServices:(value)=>write('aqms-services',value),
  users:()=>read('aqms-users',users), setUsers:(value)=>write('aqms-users',value),
}
