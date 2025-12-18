import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Button,
  VStack,
  IconButton
} from '@chakra-ui/react';
import { FaBars, FaHome, FaChartBar, FaCog } from 'react-icons/fa';

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <Flex h="100vh">
      {/* Sidebar */}
      <Box
        w={isOpen ? "250px" : "60px"}
        bg="blue.800"
        color="white"
        transition="width 0.3s"
        p={4}
      >
        <VStack gap={4} align="stretch">
          <IconButton
            onClick={toggleSidebar}
            variant="ghost"
            color="white"
            size="sm"
            aria-label="Toggle menu"
          >
            <FaBars />
          </IconButton>
          
          {isOpen && (
            <>
              <Heading as="h1" size="md">Marketing Pulse</Heading>
              <VStack gap={2} align="stretch">
                <Button 
                  variant="ghost" 
                  justifyContent="flex-start"
                  color="white"
                  _hover={{ bg: "blue.700" }}
                >
                  <FaHome style={{ marginRight: '8px' }} />
                  Dashboard
                </Button>
                <Button 
                  variant="ghost" 
                  justifyContent="flex-start"
                  color="white"
                  _hover={{ bg: "blue.700" }}
                >
                  <FaChartBar style={{ marginRight: '8px' }} />
                  Campanhas
                </Button>
                <Button 
                  variant="ghost" 
                  justifyContent="flex-start"
                  color="white"
                  _hover={{ bg: "blue.700" }}
                >
                  <FaCog style={{ marginRight: '8px' }} />
                  Configurações
                </Button>
              </VStack>
            </>
          )}
        </VStack>
      </Box>

      {/* Main Content */}
      <Box flex="1" bg="gray.50" p={6} overflowY="auto">
        {children}
      </Box>
    </Flex>
  );
};

export default DashboardLayout;