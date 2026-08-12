export const formatQueueNumber=(number)=>String(number||'').toUpperCase()
export const formatApiErrors=(errors={})=>Object.values(errors).flat().join(' ')
