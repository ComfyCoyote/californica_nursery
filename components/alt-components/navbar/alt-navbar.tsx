import { HStack, Button } from "@chakra-ui/react"
import Link from "next/link"





const AltNavbar = () => {

    return(
        <HStack>
            <Link 
              
              href='/marketplace'>
              <Button 
              border="2px solid black" 
              borderRadius={0}
              bg="green.300" 
              color="black" 
              _hover={{ bg: 'green.700' }} 
              _active={{ bg: 'green.700' }}
              >
                PLANTS
              </Button>
            </Link>
            <Link 
              href='/marketplace'
              >
              <Button
              border="2px solid black" 
              borderRadius={0}
              bg="blue.300" 
              color="black" 
              _hover={{ bg: 'blue.700' }} 
              _active={{ bg: 'blue.700' }}
              >
                SEEDS
              </Button>
            </Link>
            <Link 
              href='/landscaping'
              >
              <Button 
              border="2px solid black" 
              borderRadius={0}
              bg="orange.300" 
              color="black" 
              _hover={{ bg: 'orange.700' }} 
              _active={{ bg: 'orange.700' }}
              >
                LANDSCAPING
              </Button>
            </Link>
            <Link 
              href='/marketplace'
              >
              <Button 
              border="2px solid black" 
              borderRadius={0}
              bg="purple.400" 
              color="black" 
              _hover={{ bg: 'purple.700' }} 
              _active={{ bg: 'purple.700' }}
              >
                MERCH
              </Button>
            </Link>
            <Link 
              href='/about'
              >
              <Button 
              border="2px solid black" 
              borderRadius={0}
              bg="yellow.200" 
              color="black" 
              _hover={{ bg: 'yellow.600' }} 
              _active={{ bg: 'yellow.700' }} 
              >
                ABOUT
              </Button>
            </Link>
        </HStack>
    )
}

/*
import MultiSelectDropdown from "@/components/shared-components/search-dropdown"
import { DrawerBody } from "@chakra-ui/react"


const testOptions = []



const PlantSearchBody = () => {

    return(
        <DrawerBody>
              <MultiSelectDropdown options={testOptions} setState={setOption}/>
              <MultiSelectDropdown options={testOptions} setState={setOption}/>
              <MultiSelectDropdown options={testOptions} setState={setOption}/>
              <MultiSelectDropdown options={testOptions} setState={setOption}/>
        </DrawerBody>
    )
}

export default PlantSearchBody;
*/

export default AltNavbar;