// Footer.tsx
import React from 'react';
import { Box, Container, Stack, Text, useColorModeValue, Heading } from '@chakra-ui/react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <Box>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={10}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Stack direction={'row'} spacing={6}>
          <Link href={'/'}>Home</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/landscaping'}>Landscaping</Link>
          <Link href={'/marketplace'}>Marketplace</Link>
        </Stack>
        <Box textAlign="center">
          <Heading fontSize="lg">Californica Nursery</Heading>
          <Text fontSize="sm">Tongva and Acjachemen Land - Long Beach, CA</Text>
          <Text fontSize="sm">californicanursery@gmail.com</Text>
        </Box>
        <Box textAlign="center" pt={6}>
          <Text fontSize="sm">© {new Date().getFullYear()} Californica Nursery. All rights reserved.</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
