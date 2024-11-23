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
  Stack,
  useToast
} from '@chakra-ui/react';
import { theme } from '../../theme/theme' 
import LeftSection from './left-section';
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios';
import Toaster from '../shared-components/toast';
import { ToasterPropTypes } from '../shared-components/toast';


const ContactUs: React.FC = () => {

  const toast = useToast()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);

  const [alert, setAlert] = useState<ToasterPropTypes>({
    display: false,
    status: 'success',
    title: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaVerified(!!value); // Set to true if a captcha value exists
  };

  return (
    <Box backgroundColor={theme.palette.darkBrown} py={40} px={20}>
      <Heading as="h1" mb={6} color={theme.palette.cream} textAlign="center">
        Contact Us
      </Heading>
      <Stack direction={{base: 'column', md: 'row'}} spacing={20} justifyContent={'center'} alignItems={'center'}>
        <LeftSection />
        <form onSubmit={sendMessage} >
            <VStack spacing={4} width={{base: '100%', md: '500px'}}>
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

  async function sendMessage(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault()
    if(captchaVerified) {
      try {
        const response = await axios.post('/api/sendEmail', formData);
        if(response.status === 200) {
          toast({
            title: 'Message Sent',
            status: 'success',
            duration: 10000,
            isClosable: true,
            position: 'bottom-right',
            description: 'Thank you for contacting us. We will get back to you shortly.'
        })
          
        } else {
          toast({
            title: 'Message Error',
            status: 'error',
            duration: 10000,
            isClosable: true,
            position: 'bottom-right',
            description: 'There was an error sending your message. Please try again later.'
        })
        }
      } catch (error) {
        toast({
          title: 'Message Error',
          status: 'error',
          duration: 10000,
          isClosable: true,
          position: 'bottom-right',
          description: 'There was an error sending your message. Please try again later.'
        })
      }
    }
  }
};
  export default ContactUs;
