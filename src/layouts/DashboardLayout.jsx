import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Button,
  VStack,
<<<<<<< HEAD
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
=======
  HStack,
  IconButton,
  Text
} from '@chakra-ui/react';
import { FaBars, FaHome, FaChartBar, FaCog, FaSun, FaMoon, FaGithub } from 'react-icons/fa';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [colorMode, setColorMode] = useState('light');
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleColorMode = () => setColorMode(prev => prev === 'light' ? 'dark' : 'light');

  const menuItems = [
    { path: '/', icon: FaHome, label: 'Dashboard' },
    { path: '/campaigns', icon: FaChartBar, label: 'Campanhas' },
    { path: '/settings', icon: FaCog, label: 'Configurações' }
  ];

  return (
    <Flex minH="100vh" bg="gray.50">
      {/* Sidebar */}
      <Box
        as="aside"
        w={isSidebarOpen ? "280px" : "80px"}
        bg="white"
        borderRight="1px"
        borderColor="gray.200"
        transition="width 0.8s ease"
        shadow="lg"
        zIndex={10}
        display={{ base: isSidebarOpen ? 'block' : 'none', md: 'block' }}
        position={{ base: 'fixed', md: 'relative' }}
        h={{ base: '100vh', md: 'auto' }}
      >
        <VStack spacing={0} align="stretch" h="full">
          {/* Header da sidebar */}
          <Box p={6} borderBottom="1px" borderColor="gray.200">
            <HStack justify="space-between" align="center">
              {isSidebarOpen && (
                <VStack align="start" spacing={1}>
                  <Heading size="md" color="blue.600" fontWeight="bold">
                    Marketing Pulse
                  </Heading>
                  <Text fontSize="xs" color="gray.500" fontWeight="medium">
                    AI Dashboard
                  </Text>
                </VStack>
              )}
              <IconButton
                icon={<FaBars />}
                onClick={toggleSidebar}
                variant="ghost"
                size="sm"
                aria-label="Toggle sidebar"
                _hover={{ bg: "gray.100" }}
              />
            </HStack>
          </Box>
          
          {/* Menu items */}
          <VStack spacing={2} align="stretch" p={4} flex={1}>
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.path}
                  as={RouterLink}
                  to={item.path}
                  leftIcon={<item.icon />}
                  variant={isActive ? "solid" : "ghost"}
                  colorScheme={isActive ? "blue" : "gray"}
                  justifyContent={isSidebarOpen ? "flex-start" : "center"}
                  size="md"
                  w="full"
                  _hover={{ 
                    bg: isActive ? "blue.600" : "gray.100",
                    transform: "translateX(2px)"
                  }}
                  transition="all 0.2s ease"
                  borderRadius="lg"
                  px={isSidebarOpen ? 4 : 2}
                >
                  {isSidebarOpen && (
                    <Text ml={2} fontWeight="medium">
                      {item.label}
                    </Text>
                  )}
                </Button>
              );
            })}
          </VStack>

          {/* Status indicator */}
          {isSidebarOpen && (
            <Box p={4} borderTop="1px" borderColor="gray.200">
              <HStack spacing={3} p={3} bg="green.50" borderRadius="lg">
                <Box w={2} h={2} bg="green.500" borderRadius="full" />
                <VStack align="start" spacing={0}>
                  <Text fontSize="xs" fontWeight="bold" color="green.800">
                    Sistema Online
                  </Text>
                  <Text fontSize="xs" color="green.600">
                    Todos os serviços ativos
                  </Text>
                </VStack>
              </HStack>
            </Box>
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
          )}
        </VStack>
      </Box>

<<<<<<< HEAD
      {/* Main Content */}
      <Box flex="1" bg="gray.50" p={6} overflowY="auto">
        {children}
      </Box>
=======
      {/* Overlay para mobile */}
      {isSidebarOpen && (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.600"
          zIndex={5}
          display={{ base: 'block', md: 'none' }}
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content Area */}
      <Flex direction="column" flex="1" minW={0}>
        {/* Navbar */}
        <HStack
          as="nav"
          align="center"
          justify="space-between"
          p={4}
          bg="white"
          shadow="sm"
          borderBottom="1px"
          borderColor="gray.200"
          zIndex={4}
        >
          <HStack spacing={4}>
            <IconButton
              icon={<FaBars />}
              onClick={toggleSidebar}
              variant="ghost"
              aria-label="Toggle sideba"
              display={{ base: 'flex', md: 'none' }}
              _hover={{ bg: "gray.100" }}
            />
            <VStack align="start" spacing={0} display={{ base: 'flex', md: 'none' }}>
              <Heading size="sm" color="blue.600" fontWeight="bold">
                Marketing Pulse
              </Heading>
              <Text fontSize="xs" color="gray.500">
                AI Dashboard
              </Text>
            </VStack>
          </HStack>
          
          <Box flex="1" />
          
          <HStack spacing={2}>
            <IconButton
              aria-label="Toggle dark mode"
              icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
              variant="ghost"
              size="sm"
              _hover={{ bg: "gray.100" }}
            />
            <Button
              as="a"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<FaGithub />}
              variant="ghost"
              size="sm"
              bg= "grey.100" 
              _hover={{ bg: "blue.600" }}
            >
              GitHub
            </Button>
          </HStack>
        </HStack>

        {/* Main Content */}
        <Box as="main" flex="1" overflow="auto" bg="gray.50">
          {children}
        </Box>

        {/* Footer */}
        <Box 
          as="footer" 
          p={4} 
          textAlign="center" 
          bg="white" 
          borderTop="1px" 
          borderColor="gray.200"
        >
          <Text fontSize="sm" color="gray.600">
            © {new Date().getFullYear()} Marketing Pulse AI. Desenvolvido por Gabriel Santos Oliveira
          </Text>
        </Box>
      </Flex>
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
    </Flex>
  );
};

export default DashboardLayout;