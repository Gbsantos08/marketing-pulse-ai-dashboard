import React from 'react';
import { Box, Text, HStack, Button, VStack } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const slideInUp = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

const ChartCard = ({ 
  title, 
  children, 
  icon: IconComponent, 
  color = "blue", 
  onViewDetails, 
  isLoading = false 
}) => {
  return (
    <Box
      bg="bg.surface"
      shadow="xl"
      borderRadius="2xl"
      borderWidth="1px"
      borderColor="border.default"
      _hover={{ 
        shadow: "2xl", 
        transform: "translateY(-4px)",
        borderColor: `${color}.300`
      }}
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      overflow="hidden"
      position="relative"
      animation={`${slideInUp} 0.6s ease-out`}
      role="group"
    >
      {/* Header aprimorado */}
      <Box 
        p={6} 
        borderBottom="1px" 
        borderColor="border.default"
        bgGradient={`linear(to-r, ${color}.50, ${color}.100)`}
        position="relative"
        overflow="hidden"
      >
        {/* Efeito de brilho no header */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient={`linear(to-r, transparent, ${color}.200, transparent)`}
          backgroundSize="200% 100%"
          animation={`${shimmer} 3s infinite`}
          opacity={0}
          _groupHover={{ opacity: 0.5 }}
          transition="opacity 0.3s ease"
        />
        
        <HStack justify="space-between" align="center" position="relative">
          <HStack spacing={4}>
            {IconComponent && (
              <Box 
                p={3} 
                bg={`${color}.500`} 
                borderRadius="xl"
                color="white"
                shadow="lg"
                _groupHover={{ 
                  transform: "rotate(5deg) scale(1.1)",
                  shadow: "xl"
                }}
                transition="all 0.3s ease"
              >
                <IconComponent size={20} />
              </Box>
            )}
            <VStack align="start" spacing={1}>
              <Text 
                fontSize="lg" 
                fontWeight="bold" 
                color="fg.default"
                _groupHover={{ color: `${color}.700` }}
                transition="color 0.3s ease"
              >
                {title}
              </Text>
              <Text fontSize="xs" color="fg.muted" fontWeight="medium">
                Atualizado em tempo real
              </Text>
            </VStack>
          </HStack>
          {onViewDetails && (
            <Button
              size="sm"
              variant="outline"
              colorScheme={color}
              onClick={onViewDetails}
              _hover={{ 
                transform: "translateY(-2px)",
                shadow: "md"
              }}
              transition="all 0.3s ease"
              borderRadius="lg"
            >
              Ver Detalhes
            </Button>
          )}
        </HStack>
      </Box>
      
      {/* Body aprimorado */}
      <Box p={6} position="relative">
        {isLoading ? (
          <Box 
            height="400px" 
            bg="gray.100" 
            borderRadius="xl"
            position="relative"
            overflow="hidden"
            _after={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgGradient: "linear(to-r, transparent, white, transparent)",
              animation: `${shimmer} 1.5s infinite`,
              opacity: 0.6
            }}
          />
        ) : (
          <Box
            _groupHover={{ transform: "scale(1.01)" }}
            transition="transform 0.3s ease"
          >
            {children}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ChartCard;