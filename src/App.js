import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { DashboardProvider } from './contexts/DashboardContext';
import Dashboard from './pages/Dashboard';
import Campaigns from './pages/Campaigns';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

// Componente de Loading global
const GlobalLoading = () => (
  <Box
    position="fixed"
    top={0}
    left={0}
    right={0}
    bottom={0}
    bg="rgba(255, 255, 255, 0.9)"
    display="flex"
    alignItems="center"
    justifyContent="center"
    zIndex={9999}
  >
    <Box
      w={12}
      h={12}
      border="4px solid"
      borderColor="blue.200"
      borderTopColor="blue.500"
      borderRadius="full"
      animation="spin 1s linear infinite"
    />
  </Box>
);

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          minH="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="gray.50"
          p={8}
        >
          <Box
            maxW="md"
            bg="white"
            p={8}
            borderRadius="xl"
            shadow="lg"
            textAlign="center"
          >
            <Box
              w={16}
              h={16}
              bg="red.100"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mx="auto"
              mb={4}
            >
              <Box fontSize="2xl">⚠️</Box>
            </Box>
            <Box fontSize="xl" fontWeight="bold" color="gray.800" mb={2}>
              Oops! Algo deu errado
            </Box>
            <Box color="gray.600" mb={6}>
              Ocorreu um erro inesperado. Por favor, recarregue a página.
            </Box>
            <Box
              as="button"
              bg="blue.500"
              color="white"
              px={6}
              py={3}
              borderRadius="lg"
              fontWeight="medium"
              _hover={{ bg: "blue.600" }}
              transition="background-color 0.2s"
              onClick={() => window.location.reload()}
            >
              Recarregar Página
            </Box>
          </Box>
        </Box>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <DashboardProvider>
        <Box minH="100vh" bg="bg.canvas">
          <Routes>
            {/* Rota principal - Dashboard */}
            <Route 
              path="/" 
              element={
                <React.Suspense fallback={<GlobalLoading />}>
                  <Dashboard />
                </React.Suspense>
              } 
            />
            
            {/* Rota de Campanhas */}
            <Route 
              path="/campaigns" 
              element={
                <React.Suspense fallback={<GlobalLoading />}>
                  <Campaigns />
                </React.Suspense>
              } 
            />
            
            {/* Rota de Configurações */}
            <Route 
              path="/settings" 
              element={
                <React.Suspense fallback={<GlobalLoading />}>
                  <Settings />
                </React.Suspense>
              } 
            />
            
            {/* Rota para páginas não encontradas */}
            <Route 
              path="*" 
              element={
                <React.Suspense fallback={<GlobalLoading />}>
                  <NotFound />
                </React.Suspense>
              } 
            />
          </Routes>
        </Box>
      </DashboardProvider>
    </ErrorBoundary>
  );
}

export default App;