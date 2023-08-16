import { Box, Table, Tbody, Td, Th, Thead, Tr, Input, ListItem, SystemStyleObject, Avatar } from '@chakra-ui/react';
import { db } from '@/firebase/firebaseInit';
import { collection, getDocs, deleteDoc, doc, setDoc } from "firebase/firestore";
import { useState } from 'react';
import { GetServerSideProps } from 'next';
import TableModal from '@/components/tableModal';


interface ListItem {
  name: string;
  list_status: string;
  description: string | null;
  type: string;
  quantity: string;
  sku: string | null;
  price: string;
  owner: string | null
  size: string | null;
  category: string | null;
  subcategory: string | null;
  id: string;

}

interface ListTablePropTypes {

  dataList: Array<ListItem>;

}



const tableRowStyles: SystemStyleObject = {
  cursor: 'pointer',
  _hover: {
    background: 'gray.100',
  },
};



const SampleListTable: React.FC<ListTablePropTypes> = ({dataList}) => {
  
  const [list, setList] = useState<ListItem[]>(dataList);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [modal, setModal] = useState<boolean>(false)
  const [selectedDocument, setSelectedDocument] = useState<ListItem>({} as ListItem)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    filterList(event.target.value);
  };

  const handleFirebaseDelete = async (document: ListItem) => {

    await deleteDoc(doc(db, "Products", document.id)).catch((error) => console.log(error))
    const index = dataList.indexOf(document)
    delete dataList[index]
    setModal(false)
  }

  const handleRowClick = (item: ListItem) => {

    setModal(true)
    setSelectedDocument(item)
  
  }

  const filterList = (term: string) => {
    const filteredList = dataList.filter((item: ListItem) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setList(filteredList);
  };

  const addToMarketplace = async (document: ListItem) => {

    document.list_status === 'listed'

    await setDoc(doc(db, 'Products', document.id), document)
  }

  return (
    <Box p={4}>
        <Input
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
        mb={4}
        w="300px"
      />
      <TableModal 
        isModalOpen={modal}
        listStatus={selectedDocument.list_status}
        addToMarketplace={() => addToMarketplace(selectedDocument)}
        handleDeleteClick={() => handleFirebaseDelete(selectedDocument)}
        docName={selectedDocument.name}
        handleEditClick={() => console.log('edit clicked')}
        handleModalClose={() => setModal(false)}/>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Name</Th>
            <Th>Quantity</Th>
            <Th>Type</Th>
            <Th>SKU</Th>
            <Th>Price</Th>
            <Th>Owner</Th>
            <Th>Size</Th>
            <Th>Category</Th>
            <Th>Subcategory</Th>
            <Th>Item ID</Th>
          </Tr>
        </Thead>
        <Tbody>
          {list.map((item) => (
            <Tr onClick={() => handleRowClick(item)} key={item.id} _hover={tableRowStyles}>
              <Avatar></Avatar>
              <Td>{item.name}</Td>
              <Td>{item.list_status}</Td>
              <Td>{item.quantity}</Td>
              <Td>{item.type}</Td>
              <Td>{item.sku}</Td>
              <Td>{item.price}</Td>
              <Td>{item.owner}</Td>
              <Td>{item.size}</Td>
              <Td>{item.category}</Td>
              <Td>{item.subcategory}</Td>
              <Td>{item.id}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};


export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "Products"));

    const dataList: Array<ListItem> = []
    
    const data = querySnapshot.forEach((doc) => {
      dataList.push({id: doc.id,
      ...doc.data()
    } as ListItem)});

    return {
      props: {
        dataList
      }
    };
  } catch (error) {
    console.error('Error fetching data: ', error);
    return {
      props: {
        data: []
      }
    };
  }
}



export default SampleListTable;
