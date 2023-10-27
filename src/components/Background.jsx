import React from 'react'
import './Background.css'
import { useDispatch, useSelector } from 'react-redux'
import { black, blue, green, info, orange, red, yellow } from '../redux/backgroundSlice'

function Background() {
  const back=useSelector((state)=>state.backgroundReducer.count)

  const dispatch=useDispatch()
  var bgContent=""
  if (back===0){
    bgContent='black'
  }
  else if(back===1){
    bgContent='red'
  }
  else if(back===2){
    bgContent='orange'
  }
  else if(back===3){
    bgContent='green'
  }
  return (
    <div className={bgContent} style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',width:'100%'}} >
   <div>
      <h1 style={{color:'white',fontWeight:'bold',fontFamily:'revert-layer'}}>BACKGROUND COLOR CHANGER</h1>
      <div className='d-flex justify-content-between bgButton border rounded bg-light p-5'>
        <button style={{width:'100px',fontWeight:'bold'}} onClick={()=>dispatch(black())} className='btn btn-dark rounded border' >BLACK</button>
        <button style={{width:'100px',fontWeight:'bold'}} onClick={()=>dispatch(red())}  className='btn btn-danger rounded border' >RED</button>
        <button style={{width:'100px',fontWeight:'bold'}} onClick={()=>dispatch(orange())}  className='btn btn-warning rounded border' >ORANGE</button>
        <button style={{width:'100px',fontWeight:'bold'}} onClick={()=>dispatch(green())} className='btn btn-success rounded border' >GREEN</button>
      </div>
  
   </div>
    </div>
  )
}

export default Background