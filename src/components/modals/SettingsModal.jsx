import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  VStack,
  HStack,
  Text,
  Switch,
  Slider,
  Select,
  Separator,
  SimpleGrid,
  Badge,
  IconButton
} from '@chakra-ui/react';
import { 
  FaTimes, 
  FaCog, 
  FaBell, 
  FaChartLine, 
  FaRobot,
  FaShieldAlt,
  FaSave,
  FaMoon,
  FaSun,
  FaUndo,
  FaPalette
} from 'react-icons/fa';
import { useSettings } from '../../contexts/SettingsContext';

const SettingsModal = ({ isOpen, onClose }) => {
  const { settings, isDarkMode, updateSettings, toggleTheme, resetSettings } = useSettings();
  const [localSettings, setLocalSettings] = useState(settings);
  const [isSaving, setIsSaving] = useState(false);

  // Sincronizar localSettings quando settings mudar
  useEffect(() => {
    setLocalSettings(settings);
  }, [settings]);

  if (!isOpen) return null;

  const handleSettingChange = (category, setting, value) => {
    setLocalSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value
      }
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    
    // Simular salvamento
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    updateSettings(localSettings);
    
    setIsSaving(false);
    onClose();
  };

  const handleReset = () => {
    resetSettings();
  };

  const handleThemeChange = (theme) => {
    const newSettings = {
      ...localSettings,
      dashboard: {
        ...localSettings.dashboard,
        theme: theme
      }
    };
    setLocalSettings(newSettings);
    updateSettings(newSettings);
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg="blackAlpha.600"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex={1000}
      onClick={onClose}
    >
      <Box
        bg={isDarkMode ? "gray.800" : "white"}
        color={isDarkMode ? "white" : "gray.800"}
        borderRadius="xl"
        shadow="2xl"
        maxW="4xl"
        w="full"
        mx={4}
        maxH="90vh"
        overflow="auto"
        onClick={(e) => e.stopPropagation()}
        className={isDarkMode ? "dark-theme" : ""}
      >
        {/* Header */}
        <Box
          bgGradient={isDarkMode ? "linear(to-r, gray.900, gray.700)" : "linear(to-r, gray.700, gray.800)"}
          color="white"
          p={6}
        >
          <HStack justify="space-between" align="center">
            <HStack spacing={3}>
              <Box p={2} bg="whiteAlpha.200" borderRadius="lg">
                <FaCog size={24} />
              </Box>
              <VStack align="start" spacing={0}>
                <Text fontSize="xl" fontWeight="bold">
                  Configurações do Sistema
                </Text>
                <Text fontSize="sm" opacity={0.9}>
                  Personalize sua experiência no dashboard
                </Text>
              </VStack>
            </HStack>
            <HStack spacing={2}>
              <IconButton
                size="sm"
                variant="ghost"
                color="white"
                _hover={{ bg: "whiteAlpha.200" }}
                onClick={toggleTheme}
                title={isDarkMode ? "Modo Claro" : "Modo Escuro"}
              >
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </IconButton>
              <IconButton
                size="sm"
                variant="ghost"
                color="white"
                _hover={{ bg: "whiteAlpha.200" }}
                onClick={onClose}
                title="Fechar"
              >
                <FaTimes />
              </IconButton>
            </HStack>
          </HStack>
        </Box>
        
        {/* Body */}
        <Box p={6}>
          <VStack spacing={8} align="stretch">
            
            {/* Tema Rápido */}
            <Box>
              <HStack spacing={3} mb={4}>
                <FaPalette color="var(--chakra-colors-pink-500)" />
                <Text fontSize="lg" fontWeight="bold" className="theme-text-primary">
                  Tema
                </Text>
              </HStack>
              
              <HStack spacing={4}>
                <Button
                  variant={isDarkMode ? "solid" : "outline"}
                  colorPalette="blue"
                  leftIcon={<FaMoon />}
                  onClick={() => handleThemeChange('dark')}
                  size="lg"
                >
                  Escuro
                </Button>
                <Button
                  variant={!isDarkMode ? "solid" : "outline"}
                  colorPalette="orange"
                  leftIcon={<FaSun />}
                  onClick={() => handleThemeChange('light')}
                  size="lg"
                >
                  Claro
                </Button>
              </HStack>
            </Box>

            <Separator />
            
            {/* Notificações */}
            <Box>
              <HStack spacing={3} mb={4}>
                <FaBell color="var(--chakra-colors-blue-500)" />
                <Text fontSize="lg" fontWeight="bold" className="theme-text-primary">
                  Notificações
                </Text>
              </HStack>
              
              <SimpleGrid columns={2} gap={4}>
                <HStack justify="space-between">
                  <Text fontSize="sm" className="theme-text-secondary">Email</Text>
                  <Switch
                    isChecked={localSettings.notifications.email}
                    onChange={(e) => handleSettingChange('notifications', 'email', e.target.checked)}
                  />
                </HStack>
                
                <HStack justify="space-between">
                  <Text fontSize="sm" className="theme-text-secondary">Push</Text>
                  <Switch
                    isChecked={localSettings.notifications.push}
                    onChange={(e) => handleSettingChange('notifications', 'push', e.target.checked)}
                  />
                </HStack>
                
                <HStack justify="space-between">
                  <Text fontSize="sm" className="theme-text-secondary">Insights de IA</Text>
                  <Switch
                    isChecked={localSettings.notifications.aiInsights}
                    onChange={(e) => handleSettingChange('notifications', 'aiInsights', e.target.checked)}
                  />
                </HStack>
                
                <HStack justify="space-between">
                  <Text fontSize="sm" className="theme-text-secondary">Alertas de Campanha</Text>
                  <Switch
                    isChecked={localSettings.notifications.campaignAlerts}
                    onChange={(e) => handleSettingChange('notifications', 'campaignAlerts', e.target.checked)}
                  />
                </HStack>
              </SimpleGrid>
            </Box>

            <Separator />

            {/* Dashboard */}
            <Box>
              <HStack spacing={3} mb={4}>
                <FaChartLine color="var(--chakra-colors-green-500)" />
                <Text fontSize="lg" fontWeight="bold" className="theme-text-primary">
                  Dashboard
                </Text>
              </HStack>
              
              <VStack spacing={4} align="stretch">
                <HStack justify="space-between">
                  <Text fontSize="sm" className="theme-text-secondary">Atualização Automática</Text>
                  <Switch
                    isChecked={localSettings.dashboard.autoRefresh}
                    onChange={(e) => handleSettingChange('dashboard', 'autoRefresh', e.target.checked)}
                  />
                </HStack>
                
                <Box>
                  <HStack justify="space-between" mb={2}>
                    <Text fontSize="sm" className="theme-text-secondary">Intervalo de Atualização</Text>
                    <Badge variant="subtle">{localSettings.dashboard.refreshInterval}s</Badge>
                  </HStack>
                  <Box px={2}>
                    <Slider.Root
                      value={[localSettings.dashboard.refreshInterval]}
                      onValueChange={(details) => handleSettingChange('dashboard', 'refreshInterval', details.value[0])}
                      min={10}
                      max={300}
                      step={10}
                    >
                      <Slider.Control>
                        <Slider.Track>
                          <Slider.Range />
                        </Slider.Track>
                        <Slider.Thumb index={0} />
                      </Slider.Control>
                    </Slider.Root>
                  </Box>
                </Box>
                
                <HStack justify="space-between">
                  <Text fontSize="sm" className="theme-text-secondary">Modo Compacto</Text>
                  <Switch
                    isChecked={localSettings.dashboard.compactMode}
                    onChange={(e) => handleSettingChange('dashboard', 'compactMode', e.target.checked)}
                  />
                </HStack>

                <HStack justify="space-between">
                  <Text fontSize="sm" className="theme-text-secondary">Cores Vibrantes</Text>
                  <Switch
                    isChecked={localSettings.dashboard.vibrantColors}
                    onChange={(e) => handleSettingChange('dashboard', 'vibrantColors', e.target.checked)}
                  />
                </HStack>

                <HStack justify="space-between">
                  <Text fontSize="sm" className="theme-text-secondary">Animações</Text>
                  <Switch
                    isChecked={localSettings.dashboard.animations}
                    onChange={(e) => handleSettingChange('dashboard', 'animations', e.target.checked)}
                  />
                </HStack>
              </VStack>
            </Box>

            <Separator />

            {/* IA */}
            <Box>
              <HStack spacing={3} mb={4}>
                <FaRobot color="var(--chakra-colors-purple-500)" />
                <Text fontSize="lg" fontWeight="bold" className="theme-text-primary">
                  Inteligência Artificial
                </Text>
              </HStack>
              
              <VStack spacing={4} align="stretch">
                <HStack justify="space-between">
                  <VStack align="start" spacing={0}>
                    <Text fontSize="sm" className="theme-text-secondary">Otimização Automática</Text>
                    <Text fontSize="xs" className="theme-text-muted">
                      IA ajusta campanhas automaticamente
                    </Text>
                  </VStack>
                  <Switch
                    isChecked={localSettings.ai.autoOptimization}
                    onChange={(e) => handleSettingChange('ai', 'autoOptimization', e.target.checked)}
                  />
                </HStack>
                
                <Box>
                  <HStack justify="space-between" mb={2}>
                    <Text fontSize="sm" className="theme-text-secondary">Limite de Confiança</Text>
                    <Badge variant="subtle">{localSettings.ai.confidenceThreshold}%</Badge>
                  </HStack>
                  <Box px={2}>
                    <Slider.Root
                      value={[localSettings.ai.confidenceThreshold]}
                      onValueChange={(details) => handleSettingChange('ai', 'confidenceThreshold', details.value[0])}
                      min={50}
                      max={95}
                      step={5}
                    >
                      <Slider.Control>
                        <Slider.Track>
                          <Slider.Range />
                        </Slider.Track>
                        <Slider.Thumb index={0} />
                      </Slider.Control>
                    </Slider.Root>
                  </Box>
                </Box>
                
                <HStack justify="space-between">
                  <Text fontSize="sm" className="theme-text-secondary">Frequência de Análise</Text>
                  <Box minW="120px">
                    <Select.Root
                      value={[localSettings.ai.analysisFrequency]}
                      onValueChange={(details) => handleSettingChange('ai', 'analysisFrequency', details.value[0])}
                      size="sm"
                    >
                      <Select.Trigger>
                        <Select.ValueText placeholder="Selecione" />
                      </Select.Trigger>
                      <Select.Content>
                        <Select.Item item="realtime">Tempo Real</Select.Item>
                        <Select.Item item="hourly">Por Hora</Select.Item>
                        <Select.Item item="daily">Diário</Select.Item>
                        <Select.Item item="weekly">Semanal</Select.Item>
                      </Select.Content>
                    </Select.Root>
                  </Box>
                </HStack>
              </VStack>
            </Box>

            <Separator />

            {/* Privacidade */}
            <Box>
              <HStack spacing={3} mb={4}>
                <FaShieldAlt color="var(--chakra-colors-red-500)" />
                <Text fontSize="lg" fontWeight="bold" className="theme-text-primary">
                  Privacidade e Segurança
                </Text>
              </HStack>
              
              <VStack spacing={4} align="stretch">
                <HStack justify="space-between">
                  <VStack align="start" spacing={0}>
                    <Text fontSize="sm" className="theme-text-secondary">Compartilhamento de Dados</Text>
                    <Text fontSize="xs" className="theme-text-muted">
                      Permitir uso de dados para melhorias
                    </Text>
                  </VStack>
                  <Switch
                    isChecked={localSettings.privacy.dataSharing}
                    onChange={(e) => handleSettingChange('privacy', 'dataSharing', e.target.checked)}
                  />
                </HStack>
                
                <HStack justify="space-between">
                  <Text fontSize="sm" className="theme-text-secondary">Analytics</Text>
                  <Switch
                    isChecked={localSettings.privacy.analytics}
                    onChange={(e) => handleSettingChange('privacy', 'analytics', e.target.checked)}
                  />
                </HStack>
                
                <HStack justify="space-between">
                  <Text fontSize="sm" className="theme-text-secondary">Cookies</Text>
                  <Switch
                    isChecked={localSettings.privacy.cookies}
                    onChange={(e) => handleSettingChange('privacy', 'cookies', e.target.checked)}
                  />
                </HStack>
              </VStack>
            </Box>

            {/* Botões */}
            <HStack spacing={4} pt={4}>
              <Button 
                variant="outline" 
                onClick={handleReset}
                leftIcon={<FaUndo />}
                size="lg"
              >
                Resetar
              </Button>
              <Button 
                variant="outline" 
                onClick={onClose} 
                flex={1}
                size="lg"
              >
                Cancelar
              </Button>
              <Button
                bg={isDarkMode ? "blue.600" : "gray.700"}
                color="white"
                _hover={{ bg: isDarkMode ? "blue.700" : "gray.800" }}
                onClick={handleSave}
                loading={isSaving}
                flex={1}
                size="lg"
                leftIcon={<FaSave />}
              >
                {isSaving ? 'Salvando...' : 'Salvar Configurações'}
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default SettingsModal;