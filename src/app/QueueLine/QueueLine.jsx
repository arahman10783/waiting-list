import { useDispatch, useSelector } from 'react-redux'
import style from './QueueLine.module.css'
import { newCustomer, waitingCustomers, allCustomers } from '../../store/customerSlice'

export default function QueueLine() {
  const waiting = useSelector(waitingCustomers)
  const all = useSelector(allCustomers)
  const dispatch = useDispatch()
  function newCutomerHandelr (){
    dispatch(newCustomer())
  }
  return (
    <>
      <div className={style.queueLineSys}>
          <span className={style.title}> Customer Number </span>
          <b> {all.length} </b>
          <span className={style.title}> {waiting.length} are waiting</span>
      </div>
      <button className={style.newCustomerBtn} onClick={newCutomerHandelr} />
    </>
  )
}
