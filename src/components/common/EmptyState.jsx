import React from 'react';
import { VStack, Text, Button, Box } from '@chakra-ui/react';

const EmptyState = ({ 
  title, 
  description, 
  actionLabel, 
  onAction, 
  icon: IconComponent 
}) => {
  return (
    <Box textAlign="center" py={12}>
      <VStack spacing={4}>
        {IconComponent && (
          <Box color="gray.400">
            <IconComponent size={48} />
          </Box>
        )}
        <VStack spacing={2}>
          <Text fontSize="lg" fontWeight="medium" color="gray.600">
            {title}
          </Text>
          {description && (
            <Text fontSize="sm" color="gray.500">
              {description}
            </Text>
          )}
        </VStack>
        {actionLabel && onAction && (
          <Button colorPalette="blue" onClick={onAction}>
            {actionLabel}
          </Button>
        )}
      </VStack>
    </Box>
  );
};

export default EmptyState;