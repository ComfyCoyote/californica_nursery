// Footer.tsx
import React from 'react';
import { Box, Container, Stack, Text, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import { theme } from '@/theme/theme'
//embedded email link into email
// embedded email box to send emails directly from website

//adjust font for text

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
          <Text fontSize={20} fontWeight={700} color={theme.palette.cream}>Californica Nursery</Text>
          <Text fontSize={20} color={theme.palette.cream}>Tongva and Acjachemen Land - Long Beach, CA</Text>
          <Text fontSize={20} color={theme.palette.cream}>californicanursery@gmail.com</Text>
          <Text fontSize={20} color={theme.palette.cream}>© {new Date().getFullYear()} Californica Nursery. All rights reserved.</Text>
        </Stack>
        <Stack direction={'row'} spacing={10}>
        <Stack alignItems={'flex-end'}>
          <Text fontSize={20} fontWeight={700} color={theme.palette.cream}>
            EXPLORE
          </Text>
          <Link href={'/about'}>
            <Text fontSize={20} color={theme.palette.cream}>
              ABOUT
            </Text>
          </Link>
          <Link href={'/landscaping'}>
            <Text fontSize={20} color={theme.palette.cream}>
              LANDSCAPING
            </Text>
          </Link>
          <Link href={'/'}>
            <Text fontSize={20} color={theme.palette.cream}>
              INSTAGRAM
            </Text>
          </Link>
          <Link href={'/'}>
            <Text fontSize={20} color={theme.palette.cream}>
              HOME
            </Text>
          </Link>
        </Stack>
        <Stack>
          <Text fontSize={20} fontWeight={700} color={theme.palette.cream}>
            SHOP
          </Text>
          <Link href={'/plants'}>
            <Text fontSize={20} color={theme.palette.cream}>
              PLANTS
            </Text>
          </Link>
          <Link href={'/seeds'}>
            <Text fontSize={20} color={theme.palette.cream}>
              SEEDS
            </Text>
          </Link>
          <Link href={'/merch'}>
            <Text fontSize={20} color={theme.palette.cream}>
              MERCH
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
