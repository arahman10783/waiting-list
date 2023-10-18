import style from './AdminScreen.module.css'
import AdminCounter from '../../sharedComponents/AdminCounter'

export default function AdminScreen() {
  return (
      <div className={style.adminScreen}>
        <AdminCounter title="Waiting" count={5}/>
        <AdminCounter title="Not Showing" count={5}/>
        <AdminCounter title="Served" count={5}/>

        
      </div>
    
  )
}
