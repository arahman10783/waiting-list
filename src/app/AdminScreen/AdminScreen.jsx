import style from './AdminScreen.module.css'
import AdminCounter from '../../sharedComponents/AdminCounter'
import { waitingCustomers, servedCustomers } from '../../store/customerSlice'
import { useSelector } from 'react-redux'

export default function AdminScreen() {
  const waiting = useSelector(waitingCustomers)
  const served = useSelector(servedCustomers)

  return (
      <div className={style.adminScreen}>
        <AdminCounter title="Waiting" count={waiting.length}/>
        <AdminCounter title="Served" count={served.length}/>
      </div>
    
  )
}
