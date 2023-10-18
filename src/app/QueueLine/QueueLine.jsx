import { useDispatch, useSelector } from 'react-redux'
import style from './QueueLine.module.css'
import {actions} from '../../store/actions'

export default function QueueLine() {
  const waiting = useSelector(state => state.filter(el => el.status === 'waiting').length)
  const all = useSelector(state => state.length)
  const dispatch = useDispatch()
  function newCutomerHandelr (){
    dispatch({
      type: actions.newCustomer,
    })
  }
  return (
    <>
      <div className={style.queueLineSys}>
          <span className={style.title}> Customer Number </span>
          <b> {all} </b>
          <span className={style.title}> {waiting} are waiting</span>
      </div>
      <button className={style.newCustomerBtn} onClick={newCutomerHandelr} />
    </>
  )
}
