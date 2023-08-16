'use client'

import { Alert, AlertIcon, CloseButton, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

interface AlertProps {
  display: Boolean;
  status: 'success' | 'error' | 'warning' | 'info';
  message: String;
  toggleFunction: () => void;
}

const AlertComponent: React.FC<AlertProps> = ({ status, toggleFunction, message, display }) => {

  if (!display) {
    return null;
  }

  return (
    <Alert status={status} mb={4} rounded="md">
      <Flex align="center">
        <AlertIcon />
        {message}
      </Flex>
      <CloseButton
        ml="auto"
        onClick={toggleFunction}
      />
    </Alert>
  );
};

export default AlertComponent;
