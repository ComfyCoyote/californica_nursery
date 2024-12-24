import React from 'react';
import { HStack, Text, Button} from '@chakra-ui/react';
import { theme } from "@/theme/theme"
import { Spinner } from '@chakra-ui/react'

interface PaginationProps {
  totalPages: number;
  loading: boolean;
  loadMore: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, loadMore, loading }) => {

  return (
    <HStack bg={theme.palette.cream} spacing={2} py={8} justifyContent="center">
      {
        loading ? (
          <Spinner />
        ) : (
          <Button variant={'unstyled'} onClick={loadMore}>
      <Text fontSize={25} fontWeight={700}>
        Load More
            </Text>
          </Button>
        )
      }
      
    </HStack>
  );
};

export default Pagination;
