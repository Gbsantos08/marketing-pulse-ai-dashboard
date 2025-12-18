import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { DashboardProvider } from './contexts/DashboardContext';
import { SettingsProvider } from './contexts/SettingsContext';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <SettingsProvider>
        <DashboardProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Router>
        </DashboardProvider>
      </SettingsProvider>
    </ChakraProvider>
  );
}

export default App;