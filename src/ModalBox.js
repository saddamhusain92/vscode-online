import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const ModalBox = () => {
    const [show, setShow] = useState(false);
    const[state,setState]=useState("")
  const handleShow = (arg)=>{
    switch(arg){
      case "add":{
        setState("add")
        setShow(true);
        break
      }
      case "update":{
        setState("update")
         setShow(true);
        break
      }
      case "delete":{
        setState("delete")
         setShow(true);
        break
      }
      default:
      alert("kjfkgjh")
     }
     
  }
  const handleClose = () => setShow(false);
  return (
    <div>
    <Button variant="primary" onClick={()=>handleShow("update")}>
        update
      </Button>
      <Button variant="primary" onClick={()=>handleShow("add")}>
        add user
      </Button>
      <Button variant="primary" onClick={()=>handleShow("delete")}>
        delete
      </Button>

      <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        {state==="add"?"add  Woohoo, you're reading this text in a modal!":state==="update"?"update  Woohoo, you're reading this text in a modal!":state==="delete"?"delete  Woohoo, you're reading this text in a modal!":"none"}
      </Modal.Body>
        
      </Modal>

    </div>
  )
}

export default ModalBox