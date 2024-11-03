// SocialMediaIcons.tsx
import React from 'react';
import { HStack, IconButton } from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

interface SocialMediaIconsProps {
  spacing?: number;
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({ spacing = 4 }) => {
  return (
    <HStack spacing={spacing} justify="left">
      <IconButton
        as="a"
        href="https://www.instagram.com"
        aria-label="Instagram"
        icon={<FaInstagram />}
        colorScheme="pink"
        variant="ghost"
      />
      <IconButton
        as="a"
        href="https://www.facebook.com"
        aria-label="Facebook"
        icon={<FaFacebook />}
        colorScheme="facebook"
        variant="ghost"
      />
      <IconButton
        as="a"
        href="https://www.twitter.com"
        aria-label="Twitter"
        icon={<FaTwitter />}
        colorScheme="twitter"
        variant="ghost"
      />
      <IconButton
        as="a"
        href="https://www.linkedin.com"
        aria-label="LinkedIn"
        icon={<FaLinkedin />}
        colorScheme="linkedin"
        variant="ghost"
      />
    </HStack>
  );
};

export default SocialMediaIcons;
