import React from 'react';
import { IconButton, Box } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useSettings } from '../../contexts/SettingsContext';

const ThemeToggle = ({ size = "md", variant = "outline" }) => {
  const { isDarkMode, toggleTheme } = useSettings();

  return (
    <Box position="relative">
      <IconButton
        size={size}
        variant={variant}
        onClick={toggleTheme}
        className="theme-interactive theme-focus"
        title={isDarkMode ? "Alternar para modo claro" : "Alternar para modo escuro"}
        aria-label={isDarkMode ? "Alternar para modo claro" : "Alternar para modo escuro"}
        style={{
          background: isDarkMode 
            ? 'linear-gradient(135deg, #374151 0%, #1f2937 100%)'
            : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          border: `1px solid ${isDarkMode ? 'rgba(75, 85, 99, 0.6)' : 'var(--border-primary)'}`,
          color: isDarkMode ? 'var(--text-primary)' : 'var(--text-secondary)',
          boxShadow: isDarkMode ? 'var(--shadow-elevated)' : 'var(--shadow-primary)'
        }}
      >
        <Box
          as="span"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
          transform={isDarkMode ? "rotate(180deg)" : "rotate(0deg)"}
        >
          {isDarkMode ? (
            <FaMoon size={size === "sm" ? 14 : size === "lg" ? 20 : 16} />
          ) : (
            <FaSun size={size === "sm" ? 14 : size === "lg" ? 20 : 16} />
          )}
        </Box>
      </IconButton>
      
      {/* Indicador de estado */}
      <Box
        position="absolute"
        top="-2px"
        right="-2px"
        w="8px"
        h="8px"
        borderRadius="full"
        bg={isDarkMode ? "purple.400" : "orange.400"}
        className="animate-pulse"
        style={{
          boxShadow: `0 0 10px ${isDarkMode ? 'var(--purple-dark)' : 'var(--orange-500)'}`
        }}
      />
    </Box>
  );
};

export default ThemeToggle;