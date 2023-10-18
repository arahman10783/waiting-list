import { useState } from "react";
import Theme from "./app/Theme";
import { Provider } from "react-redux";
import { store } from "./store/store";


function App() {
  const [coustomerList, setCoustomerList] = useState([])

  function newCustomerHandeler(){
    setCoustomerList([...coustomerList, {
      id: new Date().toJSON(),
      number: coustomerList.length + 1,
      status: 'waiting'
    }])
  }


  function custonmerStateHandeler(id, newState){
    const updated = coustomerList.find(el => el.id === id)
    setCoustomerList((prev) => [
      ...prev.filter(el => el.id !== id),
      {
        ...updated,
        status: newState
      }
    ])
  }


  return (
    <Provider store={store}>
      <Theme/>
    </Provider>
  );
}

export default App;
