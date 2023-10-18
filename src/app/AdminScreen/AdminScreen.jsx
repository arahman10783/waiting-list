import style from './AdminScreen.module.css'
import AdminCounter from '../../sharedComponents/AdminCounter'
import { useSelector } from 'react-redux'

export default function AdminScreen() {
  const waiting = useSelector(({coustomerSlice}) => coustomerSlice.filter(el => el.status === 'waiting').length)
  const served = useSelector(({coustomerSlice}) => coustomerSlice.filter(el => el.status === 'served'))
  return (
      <div className={style.adminScreen}>
        <AdminCounter title="Waiting" count={waiting}/>
        <AdminCounter title="Served" count={served.length}/>
      </div>
    
  )
}
