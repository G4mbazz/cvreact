import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";

let checkEmpty = (obj) => {
  console.log(obj);
  if(obj === "null"){
    return "Github saknar beskrivning av projektet";
  }
  return obj;
}

// Uses the description from the selected github repo to show info in modal-popup.
export const ModalComponent = ({data}) =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
    <Button variant="dark" onClick={handleShow}>
    Mer Info
    </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{data.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>{checkEmpty(JSON.stringify(data.description))}</p>
    </Modal.Body>
  </Modal>
  </>
  )
}