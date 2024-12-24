import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Text,
    Button,
    VStack,
    Box,
    IconButton
} from '@chakra-ui/react';
import { theme } from '@/theme/theme';
import Link from 'next/link';
import { useState } from 'react';
import NavbarDropdown from '../shared-components/navbar-dropdown';
import { FaBars } from 'react-icons/fa';

const NavDropdown: React.FC= () => {

    const [navDropdown, setNavDropdown] = useState(false)

    const shopOptions = [
        { value: 'option1', label: 'PLANTS', bgColor: theme.palette.lime, hoverColor: 'green.700', href: '/plants'},
        { value: 'option2', label: 'SEEDS', bgColor: theme.palette.skyBlue, hoverColor: 'blue.700', href: '/seeds' },
        { value: 'option3', label: 'MERCH', bgColor: theme.palette.pink, hoverColor: 'purple.700', href: '/merch' },
        // Add more options as needed
    ];
    
    const exploreOptions = [
        { value: 'option1', label: 'LANDSCAPING', bgColor: 'orange.300', hoverColor: 'orange.700', href: '/landscaping' },
        { value: 'option2', label: 'ABOUT', bgColor: 'yellow.200', hoverColor: 'yellow.600', href: '/about' },
    ]

    return(
        <VStack>
            <Popover isOpen={navDropdown} onClose={() => setNavDropdown(false)}>
            <PopoverTrigger>
                <Box textAlign="center" mt={{ base: 2, md: 0 }}>
                    <IconButton
                    onClick={() => setNavDropdown(!navDropdown)}
                    bgColor={theme.palette.darkGreen}
                    aria-label="search"
                    icon={<FaBars color={theme.palette.lime} style={{fontSize: '30px'}}/>}
                    height={50}
                    width={50} 
                    _hover={{ bgColor: 'transparent' }}
                    />
                </Box>
          </PopoverTrigger>
          <PopoverContent width={'100vw'} mt={0} borderRadius={0}>
            <PopoverBody p={0} borderRadius={0} backgroundColor={theme.palette.darkBrown}>
              <VStack spacing={0}>
                <NavbarDropdown options={shopOptions} placeholder="Shop" />
                <NavbarDropdown options={exploreOptions} placeholder="Explore" />
                <Link href={'/contact'}>
                    <Button
                    bgColor={'transparent'}
                    color={'white'}
                    fontSize={23}
                    _hover={{ bgColor: 'transparent' }}
            >
              <Text color="cream">{'CONTACT'}</Text>
                    </Button>
                </Link>
              </VStack>
            </PopoverBody>
          </PopoverContent>
          </Popover>
        </VStack>

    )
}

export default NavDropdown;