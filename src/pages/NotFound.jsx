import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { FaHome, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
      p={8}
    >
      <VStack spacing={8} textAlign="center" maxW="md">
        <Box fontSize="8xl" color="blue.500" fontWeight="bold">
          404
        </Box>
        
        <VStack spacing={4}>
          <Heading size="xl" color="gray.800">
            Página não encontrada
          </Heading>
          <Text color="gray.600" fontSize="lg" maxW="sm">
            A página que você está procurando não existe ou foi movida para outro local.
          </Text>
        </VStack>

        <VStack spacing={4} w="full">
          <Button
            colorScheme="blue"
            leftIcon={<FaHome />}
            onClick={() => navigate('/')}
            size="lg"
            w="full"
            borderRadius="xl"
            _hover={{ transform: "translateY(-2px)", shadow: "lg" }}
            transition="all 0.3s ease"
          >
            Voltar ao Dashboard
          </Button>
          
          <Button
            variant="outline"
            leftIcon={<FaArrowLeft />}
            onClick={() => navigate(-1)}
            size="lg"
            w="full"
            borderRadius="xl"
          >
            Página Anterior
          </Button>
        </VStack>

        <Box mt={8}>
          <Text fontSize="sm" color="gray.500">
            Se você acredita que isso é um erro, entre em contato conosco.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default NotFound;