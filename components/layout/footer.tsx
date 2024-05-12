// Footer.tsx
import React from 'react';
import { Box, Container, Stack, Text, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import { ST } from 'next/dist/shared/lib/utils';
import { theme } from '@/theme/theme'
//embedded email link into email
// embedded email box to send emails directly from website


const Footer: React.FC = () => {
  return (
    <Box>
      <Container
        as={Stack}
        maxW={'100vw'}
        py={10}
        spacing={4}
        justify={'center'}
        align={'center'}
        bgColor={theme.palette.darkBrown}>
        <Stack width={'100%'} direction={'row'} justifyContent={'space-between'}>
        <Stack>
          <Text fontSize={20} fontWeight={800} color={'white'}>Californica Nursery</Text>
          <Text fontSize={20} fontWeight={800} color={'white'}>Tongva and Acjachemen Land - Long Beach, CA</Text>
          <Text fontSize={20} fontWeight={800} color={'white'}>californicanursery@gmail.com</Text>
          <Box textAlign="center" pt={6}>
            <Text fontSize={20} fontWeight={800} color={'white'}>© {new Date().getFullYear()} Californica Nursery. All rights reserved.</Text>
        </Box>
        </Stack>
        <Stack direction={'row'} spacing={10}>
        <Stack>
          <Link href={'/about'}>
            <Text fontSize={20} fontWeight={800} color={'white'}>
              About
            </Text>
          </Link>
          <Link href={'/landscaping'}>
            <Text fontSize={20} fontWeight={800} color={'white'}>
              Landscaping
            </Text>
          </Link>
          <Link href={'/'}>
            <Text fontSize={20} fontWeight={800} color={'white'}>
              Instagram
            </Text>
          </Link>
          <Link href={'/'}>
            <Text fontSize={20} fontWeight={800} color={'white'}>
              Home
            </Text>
          </Link>
        </Stack>
        <Stack>
          <Link href={'/plants'}>
            <Text fontSize={20} fontWeight={800} color={'white'}>
              Plants
            </Text>
          </Link>
          <Link href={'/seeds'}>
            <Text fontSize={20} fontWeight={800} color={'white'}>
              Seeds
            </Text>
          </Link>
          <Link href={'/merch'}>
            <Text fontSize={20} fontWeight={800} color={'white'}>
              Merch
            </Text>
          </Link>
          <Link href={'/'}>
            <Text fontSize={20} fontWeight={800} color={'white'}>
              Cart
            </Text>
          </Link>
        </Stack>
        </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
