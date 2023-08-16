import { Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    HStack,
    Text
  } from '@chakra-ui/react';


interface TableModalPropTypes {

    isModalOpen: boolean;
    listStatus: string;
    docName: string;
    handleModalClose: () => void;
    handleEditClick: () => void;
    handleDeleteClick: () => void;
    addToMarketplace: () => void;

}




const TableModal: React.FC<TableModalPropTypes> = ({isModalOpen, handleModalClose, handleEditClick, handleDeleteClick, docName, listStatus, addToMarketplace}) => {

    return(

        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{docName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack spacing={5}>
            <Button variant="outline" colorScheme="blue" onClick={handleEditClick}>
              Edit
            </Button>
            <Button variant="outline" colorScheme="red" onClick={handleDeleteClick}>
              Delete
            </Button>
            {listStatus === 'unlisted' && <Button variant='outline' colorScheme='blue' onClick={addToMarketplace}>
                List
            </Button>}
            </HStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={handleModalClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    )
}

export default TableModal