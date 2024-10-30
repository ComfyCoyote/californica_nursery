import { 
    Modal, 
    ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    ModalCloseButton, 
    Button, 
    Text, 
  } from '@chakra-ui/react';
  import React from 'react';
  
  interface ThankYouModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

const ThankYouModal: React.FC<ThankYouModalProps> = ({ isOpen, onClose }) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thank You for Your Purchase!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={4}>
              Please check your email for your order confirmation and pickup details.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };
  
  export default ThankYouModal;
  