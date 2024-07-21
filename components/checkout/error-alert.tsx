import React from 'react';
import { Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from '@chakra-ui/react';

interface ErrorAlertProps {
  title?: string;
  description?: string;
  onClose?: () => void;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ title, description, onClose }) => {
  return (
    <Alert status="error" variant="subtle" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" mb={4}>
      {title && <AlertTitle mt={4} mb={1} fontSize="lg">{title}</AlertTitle>}
      {description && <AlertDescription maxWidth="sm">{description}</AlertDescription>}
      <CloseButton position="absolute" right="8px" top="8px" onClick={onClose} />
    </Alert>
  );
};

export default ErrorAlert;
