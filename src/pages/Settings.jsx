import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Switch,
  Button,
  Input,
  Select,
  Separator,
  Badge,
  SimpleGrid
} from '@chakra-ui/react';
import { FaSave, FaCog, FaBell, FaUser, FaLock, FaPalette } from 'react-icons/fa';
import DashboardLayout from '../layouts/DashboardLayout';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoRefresh: true,
    language: 'pt-BR',
    timezone: 'America/Sao_Paulo',
    emailAlerts: true,
    weeklyReports: true,
    performanceAlerts: true
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const SettingSection = ({ icon: Icon, title, description, children }) => (
    <Box
      bg="white"
      p={6}
      borderRadius="xl"
      shadow="md"
      border="1px"
      borderColor="gray.200"
      _hover={{ shadow: "lg" }}
      transition="shadow 0.3s ease"
    >
      <HStack spacing={4} mb={6}>
        <Box
          p={3}
          bg="blue.100"
          borderRadius="lg"
          color="blue.600"
        >
          <Icon size={20} />
        </Box>
        <VStack align="start" spacing={1}>
          <Text fontSize="lg" fontWeight="bold" color="gray.800">
            {title}
          </Text>
          <Text fontSize="sm" color="gray.600">
            {description}
          </Text>
        </VStack>
      </HStack>
      {children}
    </Box>
  );

  const SettingItem = ({ label, description, children }) => (
    <HStack justify="space-between" align="start" py={3}>
      <VStack align="start" spacing={1} flex={1}>
        <Text fontWeight="medium" color="gray.800">
          {label}
        </Text>
        <Text fontSize="sm" color="gray.600">
          {description}
        </Text>
      </VStack>
      <Box ml={4}>
        {children}
      </Box>
    </HStack>
  );

  return (
    <DashboardLayout>
      <Container maxW="4xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <Box>
            <Heading size="2xl" color="gray.800" mb={2}>
              ⚙️ Configurações
            </Heading>
            <Text color="gray.600" fontSize="lg">
              Personalize sua experiência no Marketing Pulse AI
            </Text>
          </Box>

          {/* Configurações Gerais */}
          <SettingSection 
            icon={FaCog} 
            title="Configurações Gerais"
            description="Ajuste as configurações básicas do sistema"
          >
            <VStack spacing={4} align="stretch">
              <SettingItem
                label="Modo Escuro"
                description="Ativar tema escuro da interface"
              >
                <Switch
                  isChecked={settings.darkMode}
                  onChange={(e) => handleSettingChange('darkMode', e.target.checked)}
                  colorScheme="blue"
                />
              </SettingItem>

              <SettingItem
                label="Atualização Automática"
                description="Atualizar dados automaticamente a cada 30 segundos"
              >
                <Switch
                  isChecked={settings.autoRefresh}
                  onChange={(e) => handleSettingChange('autoRefresh', e.target.checked)}
                  colorScheme="blue"
                />
              </SettingItem>

              <SettingItem
                label="Idioma"
                description="Selecione o idioma da interface"
              >
                <Select
                  value={settings.language}
                  onChange={(e) => handleSettingChange('language', e.target.value)}
                  w="200px"
                >
                  <option value="pt-BR">Português (Brasil)</option>
                  <option value="en-US">English (US)</option>
                  <option value="es-ES">Español</option>
                </Select>
              </SettingItem>

              <SettingItem
                label="Fuso Horário"
                description="Configure o fuso horário para relatórios"
              >
                <Select
                  value={settings.timezone}
                  onChange={(e) => handleSettingChange('timezone', e.target.value)}
                  w="200px"
                >
                  <option value="America/Sao_Paulo">São Paulo (UTC-3)</option>
                  <option value="America/New_York">New York (UTC-5)</option>
                  <option value="Europe/London">London (UTC+0)</option>
                </Select>
              </SettingItem>
            </VStack>
          </SettingSection>

          {/* Notificações */}
          <SettingSection 
            icon={FaBell} 
            title="Notificações"
            description="Configure como e quando receber notificações"
          >
            <VStack spacing={4} align="stretch">
              <SettingItem
                label="Notificações Push"
                description="Receber notificações em tempo real no navegador"
              >
                <Switch
                  isChecked={settings.notifications}
                  onChange={(e) => handleSettingChange('notifications', e.target.checked)}
                  colorScheme="blue"
                />
              </SettingItem>

              <SettingItem
                label="Alertas de Performance"
                description="Alertas quando campanhas precisam de atenção"
              >
                <Switch
                  isChecked={settings.performanceAlerts}
                  onChange={(e) => handleSettingChange('performanceAlerts', e.target.checked)}
                  colorScheme="blue"
                />
              </SettingItem>

              <SettingItem
                label="Alertas por Email"
                description="Receber alertas importantes por email"
              >
                <Switch
                  isChecked={settings.emailAlerts}
                  onChange={(e) => handleSettingChange('emailAlerts', e.target.checked)}
                  colorScheme="blue"
                />
              </SettingItem>

              <SettingItem
                label="Relatórios Semanais"
                description="Receber resumo semanal por email"
              >
                <Switch
                  isChecked={settings.weeklyReports}
                  onChange={(e) => handleSettingChange('weeklyReports', e.target.checked)}
                  colorScheme="blue"
                />
              </SettingItem>
            </VStack>
          </SettingSection>

          {/* Perfil */}
          <SettingSection 
            icon={FaUser} 
            title="Informações do Perfil"
            description="Gerencie suas informações pessoais"
          >
            <VStack spacing={4} align="stretch">
              <VStack align="start" spacing={2}>
                <Text fontWeight="medium" color="gray.800">Nome Completo</Text>
                <Input 
                  placeholder="Seu nome completo" 
                  defaultValue="Gabriel Santos Oliveira"
                />
              </VStack>

              <VStack align="start" spacing={2}>
                <Text fontWeight="medium" color="gray.800">Email</Text>
                <Input 
                  placeholder="seu@email.com" 
                  type="email"
                  defaultValue="gabriel@marketingpulse.ai"
                />
              </VStack>

              <VStack align="start" spacing={2}>
                <Text fontWeight="medium" color="gray.800">Empresa</Text>
                <Input 
                  placeholder="Nome da sua empresa"
                  defaultValue="Marketing Pulse AI"
                />
              </VStack>

              <VStack align="start" spacing={2}>
                <Text fontWeight="medium" color="gray.800">Cargo</Text>
                <Input 
                  placeholder="Seu cargo na empresa"
                  defaultValue="Desenvolvedor Full Stack"
                />
              </VStack>
            </VStack>
          </SettingSection>

          {/* Segurança */}
          <SettingSection 
            icon={FaLock} 
            title="Segurança"
            description="Configurações de segurança da conta"
          >
            <VStack spacing={4} align="stretch">
              <HStack justify="space-between" align="center">
                <VStack align="start" spacing={1}>
                  <Text fontWeight="medium" color="gray.800">
                    Autenticação de Dois Fatores
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    Adicionar camada extra de segurança à sua conta
                  </Text>
                </VStack>
                <Badge colorScheme="green" variant="subtle" px={3} py={1}>
                  Ativo
                </Badge>
              </HStack>

              <HStack justify="space-between" align="center">
                <VStack align="start" spacing={1}>
                  <Text fontWeight="medium" color="gray.800">
                    Sessões Ativas
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    Gerencie dispositivos conectados à sua conta
                  </Text>
                </VStack>
                <Button variant="outline" size="sm">
                  Ver Sessões
                </Button>
              </HStack>

              <Box pt={4}>
                <Button colorScheme="red" variant="outline" w="full">
                  Alterar Senha
                </Button>
              </Box>
            </VStack>
          </SettingSection>

          {/* Preferências de Interface */}
          <SettingSection 
            icon={FaPalette} 
            title="Interface"
            description="Personalize a aparência do dashboard"
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
              <VStack align="start" spacing={2}>
                <Text fontWeight="medium" color="gray.800">Tema de Cores</Text>
                <Select defaultValue="blue">
                  <option value="blue">Azul (Padrão)</option>
                  <option value="purple">Roxo</option>
                  <option value="green">Verde</option>
                  <option value="orange">Laranja</option>
                </Select>
              </VStack>

              <VStack align="start" spacing={2}>
                <Text fontWeight="medium" color="gray.800">Densidade da Interface</Text>
                <Select defaultValue="comfortable">
                  <option value="compact">Compacta</option>
                  <option value="comfortable">Confortável</option>
                  <option value="spacious">Espaçosa</option>
                </Select>
              </VStack>
            </SimpleGrid>
          </SettingSection>

          <Separator />

          {/* Botões de Ação */}
          <HStack spacing={4}>
            <Button
              colorScheme="blue"
              leftIcon={<FaSave />}
              flex={1}
              size="lg"
              borderRadius="xl"
              _hover={{ transform: "translateY(-2px)", shadow: "lg" }}
              transition="all 0.3s ease"
            >
              Salvar Configurações
            </Button>
            <Button 
              variant="outline" 
              flex={1}
              size="lg"
              borderRadius="xl"
            >
              Cancelar
            </Button>
          </HStack>

          {/* Informações da Conta */}
          <Box 
            bg="gray.50" 
            p={6} 
            borderRadius="xl" 
            border="1px" 
            borderColor="gray.200"
          >
            <VStack spacing={3}>
              <Text fontSize="sm" fontWeight="semibold" color="gray.700">
                Informações da Conta
              </Text>
              <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} w="full">
                <VStack spacing={1}>
                  <Text fontSize="xs" color="gray.500" textTransform="uppercase">
                    Plano Atual
                  </Text>
                  <Badge colorScheme="purple" variant="solid">
                    Pro
                  </Badge>
                </VStack>
                <VStack spacing={1}>
                  <Text fontSize="xs" color="gray.500" textTransform="uppercase">
                    Conta Criada
                  </Text>
                  <Text fontSize="sm" fontWeight="medium" color="gray.700">
                    15 de Janeiro, 2024
                  </Text>
                </VStack>
                <VStack spacing={1}>
                  <Text fontSize="xs" color="gray.500" textTransform="uppercase">
                    Último Login
                  </Text>
                  <Text fontSize="sm" fontWeight="medium" color="gray.700">
                    Hoje às 14:30
                  </Text>
                </VStack>
              </SimpleGrid>
            </VStack>
          </Box>

          {/* Zona de Perigo */}
          <Box 
            bg="red.50" 
            p={6} 
            borderRadius="xl" 
            border="1px" 
            borderColor="red.200"
          >
            <VStack spacing={4} align="start">
              <VStack align="start" spacing={2}>
                <Text fontSize="lg" fontWeight="bold" color="red.800">
                  🚨 Zona de Perigo
                </Text>
                <Text fontSize="sm" color="red.700">
                  Ações irreversíveis que afetam permanentemente sua conta
                </Text>
              </VStack>
              
              <HStack spacing={4} w="full">
                <Button 
                  colorScheme="red" 
                  variant="outline"
                  size="sm"
                >
                  Exportar Dados
                </Button>
                <Button 
                  colorScheme="red" 
                  variant="solid"
                  size="sm"
                >
                  Excluir Conta
                </Button>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </DashboardLayout>
  );
};

export default Settings;