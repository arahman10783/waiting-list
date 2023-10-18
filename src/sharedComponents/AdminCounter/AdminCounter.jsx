import formatCount from '../../helpers/formatCount'
import style from './AdminCounter.module.css'

export default function AdminCounter({title, count}) {
  return (
    <div className={style.container}>
      <span>{title}</span>
      <span className={style.count}> {formatCount(count)} </span>
    </div>
  )
}
