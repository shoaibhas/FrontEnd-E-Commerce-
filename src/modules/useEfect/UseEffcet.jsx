import React, { useState,useEffect } from 'react'

const UseEffcet = () => {
    const [count,setCount]=useState(0)
    const [data,setData]=useState('shoaib')
    const incre=()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        console.log('mounted');
    },[data])
    const decre=()=>{
        setCount(count-1)
        if(count<=0){
            setCount(0)
        }

    }
    const abc=()=>{
        setData('hassan')
    }
  return (
    <>
    <div>UseEffcet</div>
    <h1>{count}</h1>
    <button onClick={incre}>click</button>
    <button onClick={decre}>click</button>
    <button onClick={abc}>click</button>
    </>
  )
}

export default UseEffcet