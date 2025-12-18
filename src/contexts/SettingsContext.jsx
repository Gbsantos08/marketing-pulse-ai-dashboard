import React, { createContext, useContext, useState, useEffect } from 'react';

const SettingsContext = createContext();

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings deve ser usado dentro de SettingsProvider');
  }
  return context;
};

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem('dashboardSettings');
    return savedSettings ? JSON.parse(savedSettings) : {
      notifications: {
        email: true,
        push: true,
        aiInsights: true,
        campaignAlerts: true
      },
      dashboard: {
        autoRefresh: true,
        refreshInterval: 30,
        theme: 'light',
        compactMode: false,
        vibrantColors: false,
        animations: true
      },
      ai: {
        autoOptimization: false,
        confidenceThreshold: 85,
        analysisFrequency: 'daily'
      },
      privacy: {
        dataSharing: false,
        analytics: true,
        cookies: true
      }
    };
  });

  const [isDarkMode, setIsDarkMode] = useState(settings.dashboard.theme === 'dark');

  // Carregar configurações do localStorage e aplicar tema inicial
  useEffect(() => {
    setIsDarkMode(settings.dashboard.theme === 'dark');
  }, [settings.dashboard.theme]);

  // Aplicar tema ao documento
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    if (isDarkMode) {
      root.setAttribute('data-theme', 'dark');
      body.style.backgroundColor = '#0f172a'; // Cor de fundo principal do tema escuro
      body.style.color = '#f1f5f9'; // Cor do texto principal do tema escuro
    } else {
      root.setAttribute('data-theme', 'light');
      body.style.backgroundColor = '#ffffff'; // Cor de fundo principal do tema claro
      body.style.color = '#0f172a'; // Cor do texto principal do tema claro
    }
  }, [isDarkMode]);

  const updateSettings = (newSettings) => {
    setSettings(newSettings);
    localStorage.setItem('dashboardSettings', JSON.stringify(newSettings));
    setIsDarkMode(newSettings.dashboard.theme === 'dark');
  };

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    const newSettings = {
      ...settings,
      dashboard: {
        ...settings.dashboard,
        theme: newTheme
      }
    };
    updateSettings(newSettings);
  };

  const resetSettings = () => {
    const defaultSettings = {
      notifications: {
        email: true,
        push: true,
        aiInsights: true,
        campaignAlerts: true
      },
      dashboard: {
        autoRefresh: true,
        refreshInterval: 30,
        theme: 'light',
        compactMode: false,
        vibrantColors: false,
        animations: true
      },
      ai: {
        autoOptimization: false,
        confidenceThreshold: 85,
        analysisFrequency: 'daily'
      },
      privacy: {
        dataSharing: false,
        analytics: true,
        cookies: true
      }
    };
    updateSettings(defaultSettings);
  };

  const value = {
    settings,
    isDarkMode,
    updateSettings,
    toggleTheme,
    resetSettings
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;