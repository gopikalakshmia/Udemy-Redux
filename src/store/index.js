import {createStore} from 'redux';

const initialState={count:0,showCounter:true};
const countReducer=(state=initialState,action)=>{
if(action.type==='Increment'){
    return {count:state.count+1,showCounter:state.showCounter}
}
else if(action.type==='Decrement'){
    return {count:state.count-1,showCounter:state.showCounter}
}
else if(action.type==='Toggle'){
    return {count:state.count,showCounter:!state.showCounter}
}
else if(action.type==='Incby5'){
    return {count:state.count+action.amount,showCounter:state.showCounter}
}
 
return state;
}

const store=createStore(countReducer);

export default store;