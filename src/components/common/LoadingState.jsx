import React from 'react';
import { VStack, Spinner, Text, Box } from '@chakra-ui/react';

const LoadingState = ({ message = "Carregando...", size = "lg" }) => {
  return (
    <Box textAlign="center" py={8}>
      <VStack spacing={4}>
        <Spinner
          size={size}
          color="blue.500"
          thickness="4px"
          speed="0.65s"
        />
        <Text color="gray.500" fontSize="sm">
          {message}
        </Text>
      </VStack>
    </Box>
  );
};

export default LoadingState;