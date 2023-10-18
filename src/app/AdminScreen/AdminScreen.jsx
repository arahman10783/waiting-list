import style from './AdminScreen.module.css'
import AdminCounter from '../../sharedComponents/AdminCounter'
import { useSelector } from 'react-redux'

export default function AdminScreen() {
  const waiting = useSelector(state => state.filter(el => el.status === 'waiting').length)
  const served = useSelector(state => state.filter(el => el.status === 'served').length)
  return (
      <div className={style.adminScreen}>
        <AdminCounter title="Waiting" count={waiting}/>
        <AdminCounter title="Served" count={served}/>
        

        
      </div>
    
  )
}
