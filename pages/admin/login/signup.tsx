import React, { useState } from 'react';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, VStack, Image, HStack } from '@chakra-ui/react';
import firebase from 'firebase/app';
import { auth } from '@/firebase/firebaseInit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import 'firebase/auth';

function SignupPage() : React.JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error : unknown) {
        error instanceof Error && setError(error.message);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <Box p={4} display='flex' justifyContent='center' alignItems='center' maxWidth="100%" mx="auto">
    <HStack>
        <Image boxSize='500px' src='/images/Logo_with_background.png' />
      <VStack spacing={4}>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={handleEmailChange} />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={handlePasswordChange} />
        </FormControl>

        {error && <FormErrorMessage>{error}</FormErrorMessage>}

        <Button colorScheme="blue" onClick={handleSignup}>
          Sign up
        </Button>
      </VStack>
      </HStack>
    </Box>
  );
};

export default SignupPage;
