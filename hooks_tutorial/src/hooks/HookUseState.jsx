import { useState } from 'react'



function HookUseState() {
//  const [count,setCount] =  useState(0)
const [count,setCount] =  useState({
  num: 1,
  id: "abc",
});

 const handleAdd = () => {
  // setCount(count + 1) // setCount is asynchronous, it will not update res immediately
  // setCount(count + 1)
  // console.log(count)

  // to resolve, we need to use callback
  // setCount((prev)=> prev + 1)
  // setCount((prev)=> prev + 1)
  // console.log(count);

  // for object
  setCount((prev ) => {
    return {
    ...prev,
    num: prev.num + 1
  }
})
 
  
 }
 const handleSub = () => {
  // setCount(count - 1) // setCount is asynchronous, it will not update res immediately
  // setCount(count + 1)
  // console.log(count)

  setCount((prev) => {
    return{
      ...prev,
      num: prev.num - 1
    }
  })
 }

  return (
    <>
    <button onClick={handleSub}>-</button>
    <h1>{count.num}</h1>
    <button onClick={handleAdd}>+</button>
      
    </>
  )
}

export default HookUseState
