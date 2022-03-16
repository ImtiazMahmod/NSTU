import React from "react";
import { Modal } from "react-bootstrap";
import "./ChatBot.css";
const ChatBot = ({ show, setShow }) => {
  return (
    <div>
      <Modal show={show} dialogClassName="chatBot">
        <Modal.Header style={{backgroundColor:'#005247'}} closeButton onHide={() => setShow(false)}>
          <Modal.Title >
          <div className="d-flex justify-content-center align-items-center">  <img width={50} src=" https://i.ibb.co/Jt3dydN/chat2.png" alt="support"/>
            <h4 className="text-white ms-2">Support</h4></div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe title='bot' src='https://webchat.botframework.com/embed/NSTUNow101?s=S70J09r2a-0.-Twl19Ccpvh9CSjA8G0_8nDHmGqu144-874ONSpE6XQ'
            style={{
              minWidth: " 350px",
              width: "100%",
              minHeight: "400px"
            }}>
        </iframe>
          {/* <p
            className="text-center text-secondary "
            style={{ fontSize: "14px" }}
          >
            Developed by Imtiaz Mahmod
          </p> */}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ChatBot;
