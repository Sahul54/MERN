
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/slices/counterSlice'

function App() {
  const count = useSelector( (state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>

      <div>
        {count}
      </div>

      <div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>

    </div>
  )
}

export default App
