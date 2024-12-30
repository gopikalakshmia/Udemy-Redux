import {createStore} from 'redux';

const countReducer=(state={count:0},action)=>{
if(action.type==='Increment'){
    return {count:state.count+1}
}
else if(action.type==='Decrement'){
    return {count:state.count-1}
}
return state;
}

const store=createStore(countReducer);

export default store;