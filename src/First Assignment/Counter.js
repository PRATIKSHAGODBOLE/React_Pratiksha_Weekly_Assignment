import React from 'react'

export default function Counter({count, setcount}) {
    
    const increment = () =>{
        setcount(count + 1);
    }

    const decrement = () =>{
        if(count > 0){
            setcount(count - 1)
        }else{
            alert("Error cannot go below 0")
        }
    }
        const reset = () =>{
                setcount(0)
            }

       
    
  return (
    <div className="container text-center bg-dark mt-5" style={{ height: "350px", width: "500px" }}>
        <div className='main '>
            <h1 className='text-white'>Counter Using React</h1>
            <p className='text-light'>{"Your Current Count is : "+ count}</p>
            <button className='btn btn-light mx-3 mb-5' onClick={increment}>Increment</button>
            <button className='btn btn-light mx-3 mb-5' onClick={decrement}>Decrement</button>
            {count > 10 && (
           <button className="btn btn-outline-light mb-5" onClick={reset}>GO BACK TO 0</button>

            )}
        </div>


    </div>
  )
}
