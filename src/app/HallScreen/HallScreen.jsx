import style from './HallScreen.module.css'
import Counter from '../../sharedComponents/Counter'
import { useDispatch, useSelector } from 'react-redux'
import { nextCustomer,allCustomers, waitingCustomers, currentCustomer } from '../../store/customerSlice'

export default function HallScreen() {
  const current = useSelector(currentCustomer)
  const waiting = useSelector(waitingCustomers)
  const all = useSelector(allCustomers)
  const dispatch = useDispatch()
  function handleNext (){
    dispatch(nextCustomer({
      id: current.id,
      status: 'served'
    }))
  }
  return (
    <>
      <div className={style.hallScreen}>
          <Counter number={current?.number || all.length} />
      </div>
      <button className={style.next} onClick={handleNext} disabled={waiting.length === 0}> Next </button>
    </>
  )
}