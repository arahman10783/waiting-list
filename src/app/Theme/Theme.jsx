import style from './Theme.module.css'
import AdminScreen from '../AdminScreen'
import HallScreen from '../HallScreen'
import QueueLine from '../QueueLine/QueueLine'


export default function Theme() {
  return (
    <div className={style.siteBody}>
      <AdminScreen />
      <HallScreen />
      <QueueLine />
    </div>
  )
}
