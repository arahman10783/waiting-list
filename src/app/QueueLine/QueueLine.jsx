import { useDispatch, useSelector } from 'react-redux'
import style from './QueueLine.module.css'
import { newCustomer } from '../../store/customerSlice'

export default function QueueLine() {
  const waiting = useSelector(({coustomerSlice}) => coustomerSlice.filter(el => el.status === 'waiting').length)
  const all = useSelector(state => state.coustomerSlice.length)
  const dispatch = useDispatch()
  function newCutomerHandelr (){
    dispatch(newCustomer())
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
