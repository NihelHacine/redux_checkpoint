import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { editalltask } from '../crud/todoslice/Todoslice';

function EditTodo({id}) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setedited] = useState({
    title:"{todo.title}",
    description:"{todo.description}",
    isDone: false,

  })
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Edit task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className='in'>
        <input type = "text" onChange={(e)=>setedited({...edited,title:e.target.value})}/>
        <input type = "text" onChange={(e)=>setedited({...edited,description:e.target.value})}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>{
            handleClose();
            dispatch(editalltask({id : id, edited}))
          }

          }>
            Edit
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditTodo