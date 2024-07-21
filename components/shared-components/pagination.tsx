import React, { useState } from 'react';
import { HStack, Text, Button} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { theme } from "@/theme/theme"

interface PaginationProps {
  totalPages: number;
  onPageChange: (page: number) => void;
  loadMore: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, onPageChange, loadMore }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => {
        const newPage = prevPage - 1;
        onPageChange(newPage);
        return newPage;
      });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => {
        const newPage = prevPage + 1;
        onPageChange(newPage);
        return newPage;
      });
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Text
          key={i}
          fontSize={30}
          fontWeight={700}
          onClick={() => handlePageClick(i)}
          colorScheme={i === currentPage ? 'blue' : 'gray'}
          mx={1}
        >
          {i}
        </Text>
      );
    }
    return pages;
  };

  return (
    <HStack bg={theme.palette.cream} spacing={2} py={8} justifyContent="center">
      <Button variant={'unstyled'} onClick={loadMore}>
      <Text fontSize={25} fontWeight={700}>
        Load More
      </Text>
      </Button>
    </HStack>
  );
};

export default Pagination;
