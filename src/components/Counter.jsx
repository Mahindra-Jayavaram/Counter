import { useState } from "react"




export function Counter(props)
{
    const [counter, setCounter] = useState(0);

    const handleChange = (value)=>{
        setCounter(counter+value)
    }

    return (

        <div className="counters">
            <h3>Counter: {counter}</h3>
{/* 
            <button onClick = {()=>{
                setCounter(counter + 1)
                console.log(counter)
            }}>Add</button>

            <button onClick = {()=>{
                setCounter(counter - 1)
                console.log(counter)
            }}>Remove</button>

            <button onClick = {()=>{
                setCounter(counter * 2)
                console.log(counter)
            }}>Double</button>

            <button onClick = {()=>{
                setCounter(counter - counter)
                console.log(counter)
            }}>Become 0</button> */}

            <button onClick ={()=>{
                handleChange(1)
            }}>
                ADD
            </button>

            <button onClick ={()=>{

                if(counter >= 1) handleChange(-1)
            }}>
                Remove
            </button>

            <button onClick = {()=>{
                setCounter(counter * 2)
                console.log(counter)
            }}>Double</button>

            <button onClick = {()=>{
                setCounter(counter - counter)
                console.log(counter)
            }}>Become 0</button>


        </div>

    );
}