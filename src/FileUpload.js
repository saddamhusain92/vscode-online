import React from 'react'

const FileUpload = () => {
    const[state,setState] = useState({
        name:"",
        email:"",
        file:null
      })
      const inputHandle =(e)=>{
        const {name,value}=e.target
        setState({...state,[name]:value})
     
        
      }
      const filefun=(e)=>{
        const {files}=e.target
        setState({...state,file:files[0]})
      }
      console.log(state);
  return (
    <div>
        <form>
        <input type={"text"} placeholder="Enter your Name" name='name' onChange={inputHandle} />
        <input type={"email"} placeholder="Enter your Name" name='email' onChange={inputHandle}/>
        <input type={"file"} placeholder="Enter your Name" name='file' onChange={filefun}/>
        <input type={"button"} value="submit" />
      </form>
    </div>
  )
}

export default FileUpload