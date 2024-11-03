import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  FormControl, 
  FormLabel, 
  Input, 
  Textarea, 
  VStack, 
  Heading, 
  useToast, 
  Stack
} from '@chakra-ui/react';
import { theme } from '../../theme/theme' 
import LeftSection from './left-section';
import ReCAPTCHA from 'react-google-recaptcha'

const ContactUs: React.FC = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaVerified(!!value); // Set to true if a captcha value exists
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaVerified) {
      toast({
        title: "Captcha not verified",
        description: "Please complete the captcha test.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We will get back to you shortly.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setCaptchaVerified(false);
  };

  return (
    <Box backgroundColor={theme.palette.darkBrown} py={40} px={20}>
      <Heading as="h1" mb={6} color={theme.palette.cream} textAlign="center">
        Contact Us
      </Heading>
      <Stack direction={{base: 'column', md: 'row'}}spacing={20}>
        <LeftSection/>
        <form onSubmit={handleSubmit}>
            <VStack spacing={4} minWidth={500}>
            <FormControl id="name" isRequired>
                <FormLabel color={theme.palette.cream}>Name</FormLabel>
                <Input
                color={theme.palette.cream}
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                />
            </FormControl>
            <FormControl id="email" isRequired>
                <FormLabel color={theme.palette.cream}>Email</FormLabel>
                <Input
                color={theme.palette.cream}
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                />
            </FormControl>
            <FormControl id="subject">
                <FormLabel color={theme.palette.cream}>Subject</FormLabel>
                <Input
                color={theme.palette.cream}
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                />
            </FormControl>
            <FormControl id="message" isRequired>
                <FormLabel color={theme.palette.cream}>Message</FormLabel>
                <Textarea
                color={theme.palette.cream}
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                />
            </FormControl>
            <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ? process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY : ''} // Replace with your actual site key
            onChange={handleCaptchaChange}
            />
            <Button colorScheme="blue" type="submit" width="full">
                Send Message
            </Button>
            </VStack>
        </form>
      </Stack>
    </Box>
  );
};

export default ContactUs;
