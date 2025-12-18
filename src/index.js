import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import './index.css';
import './styles/theme-system.css'; // Adicionar o novo sistema de tema
import App from './App';
=======
import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Criar sistema customizado para v3
const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#e3f2fd' },
          100: { value: '#bbdefb' },
          200: { value: '#90caf9' },
          300: { value: '#64b5f6' },
          400: { value: '#42a5f5' },
          500: { value: '#2196f3' },
          600: { value: '#1e88e5' },
          700: { value: '#1976d2' },
          800: { value: '#1565c0' },
          900: { value: '#0d47a1' },
        },
      },
    },
    semanticTokens: {
      colors: {
        'bg.canvas': { 
          value: { base: 'gray.50', _dark: 'gray.900' }
        },
        'bg.surface': { 
          value: { base: 'white', _dark: 'gray.800' }
        },
        'fg.default': { 
          value: { base: 'gray.800', _dark: 'gray.100' }
        },
        'fg.muted': { 
          value: { base: 'gray.600', _dark: 'gray.400' }
        },
        'border.default': { 
          value: { base: 'gray.200', _dark: 'gray.700' }
        },
      },
    },
  },
});

const queryClient = new QueryClient();
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
  </React.StrictMode>
);
=======
    <ChakraProvider value={system}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
