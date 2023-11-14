// Message.js
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const MessageContainer = styled.div`
  position: fixed;
  top: 20%;
  right: ${({ show }) => (show ? '0' : '-300px')};
  transform: translateY(-50%);
  background-color: #DB3434;
  color: #fff;
  padding: 10px;
  transition: right 1s ease-in-out;
  font-weight: bold;
  z-index: 9999;
`;

const Message = ({ text, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 1000); // Cierra el mensaje después de 1 segundo
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return <MessageContainer show={show}>{text}</MessageContainer>;
};

export default Message;
