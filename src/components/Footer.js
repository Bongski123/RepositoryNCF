import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BiChat } from "react-icons/bi";
import { BiHelpCircle } from "react-icons/bi";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal"
    >
      <Modal.Header className="help-center" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Help Center
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Add content for the help center modal */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ChatModal(props) {
  return (
    <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Chat</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Chat with us</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
              Close
            </Button>
          </Modal.Footer>
    </Modal>
  )
}

function Footer() {
  const [showHelp, setShowHelp] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const handleShowHelp = () => setShowHelp(true);
  const handleCloseHelp = () => setShowHelp(false);
  
  const handleShowChat = () => setShowChat(true);
  const handleCloseChat = () => setShowChat(false);

  return (
    <section id="footer" className="footer-block">
      <Container fluid className="footer-container">
        <Button
          variant="success"
          size="lg"
          className="me-3"
          id="footer-icons"
          onClick={handleShowHelp}
        >
          <BiHelpCircle />
        </Button>
        <Button
          variant="success"
          size="lg"
          className="me-3"
          id="footer-icons"
          onClick={handleShowChat}
        >
          <BiChat />
        </Button>
      </Container>

      <MyVerticallyCenteredModal
        show={showHelp}
        onHide={handleCloseHelp}
      />
      
      <ChatModal
        show={showChat}
        onHide={handleCloseChat}
      />
      
    </section>
  );
}

export default Footer;
