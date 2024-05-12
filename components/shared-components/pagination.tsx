import { Box, Button, ButtonGroup, Text } from '@chakra-ui/react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageButtons = () => {
    const buttons = [];

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <Button
          key={i}
          variant={currentPage === i ? 'solid' : 'outline'}
          colorScheme={currentPage === i ? 'blue' : 'gray'}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Button>
      );
    }

    return buttons;
  };

  return (
    <Box>
      <ButtonGroup spacing="2">
        {renderPageButtons()}
      </ButtonGroup>
      <Text mt="2">
        Page {currentPage} of {totalPages}
      </Text>
    </Box>
  );
};

export default Pagination;
