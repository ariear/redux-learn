import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../slices/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className='m-5'>
      <button className='py-2 px-5 rounded-md bg-blue-400 hover:bg-blue-500 transition-all text-white' onClick={handleIncrement}>Increment</button>
      <span className='mx-5'>{count}</span>
      <button className='py-2 px-5 rounded-md bg-red-400 hover:bg-red-500 transition-all text-white' onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;