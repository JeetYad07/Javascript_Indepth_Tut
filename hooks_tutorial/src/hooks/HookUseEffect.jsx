import { useState,useEffect } from 'react'



function HookUseEffect() {
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


const [screenWidth, setScreenWidth] = useState(window.innerWidth)
 useEffect(()=>{
    window.addEventListener("resize",()=>{
        setScreenWidth(window.innerWidth)
    })
        
    return ()=>{
        window.removeEventListener("resize")
    }
 },[count])

  return (
    <>

    <button onClick={handleSub}>-</button>
    <span>{count.num}</span>
    <span>{count.id}</span>
   
    <button onClick={handleAdd}>+</button>
    <p>{screenWidth}</p> 
    </>
  )
}

export default HookUseEffect
