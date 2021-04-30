import React, {useState} from 'react'
import './Formstyle.css'
function Counter() {
    const [count,setCount] = useState(0)
    function increment(){
        setCount((prevCount) => prevCount + 1)
        return count
    }
    function decrement(){
        setCount((prevCount) => prevCount - 1)
        return count
    }
    return (
        <div className="formDetails">
            <h1>{count}</h1>
            <button onClick={increment} style={{marginRight:'10px'}}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
export default Counter;
