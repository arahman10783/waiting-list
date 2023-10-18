import React from "react";
import style from "./Counter.module.css";
import formatCount from '../../helpers/formatCount'

export default function Counter({ number }) {  
  return (
    <div className={style.counter}>
      {formatCount(number)}
    </div>
  );
}
