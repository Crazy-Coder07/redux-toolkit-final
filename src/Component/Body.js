import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement,incrementByAmount} from '../Redux/slices/counterSlice';


const Body = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleincrementbyamount=()=>dispatch(incrementByAmount(5))  //it will increment by amount 5
  return (
    <div className='body'>
      <button onClick={handleIncrement}>Increment</button>
      <div className='b1'>{count}</div>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleincrementbyamount}>IncrementByAmount</button>
    </div>
  );
};

export default Body;
