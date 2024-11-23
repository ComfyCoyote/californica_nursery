// SocialMediaIcons.tsx
import React from 'react';
import { Stack, IconButton } from '@chakra-ui/react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialMediaIcons: React.FC = () => {
  return (
    <Stack direction={{base: 'column', md: 'row'}} spacing={2} justify="left">
      <IconButton
        as="a"
        href="https://www.instagram.com/californicanursery/"
        aria-label="Instagram"
        icon={<FaInstagram style={{fontSize: '3rem'}} />}
        colorScheme="pink"
        variant="ghost"
        size={'lg'}
      />
      <IconButton
        as="a"
        href="https://www.linkedin.com"
        aria-label="LinkedIn"
        size={'lg'}
        icon={<FaLinkedin style={{fontSize: '3rem'}}/>}
        colorScheme="blue"
        variant="ghost"
      />
    </Stack>
  );
};

export default SocialMediaIcons;
