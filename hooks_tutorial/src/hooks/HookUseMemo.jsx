import { useMemo, useState } from 'react'



function HookUseMemo() {
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

const [show,setShow] = useState(false)
//  useMemo(()=>{},[])
const handleChange = () => {
    for (let i = 0; i < 1000000000; i++) {
       
        return count.num * 2;
        
    }
}

  return (
    <>
    <button onClick={handleSub}>-</button>
    <span>{count.num}</span>
    <span>{count.id}</span>
    <button onClick={handleAdd}>+</button>
      
      <p>{handleChange()}</p>
    </>
  )
}

export default HookUseMemo
