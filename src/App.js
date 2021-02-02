import './App.css';
import { useDispatch, useSelector } from "react-redux";

import { divAction } from "./actions/divAction";
import { plusAction } from "./actions/plusAction";

function App() {

  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {"Count: " + count}
      <br/>
      <button onClick={() => dispatch(plusAction)}>Plus</button>
      <span>   </span>
      <button onClick={() => dispatch(divAction)}>Div</button>
      <span>   </span> 
      <button onClick={() => dispatch({type: "START"})}>START</button>
      <span>   </span>
      <button onClick={() => dispatch({type: "END"})}>END</button>
    </div>
  );
}

export default App;
