import { createStore } from "redux";
import cutomerReducer from './reducer';


export const store = createStore(cutomerReducer)