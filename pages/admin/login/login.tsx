import { Box, Button, FormControl, FormErrorMessage, FormLabel, HStack, Input, VStack, Image, Text} from '@chakra-ui/react';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, browserSessionPersistence, setPersistence } from "firebase/auth";


interface LoginCredentials {
  email: string;
  password: string;
}

function LoginPage() {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const auth = getAuth();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (credentials.email && credentials.password) {
      setPersistence(auth, browserSessionPersistence).then(() =>
        signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
            
            const user = userCredential.user;
        
        
        }).catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setError(errorMessage)
        }))
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
        });
        
    } else {
      
      setError('Please enter your credentials');
    }
  };

  return (
    <Box width={'100%'} >
      <HStack width={'100%'}>
      <Image boxSize='45%' src='/images/garden_sign.png' alt='/images/vercel.svg'/>
      <form onSubmit={handleSubmit}>
        <VStack width={'100%'} ml={'10%'} spacing={4}>
          <Text 
          fontSize={20} 
          fontWeight={600}
          mb={'20%'}
           >
            Login to Californica Nursery
          </Text>
          <FormControl isInvalid={!!error}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              required
            />
            <FormErrorMessage>{error}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!error}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              required
            />
            <FormErrorMessage>{error}</FormErrorMessage>
          </FormControl>

          <Button variant={'outline'} type="submit" colorScheme="blue">
            Log in
          </Button>
        </VStack>
      </form>
      </HStack>
    </Box>
  );
}

export default LoginPage;
