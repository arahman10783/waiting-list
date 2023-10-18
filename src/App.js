import Theme from "./app/Theme";
import { Provider } from "react-redux";
import { store } from "./store/store";


function App() {
  return (
    <Provider store={store}>
      <Theme/>
    </Provider>
  );
}

export default App;
