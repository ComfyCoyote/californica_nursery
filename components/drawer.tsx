import { useState } from 'react';
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

export default function MarketplaceDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Button onClick={handleDrawerOpen}>Open Drawer</Button>

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
