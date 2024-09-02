// Footer.tsx
import React from 'react';
import { Box, Container, Stack, Text } from '@chakra-ui/react';
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
      bgColor={theme.palette.darkBrown}
    >
      <Stack
        width={'100%'}
        direction={{ base: 'column', md: 'row' }} // Responsive direction for mobile and desktop
        justifyContent={{ base: 'center', md: 'space-between' }} // Center content on mobile, space between on desktop
        alignItems={{ base: 'center', md: 'flex-start' }} // Center align items on mobile
        spacing={4}
      >
        <Stack alignItems={{ base: 'center', md: 'flex-start' }} spacing={2}>
          <Text fontSize={{ base: '16px', md: '20px' }} fontWeight={700} color={theme.palette.cream}>
            Californica Nursery
          </Text>
          <Text fontSize={{ base: '14px', md: '20px' }} color={theme.palette.cream}>
            Tongva and Acjachemen Land - Long Beach, CA
          </Text>
          <Text fontSize={{ base: '14px', md: '20px' }} color={theme.palette.cream}>
            californicanursery@gmail.com
          </Text>
          <Text fontSize={{ base: '14px', md: '20px' }} color={theme.palette.cream}>
            © {new Date().getFullYear()} Californica Nursery. All rights reserved.
          </Text>
        </Stack>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 4, md: 10 }} mt={{ base: 4, md: 0 }}>
          <Stack alignItems={{ base: 'center', md: 'flex-end' }} spacing={2}>
            <Text fontSize={{ base: '16px', md: '20px' }} fontWeight={700} color={theme.palette.cream}>
              EXPLORE
            </Text>
            <Link href={'/about'}>
              <Text fontSize={{ base: '14px', md: '20px' }} color={theme.palette.cream}>
                ABOUT
              </Text>
            </Link>
            <Link href={'/landscaping'}>
              <Text fontSize={{ base: '14px', md: '20px' }} color={theme.palette.cream}>
                LANDSCAPING
              </Text>
            </Link>
            <Link href={'/'}>
              <Text fontSize={{ base: '14px', md: '20px' }} color={theme.palette.cream}>
                INSTAGRAM
              </Text>
            </Link>
            <Link href={'/'}>
              <Text fontSize={{ base: '14px', md: '20px' }} color={theme.palette.cream}>
                HOME
              </Text>
            </Link>
          </Stack>
          <Stack alignItems={{ base: 'center', md: 'flex-start' }} spacing={2}>
            <Text fontSize={{ base: '16px', md: '20px' }} fontWeight={700} color={theme.palette.cream}>
              SHOP
            </Text>
            <Link href={'/plants'}>
              <Text fontSize={{ base: '14px', md: '20px' }} color={theme.palette.cream}>
                PLANTS
              </Text>
            </Link>
            <Link href={'/seeds'}>
              <Text fontSize={{ base: '14px', md: '20px' }} color={theme.palette.cream}>
                SEEDS
              </Text>
            </Link>
            <Link href={'/merch'}>
              <Text fontSize={{ base: '14px', md: '20px' }} color={theme.palette.cream}>
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
