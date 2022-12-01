import React,{useReducer} from 'react'
import './Counter.css'

const initialState = 0
const Reducer = (state,action) =>{
    switch(action){
        case "Increment":
            return state + 1
        case "Decrement":
            return state - 1
        case "Reset":
            return initialState
    }
}


function Counter() {

    const[count,dispatch] = useReducer(Reducer,initialState)

  return (
    <div>
      <button className='increment' onClick={()=>dispatch('Increment')}>Increment</button>
      <button className='decrement' onClick={()=>dispatch('Decrement')}>Decrement</button>
      <button className='Reset' onClick={()=>dispatch('Reset')}>Reset</button>
      <h1>{count}</h1>
    </div>
  )
}

export default Counter
