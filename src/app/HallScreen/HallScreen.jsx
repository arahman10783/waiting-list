import style from './HallScreen.module.css'
import Counter from '../../sharedComponents/Counter'
import { useDispatch, useSelector } from 'react-redux'
import { nextCustomer } from '../../store/customerSlice'

export default function HallScreen() {
  const currentCustomer = useSelector(({coustomerSlice}) => coustomerSlice.find(el => el.status === 'waiting'))
  const waiting = useSelector(({coustomerSlice}) => coustomerSlice.filter(el => el.status === 'waiting').length)
  const all = useSelector(({coustomerSlice}) => coustomerSlice.length)
  const dispatch = useDispatch()

  function handleNext (){
    dispatch(nextCustomer({
      id: currentCustomer.id,
      status: 'served'
    }))
  }
  return (
    <>
      <div className={style.hallScreen}>
          <Counter number={currentCustomer?.number || all} />
      </div>
      <button className={style.next} onClick={handleNext} disabled={waiting === 0}> Next </button>
    </>
  )
}