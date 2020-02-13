import React, {Fragment, useState} from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Jumbotron>
        <h1>About us :D</h1>
        <p>
          This is basic next.js react app. It contains <strong>react-bootstrap</strong> components. <br/>
          For example, you can click the following button to open a Boostrap modal:
        </p>
        <p>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
        </p>
      </Jumbotron>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
}

export default Header;