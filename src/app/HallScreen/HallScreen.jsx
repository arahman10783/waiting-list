import style from './HallScreen.module.css'
import Counter from '../../sharedComponents/Counter'

export default function HallScreen() {
  return (
    <>
      <div className={style.hallScreen}>
          <Counter number={0} />
      </div>
      <button className={style.next}> Next </button>
    </>
  )
}