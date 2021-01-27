import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react'
import Message from './Message'
export default  function App() {  
  let [count,setcount]= useState(2);
   return (
    <div >      
      This is first react project - 01    
      <Message counter={count} />
   
    <button onClick={
      ()=>setcount(++count)
      }
      > Update Counter </button>
    </div> 
     ); 
    
    }  