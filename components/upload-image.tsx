import { Box, Button, ChakraProvider, Heading, Input, Image } from '@chakra-ui/react';
import React, { useState } from 'react';

interface UploadImageContainerPropTypes{

  selectedImages: File[];
  setSelectedImages: (file : any | null) => void;

}



const UploadImageContainer = (props : UploadImageContainerPropTypes) => {

  const {selectedImages, setSelectedImages} = props

  console.log(selectedImages)

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console
    const files = event.target.files;
    if (files) {
      setSelectedImages(Array.from(files));
      setCurrentImageIndex(0); // Reset to the first image
    }
  };

  const handleUpload = () => {
    // Here, you can implement your image upload logic using a backend API
    console.log('Uploading images:', selectedImages);
  };

  const handleImageChangeClick = (increment: number) => {
    const newIndex = currentImageIndex + increment;
    if (newIndex >= 0 && newIndex < selectedImages.length) {
      setCurrentImageIndex(newIndex);
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
    setCurrentImageIndex(Math.min(index, updatedImages.length - 1));
  };

  return (
    <ChakraProvider>
      <Box p={4}>
        <Input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          mb={4}
        />
        {selectedImages.length > 0 && (
          <Box mb={4}>
            <Image
              src={URL.createObjectURL(selectedImages[currentImageIndex])}
              alt={`Image ${currentImageIndex + 1}`}
              maxH="300px"
              mb={2}
            />
            <Button
              colorScheme="blue"
              onClick={() => handleImageChangeClick(-1)}
              disabled={currentImageIndex === 0}
              mr={2}
            >
              Previous
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => handleImageChangeClick(1)}
              disabled={currentImageIndex === selectedImages.length - 1}
            >
              Next
            </Button>
          </Box>
        )}
        {selectedImages.length > 0 && (
          <Button colorScheme="red" onClick={() => handleRemoveImage(currentImageIndex)}>
            Remove Current Image
          </Button>
        )}
      </Box>
    </ChakraProvider>
  );
};

export default UploadImageContainer;


/*
const UploadImageContainer = (props: UploadImageContainerPropTypes) => {
  
  //const [selectedImage, setSelectedImage] = useState<File | null>(null);
  //console.log(selectedImage)
  //let imgName : string;

  const {selectedImage, setSelectedImage} = props

  

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleClearImage = () => {
    setSelectedImage(null);
  };


  return (
    <Box m={'10%'} width={'500px'} height={'500px'} >
      <VStack width={'100%'} height={'100%'}>
        <Center width={'100%'} height={'100%'}>
          {selectedImage ? (
            <img src={URL.createObjectURL(selectedImage)} alt="Selected" width={200} height={200} />
          ) : (
            <Box width={'80%'} height={'80%'} border="2px dashed gray">
              <Text textAlign="center">No image selected</Text>
            </Box>
          )}
        </Center>

        <input type="file" accept="image/*" onChange={handleImageUpload} />

        {selectedImage && (
          <Button colorScheme="red" onClick={handleClearImage}>
            Clear Image
          </Button>
        )}
      </VStack>
    </Box>
  );
};

export default UploadImageContainer;


// 'file' comes from the Blob or File API

*/
