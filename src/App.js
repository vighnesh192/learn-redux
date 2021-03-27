import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-link">Count {count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </header>
    </div>
  );
}

export default App;
