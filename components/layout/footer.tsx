// Footer.tsx
import {Stack, Text, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import { theme } from '@/theme/theme'
//embedded email link into email
// embedded email box to send emails directly from website

//adjust font for text

const Footer: React.FC = () => {
  return (
      <Stack
        backgroundColor={theme.palette.darkBrown}
        py={4}
        px={10}
        width={'100%'}
        direction={{ base: 'column', md: 'row' }} 
        justifyContent={{ base: 'center', md: 'space-between' }} 
        alignItems={{ base: 'center', md: 'flex-start' }} 
        spacing={4}
      >
        <Stack alignItems={{ base: 'center', md: 'flex-start' }} spacing={2}>
          <Text fontSize={{ base: '16px', md: '20px' }} fontWeight={700} color={theme.palette.cream}>
            Californica Nursery
          </Text>
          <Text fontSize={{ base: '14px', md: '20px' }} color={theme.palette.cream}>
            Tongva and Acjachemen Land - Long Beach, CA
          </Text>
          <ChakraLink href="mailto:californicanursery@gmail.com" isExternal >
            <Text fontSize={{ base: '14px', md: '20px' }} color={theme.palette.cream}>
              californicanursery@gmail.com
            </Text>
          </ChakraLink>
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
            <Link href={'https://www.instagram.com/californicanursery/'}>
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
  );
};

export default Footer;
