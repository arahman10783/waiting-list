import style from './HallScreen.module.css'
import Counter from '../../sharedComponents/Counter'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../store/actions'

export default function HallScreen() {
  const currentCustomer = useSelector(state => state.find(el => el.status === 'waiting'))

  const dispatch = useDispatch()
  function handleNext (){
    dispatch({
      type: actions.nextCustomer,
      payload: {
        id: currentCustomer.id,
        newState: 'served'
      }
    })
  }
  return (
    <>
      <div className={style.hallScreen}>
          <Counter number={currentCustomer.number} />
      </div>
      <button className={style.next} onClick={handleNext}> Next </button>
    </>
  )
}