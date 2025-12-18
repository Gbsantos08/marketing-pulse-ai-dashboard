import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';

const StatusIndicator = ({ status, label }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'green.500';
      case 'offline': return 'red.500';
      case 'warning': return 'orange.500';
      default: return 'gray.500';
    }
  };

  return (
    <HStack spacing={2}>
      <Box
        w={3}
        h={3}
        borderRadius="full"
        bg={getStatusColor(status)}
        animation={status === 'online' ? 'pulse 2s infinite' : 'none'}
      />
      <Text fontSize="sm" fontWeight="medium">
        {label}
      </Text>
    </HStack>
  );
};

export default StatusIndicator;