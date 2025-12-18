import React from 'react';
import { Badge, HStack } from '@chakra-ui/react';

const CustomBadge = ({ variant, children, icon: IconComponent, ...props }) => {
  return (
    <Badge
      variant="subtle"
      px={3}
      py={1}
      borderRadius="full"
      {...props}
    >
      <HStack spacing={1}>
        {IconComponent && <IconComponent size={12} />}
        <span>{children}</span>
      </HStack>
    </Badge>
  );
};

export default CustomBadge;