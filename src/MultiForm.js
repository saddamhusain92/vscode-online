import React,{ useState } from 'react';
const MultiForm = () => {
    const[state,setState] = useState({
        fullname:"",
        Permissions:{
          read:"",
          write:"",
          upload:""
        }
      })
     const chkhandle = (e)=>{
      const{name,checked}= e.target
     setState({...state,Permissions:{...state.Permissions,[name]:checked}})
      
     }
      const formSubmit=(e)=>{
        // e.preventDefault()
       console.log(state);
        
      }
  return (
    <div>
    <form onSubmit={formSubmit}>
    <input type={"text"} placeholder="Enter your Name" onChange={(e)=>setState({...state,fullname:e.target.value})}/><br/>
    <input type={"checkbox"} name="read" onChange={chkhandle}/><br/>
    <input type={"checkbox"} name="write"  onChange={chkhandle}/><br/>
    <input type={"checkbox"} name="upload"  onChange={chkhandle}/><br/>

<button type='submit'>
  submit
</button>
  </form>
    </div>
  )
}

export default MultiForm