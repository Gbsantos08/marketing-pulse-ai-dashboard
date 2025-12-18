import { createSystem, defaultConfig } from '@chakra-ui/react';

const customConfig = {
  ...defaultConfig,
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#eff6ff' },
          100: { value: '#dbeafe' },
          200: { value: '#bfdbfe' },
          300: { value: '#93c5fd' },
          400: { value: '#60a5fa' },
          500: { value: '#3b82f6' },
          600: { value: '#2563eb' },
          700: { value: '#1d4ed8' },
          800: { value: '#1e40af' },
          900: { value: '#1e3a8a' },
        },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          default: { value: '{colors.white}' },
          _dark: { value: '{colors.gray.900}' },
        },
        text: {
          default: { value: '{colors.gray.900}' },
          _dark: { value: '{colors.gray.100}' },
        },
      },
    },
  },
};

const system = createSystem(customConfig);

export default system;