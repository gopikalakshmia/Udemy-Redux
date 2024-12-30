import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {
  const counter=useSelector(state=>state.count);
  const showCounter=useSelector(state=>state.showCounter);
  const dispatch=useDispatch();
  const toggleCounterHandler = () => {
    dispatch({type:'Toggle'});
  };
  const handleInc=()=>{
    dispatch({type:'Increment'})
  }
  const handleDec=()=>{
    dispatch({type:'Decrement'})
  }
  const handleIncby=()=>{
    dispatch({type:'Incby5',amount:5})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter&&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleIncby}>Increment by 5</button>
        <button onClick={handleDec}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
