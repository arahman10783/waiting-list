import style from './QueueLine.module.css'

export default function QueueLine() {
  return (
    <>
      <div className={style.queueLineSys}>
          <span className={style.title}> Customer Number </span>
          <b> 000 </b>
          <span className={style.title}> 15 are waiting</span>
      </div>
      <button className={style.newCustomerBtn} />
    </>
  )
}
