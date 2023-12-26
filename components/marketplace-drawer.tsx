import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

interface MarketplaceDrawerPropTypes{
  handleDrawerOpen: () => void,
  isDrawerOpen: boolean,
  handleDrawerClose: () => void,
}


const MarketplaceDrawer: React.FC<MarketplaceDrawerPropTypes>=({handleDrawerOpen, isDrawerOpen, handleDrawerClose}) => {


  return (
    <>
      <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose} size="sm">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerHeader>Search Marketplace</DrawerHeader>

            <DrawerBody>
              <VStack spacing={4} align="stretch">
                <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Plants
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <VStack>
                      <AccordionButton >
                        Succulent
                      </AccordionButton>
                      <AccordionButton >
                        Flowers
                      </AccordionButton>
                      <AccordionButton>
                        Cactus
                      </AccordionButton>
                      </VStack>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Merch
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <VStack>
                      <AccordionButton >
                        Clothing
                      </AccordionButton>
                      <AccordionButton >
                        Tools
                      </AccordionButton>
                      <AccordionButton>
                        Supplies
                      </AccordionButton>
                      </VStack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}


export default MarketplaceDrawer