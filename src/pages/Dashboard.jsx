import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  HStack,
  Text,
  Button,
  Badge,
  Separator,
  Stack,
  Skeleton,
  IconButton,
  Tabs
} from '@chakra-ui/react';
import { 
  FaChartLine, 
  FaEye, 
  FaPlus, 
  FaDownload, 
  FaCog,
  FaRocket,
  FaBrain,
  FaBullseye,
  FaDollarSign,
  FaArrowUp,
  FaArrowDown,
  FaPlay,
  FaPause,
  FaTrash,
  FaEdit,
  FaSyncAlt,
  FaTimes,
  FaChartPie,
  FaChartBar,
  FaCircle
} from 'react-icons/fa';
import DashboardLayout from '../layouts/DashboardLayout';
import CreateCampaignModal from '../components/CreateCampaignModal';
import PerformanceChart from '../components/charts/PerformanceChart';
import PlatformChart from '../components/charts/PlatformChart';
import SentimentChart from '../components/charts/SentimentChart';
import AnalyticsDetailModal from '../components/modals/AnalyticsDetailModal';
import SettingsModal from '../components/modals/SettingsModal';
import ThemeToggle from '../components/common/ThemeToggle';
import { useDashboard } from '../contexts/DashboardContext';
import { useSettings } from '../contexts/SettingsContext';

const Dashboard = () => {
  const {
    isLoading,
    campaigns,
    analytics,
    metrics,
    notifications,
    lastUpdate,
    loadDashboardData,
    toggleCampaignStatus,
    deleteCampaign,
    removeNotification,
    selectCampaign,
    selectedCampaign,
    getCampaignAnalytics,
    performAIAnalysis,
    generateReport
  } = useDashboard();

  const { isDarkMode } = useSettings();

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [campaignAnalytics, setCampaignAnalytics] = useState(null);
  const [loadingAnalytics, setLoadingAnalytics] = useState(false);
  const [analyticsModal, setAnalyticsModal] = useState({
    isOpen: false,
    type: null,
    data: null
  });
  const [settingsModal, setSettingsModal] = useState(false);

  // Componente CustomBadge Avançado
  const CustomBadge = ({ 
    variant = "subtle", 
    colorPalette = "blue",
    children, 
    icon: IconComponent,
    size = "md",
    className = "",
    ...props 
  }) => {
    const sizeProps = {
      sm: { px: 2, py: 1, fontSize: "xs" },
      md: { px: 3, py: 1, fontSize: "sm" },
      lg: { px: 4, py: 2, fontSize: "md" }
    };

    return (
      <Badge
        variant={variant}
        colorPalette={colorPalette}
        borderRadius="full"
        className={`theme-interactive ${className}`}
        style={{
          background: isDarkMode 
            ? `rgba(${colorPalette === 'green' ? '52, 211, 153' : colorPalette === 'blue' ? '96, 165, 250' : '196, 181, 253'}, 0.1)`
            : `var(--${colorPalette}-50)`,
          border: `1px solid ${isDarkMode ? `rgba(${colorPalette === 'green' ? '52, 211, 153' : colorPalette === 'blue' ? '96, 165, 250' : '196, 181, 253'}, 0.2)` : `var(--${colorPalette}-200)`}`,
          color: isDarkMode ? `var(--${colorPalette}-dark)` : `var(--${colorPalette}-600)`,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
        {...sizeProps[size]}
        {...props}
      >
        <HStack spacing={1}>
          {IconComponent && <IconComponent size={size === "sm" ? 10 : 12} />}
          <span>{children}</span>
        </HStack>
      </Badge>
    );
  };

  // Componente StatCard Avançado
  const StatCard = ({ label, value, helpText, growth, icon: IconComponent, color = "blue", isLoading = false }) => (
    <Box
      className="theme-card theme-interactive animate-fade-in"
      position="relative"
      overflow="hidden"
      p={6}
      style={{
        background: isDarkMode 
          ? `linear-gradient(145deg, #1f2937 0%, #111827 100%)`
          : `linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)`,
        border: `1px solid ${isDarkMode ? 'rgba(75, 85, 99, 0.3)' : 'var(--border-primary)'}`,
        boxShadow: isDarkMode ? 'var(--shadow-elevated)' : 'var(--shadow-primary)'
      }}
    >
      {/* Borda colorida superior */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        height="4px"
        style={{
          background: `linear-gradient(90deg, var(--${color}-500) 0%, var(--${color}-600) 100%)`
        }}
      />
      
      {/* Efeito de brilho sutil */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.03"
        style={{
          background: `radial-gradient(circle at top right, var(--${color}-500), transparent 70%)`
        }}
      />
      
      {isLoading ? (
        <VStack align="start" spacing={3}>
          <Skeleton height="20px" width="60%" />
          <Skeleton height="40px" width="80%" />
          <Skeleton height="16px" width="70%" />
        </VStack>
      ) : (
        <VStack align="start" spacing={3} position="relative" zIndex={1}>
          <HStack justify="space-between" w="full">
            <Text 
              className="theme-text-tertiary" 
              fontSize="sm" 
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="0.05em"
            >
              {label}
            </Text>
            {IconComponent && (
              <Box 
                p={2} 
                borderRadius="lg"
                style={{
                  background: isDarkMode 
                    ? `rgba(${color === 'blue' ? '96, 165, 250' : color === 'green' ? '52, 211, 153' : color === 'orange' ? '251, 191, 36' : color === 'purple' ? '196, 181, 253' : '239, 68, 68'}, 0.15)`
                    : `var(--${color}-50)`,
                  color: isDarkMode ? `var(--${color}-dark)` : `var(--${color}-500)`
                }}
              >
                <IconComponent size={24} />
              </Box>
            )}
          </HStack>
          
          <Text 
            fontSize="3xl" 
            fontWeight="800" 
            className="theme-text-primary"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {value}
          </Text>
          
          <HStack spacing={2}>
            <Box 
              p={1}
              borderRadius="full"
              style={{
                background: growth > 0 
                  ? (isDarkMode ? 'rgba(52, 211, 153, 0.2)' : 'var(--green-100)')
                  : (isDarkMode ? 'rgba(239, 68, 68, 0.2)' : 'var(--red-100)'),
                color: growth > 0 
                  ? (isDarkMode ? 'var(--green-dark)' : 'var(--green-600)')
                  : (isDarkMode ? 'var(--red-dark)' : 'var(--red-600)')
              }}
            >
              {growth > 0 ? <FaArrowUp size={10} /> : <FaArrowDown size={10} />}
            </Box>
            <Text 
              fontSize="sm" 
              fontWeight="600"
              style={{
                color: growth > 0 
                  ? (isDarkMode ? 'var(--green-dark)' : 'var(--green-600)')
                  : (isDarkMode ? 'var(--red-dark)' : 'var(--red-600)')
              }}
            >
              {Math.abs(growth)}%
            </Text>
            <Text className="theme-text-muted" fontSize="sm">
              {helpText}
            </Text>
          </HStack>
        </VStack>
      )}
    </Box>
  );

  // Componente CampaignCard Avançado
  const CampaignCard = ({ campaign }) => {
    const handleViewAnalytics = async () => {
      setLoadingAnalytics(true);
      selectCampaign(campaign.id);
      
      try {
        const analytics = await getCampaignAnalytics(campaign.id);
        setCampaignAnalytics(analytics);
      } catch (error) {
        console.error('Erro ao carregar analytics:', error);
      } finally {
        setLoadingAnalytics(false);
      }
    };

    return (
      <Box
        className="theme-card theme-interactive animate-fade-in"
        p={6}
        style={{
          background: isDarkMode 
            ? `linear-gradient(145deg, #1f2937 0%, #111827 100%)`
            : `linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)`,
          border: `1px solid ${isDarkMode ? 'rgba(75, 85, 99, 0.3)' : 'var(--border-primary)'}`,
          boxShadow: isDarkMode ? 'var(--shadow-primary)' : 'var(--shadow-md)'
        }}
      >
        <VStack align="start" spacing={4}>
          <HStack justify="space-between" w="full">
            <VStack align="start" spacing={1}>
              <Text 
                fontWeight="700" 
                className="theme-text-primary" 
                fontSize="lg"
                style={{ lineHeight: '1.2' }}
              >
                {campaign.name}
              </Text>
              <Text fontSize="sm" className="theme-text-tertiary">
                {campaign.platform} • Criada há {campaign.daysAgo} dias
              </Text>
            </VStack>
            <Badge
              colorPalette={
                campaign.status === "Ativa" ? "green" : 
                campaign.status === "Pausada" ? "orange" : "gray"
              }
              variant="subtle"
              px={3}
              py={1}
              borderRadius="full"
              style={{
                background: campaign.status === "Ativa" 
                  ? (isDarkMode ? 'rgba(52, 211, 153, 0.2)' : 'var(--green-100)')
                  : campaign.status === "Pausada"
                  ? (isDarkMode ? 'rgba(251, 191, 36, 0.2)' : 'var(--orange-100)')
                  : (isDarkMode ? 'rgba(156, 163, 175, 0.2)' : 'var(--gray-100)'),
                color: campaign.status === "Ativa" 
                  ? (isDarkMode ? 'var(--green-dark)' : 'var(--green-700)')
                  : campaign.status === "Pausada"
                  ? (isDarkMode ? 'var(--orange-dark)' : 'var(--orange-700)')
                  : (isDarkMode ? 'var(--text-tertiary)' : 'var(--gray-700)'),
                border: `1px solid ${campaign.status === "Ativa" 
                  ? (isDarkMode ? 'rgba(52, 211, 153, 0.3)' : 'var(--green-200)')
                  : campaign.status === "Pausada"
                  ? (isDarkMode ? 'rgba(251, 191, 36, 0.3)' : 'var(--orange-200)')
                  : (isDarkMode ? 'rgba(156, 163, 175, 0.3)' : 'var(--gray-200)')}`
              }}
            >
              {campaign.status}
            </Badge>
          </HStack>
          
          {/* Progress Bar */}
          <Box w="full" position="relative">
            <Box 
              w="full" 
              h="3" 
              borderRadius="full"
              style={{
                background: isDarkMode ? 'rgba(75, 85, 99, 0.3)' : 'var(--gray-200)'
              }}
            >
              <Box 
                h="3" 
                borderRadius="full" 
                width={`${campaign.progress}%`}
                transition="width 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
                style={{
                  background: 'linear-gradient(90deg, var(--blue-500) 0%, var(--purple-500) 100%)',
                  boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)'
                }}
              />
            </Box>
            <Text 
              fontSize="xs" 
              className="theme-text-muted" 
              mt={1}
              textAlign="right"
            >
              {campaign.progress}% concluída
            </Text>
          </Box>
          
          {/* Métricas principais */}
          <SimpleGrid columns={3} gap={4} w="full">
            <VStack spacing={1} align="start">
              <Text 
                fontSize="xs" 
                className="theme-text-muted" 
                textTransform="uppercase"
                fontWeight="600"
                letterSpacing="0.05em"
              >
                Alcance
              </Text>
              <Text 
                fontWeight="700" 
                fontSize="lg"
                style={{ 
                  color: 'var(--blue-500)',
                  fontVariantNumeric: 'tabular-nums'
                }}
              >
                {campaign.reach}
              </Text>
            </VStack>
            <VStack spacing={1} align="start">
              <Text 
                fontSize="xs" 
                className="theme-text-muted" 
                textTransform="uppercase"
                fontWeight="600"
                letterSpacing="0.05em"
              >
                Engajamento
              </Text>
              <Text 
                fontWeight="700" 
                fontSize="lg"
                style={{ 
                  color: isDarkMode ? 'var(--green-dark)' : 'var(--green-600)',
                  fontVariantNumeric: 'tabular-nums'
                }}
              >
                {campaign.engagement}
              </Text>
            </VStack>
            <VStack spacing={1} align="start">
              <Text 
                fontSize="xs" 
                className="theme-text-muted" 
                textTransform="uppercase"
                fontWeight="600"
                letterSpacing="0.05em"
              >
                ROI
              </Text>
              <Text 
                fontWeight="700" 
                fontSize="lg"
                style={{ 
                  color: isDarkMode ? 'var(--purple-dark)' : 'var(--purple-600)',
                  fontVariantNumeric: 'tabular-nums'
                }}
              >
                {campaign.roi}
              </Text>
            </VStack>
          </SimpleGrid>

          {/* Métricas detalhadas */}
          <Box 
            w="full" 
            p={3} 
            borderRadius="lg"
            style={{
              background: isDarkMode ? 'rgba(55, 65, 81, 0.3)' : 'var(--gray-50)',
              border: `1px solid ${isDarkMode ? 'rgba(75, 85, 99, 0.2)' : 'var(--gray-200)'}`
            }}
          >
            <SimpleGrid columns={2} gap={3} fontSize="sm">
              <HStack justify="space-between">
                <Text className="theme-text-tertiary">CTR:</Text>
                <Text fontWeight="600" className="theme-text-primary">{campaign.ctr}%</Text>
              </HStack>
              <HStack justify="space-between">
                <Text className="theme-text-tertiary">Conversões:</Text>
                <Text fontWeight="600" className="theme-text-primary">{campaign.conversions}</Text>
              </HStack>
              <HStack justify="space-between">
                <Text className="theme-text-tertiary">CPC:</Text>
                <Text fontWeight="600" className="theme-text-primary">R$ {campaign.costPerClick?.toFixed(2)}</Text>
              </HStack>
              <HStack justify="space-between">
                <Text className="theme-text-tertiary">Gasto:</Text>
                <Text fontWeight="600" className="theme-text-primary">R$ {campaign.spent?.toLocaleString()}</Text>
              </HStack>
            </SimpleGrid>
          </Box>

          {/* Botões de ação */}
          <HStack spacing={2} w="full" pt={2}>
            <IconButton
              size="sm"
              variant="outline"
              colorPalette={campaign.status === "Ativa" ? "orange" : "green"}
              onClick={() => toggleCampaignStatus(campaign.id)}
              title={campaign.status === "Ativa" ? "Pausar campanha" : "Ativar campanha"}
              className="theme-interactive theme-focus"
            >
              {campaign.status === "Ativa" ? <FaPause /> : <FaPlay />}
            </IconButton>
            
            <IconButton
              size="sm"
              variant="outline"
              colorPalette="blue"
              title="Ver analytics"
              onClick={handleViewAnalytics}
              loading={loadingAnalytics}
              className="theme-interactive theme-focus"
            >
              <FaChartLine />
            </IconButton>
            
            <IconButton
              size="sm"
              variant="outline"
              colorPalette="purple"
              title="Editar campanha"
              className="theme-interactive theme-focus"
            >
              <FaEdit />
            </IconButton>
            
            <IconButton
              size="sm"
              variant="outline"
              colorPalette="red"
              onClick={() => deleteCampaign(campaign.id)}
              title="Excluir campanha"
              className="theme-interactive theme-focus"
            >
              <FaTrash />
            </IconButton>
          </HStack>
        </VStack>
      </Box>
    );
  };

  // Função para formatar a última atualização
  const formatLastUpdate = (date) => {
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);
    
    if (diff < 60) return `há ${diff} segundos`;
    if (diff < 3600) return `há ${Math.floor(diff / 60)} minutos`;
    if (diff < 86400) return `há ${Math.floor(diff / 3600)} horas`;
    return `há ${Math.floor(diff / 86400)} dias`;
  };

  // Componente ChartCard Avançado
  const ChartCard = ({ title, children, icon: IconComponent, color = "blue", onViewDetails }) => (
    <Box
      className="theme-card-elevated animate-fade-in"
      overflow="hidden"
      style={{
        background: isDarkMode 
          ? `linear-gradient(145deg, #1f2937 0%, #111827 100%)`
          : `linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)`,
        border: `1px solid ${isDarkMode ? 'rgba(75, 85, 99, 0.3)' : 'var(--border-primary)'}`,
        boxShadow: isDarkMode ? 'var(--shadow-elevated)' : 'var(--shadow-lg)'
      }}
    >
      {/* Header do card */}
      <Box 
        p={4} 
        borderBottom="1px" 
        style={{
          borderColor: isDarkMode ? 'rgba(75, 85, 99, 0.3)' : 'var(--border-primary)',
          background: isDarkMode 
            ? `linear-gradient(135deg, rgba(55, 65, 81, 0.5) 0%, rgba(31, 41, 55, 0.5) 100%)`
            : `linear-gradient(135deg, var(--${color}-50) 0%, rgba(255, 255, 255, 0.8) 100%)`
        }}
      >
        <HStack justify="space-between">
          <HStack spacing={3}>
            {IconComponent && (
              <Box 
                p={2} 
                borderRadius="lg"
                style={{
                  background: isDarkMode 
                    ? `rgba(${color === 'blue' ? '96, 165, 250' : color === 'green' ? '52, 211, 153' : color === 'orange' ? '251, 191, 36' : color === 'purple' ? '196, 181, 253' : '239, 68, 68'}, 0.2)`
                    : `var(--${color}-100)`,
                  color: isDarkMode ? `var(--${color}-dark)` : `var(--${color}-600)`
                }}
              >
                <IconComponent size={20} />
              </Box>
            )}
            <Text 
              fontSize="lg" 
              fontWeight="700" 
              className="theme-text-primary"
            >
              {title}
            </Text>
          </HStack>
          {onViewDetails && (
            <Button
              size="sm"
              variant="outline"
              colorPalette={color}
              onClick={onViewDetails}
              className="theme-interactive theme-focus"
            >
              Ver Detalhes
            </Button>
          )}
        </HStack>
      </Box>
      
      {/* Conteúdo do card */}
      <Box p={6}>
        {children}
      </Box>
    </Box>
  );

  return (
    <Box 
      minH="100vh"
      style={{
        background: isDarkMode 
          ? 'linear-gradient(135deg, #0a0e1a 0%, #111827 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)'
      }}
    >
      <DashboardLayout>
        <Container maxW="8xl" py={8}>
          <Stack gap={10}>
            {/* Header Avançado */}
            <Box className="animate-slide-in">
              <HStack justify="space-between" align="start" mb={6}>
                <VStack align="start" spacing={3}>
                  <Heading 
                    size="4xl" 
                    fontWeight="800"
                    style={{
                      background: isDarkMode 
                        ? 'linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%)'
                        : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      lineHeight: '1.1'
                    }}
                  >
                    Marketing Pulse AI
                  </Heading>
                  <Text className="theme-text-secondary" fontSize="xl" fontWeight="500">
                    Análise inteligente de campanhas em tempo real
                  </Text>
                  
                  <HStack gap={3} mt={3}>
                    <CustomBadge 
                      colorPalette="green" 
                      icon={FaCircle}
                      className="glass-effect"
                    >
                      Sistema Online
                    </CustomBadge>
                    <CustomBadge 
                      colorPalette="blue" 
                      icon={FaBrain}
                      className="glass-effect"
                    >
                      IA Ativa
                    </CustomBadge>
                    <CustomBadge 
                      colorPalette="purple" 
                      icon={FaChartLine}
                      className="glass-effect"
                    >
                      Dados Atualizados
                    </CustomBadge>
                  </HStack>
                </VStack>
                
                <VStack align="end" spacing={3}>
                  <HStack spacing={3}>
                    <Text className="theme-text-tertiary" fontSize="sm" fontWeight="500">
                      {formatLastUpdate(lastUpdate)}
                    </Text>
                    <ThemeToggle size="md" />
                    <IconButton
                      size="md"
                      variant="outline"
                      onClick={loadDashboardData}
                      loading={isLoading}
                      className="theme-interactive theme-focus"
                      title="Atualizar dados"
                    >
                      <FaSyncAlt />
                    </IconButton>
                  </HStack>
                  
                  {/* Indicadores visuais */}
                  <HStack gap={2}>
                    <Box 
                      w={3} h={3} 
                      borderRadius="full"
                      className="animate-pulse"
                      style={{ background: 'var(--blue-500)' }}
                    />
                    <Box 
                      w={3} h={3} 
                      borderRadius="full"
                      className="animate-pulse"
                      style={{ 
                        background: 'var(--green-500)',
                        animationDelay: '0.5s'
                      }}
                    />
                    <Box 
                      w={3} h={3} 
                      borderRadius="full"
                      className="animate-pulse"
                      style={{ 
                        background: 'var(--purple-500)',
                        animationDelay: '1s'
                      }}
                    />
                  </HStack>
                </VStack>
              </HStack>

              {/* Notificações Avançadas */}
              {notifications.length > 0 && (
                <VStack spacing={3} mb={6}>
                  {notifications.slice(0, 2).map((notification) => (
                    <Box 
                      key={notification.id}
                      className="glass-effect animate-slide-in"
                      borderRadius="lg"
                      p={4}
                      w="full"
                      style={{
                        background: `rgba(${notification.type === 'success' ? '52, 211, 153' : notification.type === 'error' ? '239, 68, 68' : '96, 165, 250'}, 0.1)`,
                        border: `1px solid rgba(${notification.type === 'success' ? '52, 211, 153' : notification.type === 'error' ? '239, 68, 68' : '96, 165, 250'}, 0.2)`,
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)'
                      }}
                    >
                      <HStack justify="space-between">
                        <Text 
                          style={{
                            color: isDarkMode 
                              ? (notification.type === 'success' ? 'var(--green-dark)' : notification.type === 'error' ? 'var(--red-dark)' : 'var(--blue-dark)')
                              : `var(--${notification.type === 'success' ? 'green' : notification.type === 'error' ? 'red' : 'blue'}-700)`
                          }}
                          fontWeight="500"
                        >
                          <strong>{notification.title}:</strong> {notification.message}
                        </Text>
                        <IconButton
                          size="sm"
                          variant="ghost"
                          onClick={() => removeNotification(notification.id)}
                          className="theme-focus"
                        >
                          <FaTimes />
                        </IconButton>
                      </HStack>
                    </Box>
                  ))}
                </VStack>
              )}
            </Box>

            {/* Métricas Principais */}
            <Box>
              <Heading 
                size="2xl" 
                mb={8} 
                className="theme-text-primary"
                fontWeight="700"
              >
                Métricas Principais
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8}>
                <StatCard
                  label="Total de Campanhas"
                  value={metrics.totalCampaigns}
                  helpText="desde o último mês"
                  growth={metrics.campaignGrowth}
                  icon={FaChartLine}
                  color="blue"
                  isLoading={isLoading}
                />
                
                <StatCard
                  label="Campanhas Ativas"
                  value={metrics.activeCampaigns}
                  helpText="em execução agora"
                  growth={5.2}
                  icon={FaRocket}
                  color="green"
                  isLoading={isLoading}
                />
                
                <StatCard
                  label="Alcance Total"
                  value={`${(metrics.totalReach / 1000).toFixed(0)}K`}
                  helpText="pessoas alcançadas"
                  growth={metrics.reachGrowth}
                  icon={FaEye}
                  color="purple"
                  isLoading={isLoading}
                />
                
                <StatCard
                  label="ROI Médio"
                  value={`${metrics.roi}%`}
                  helpText="retorno sobre investimento"
                  growth={metrics.engagementGrowth}
                  icon={FaDollarSign}
                  color="orange"
                  isLoading={isLoading}
                />
              </SimpleGrid>
            </Box>

            {/* Gráficos e Análises */}
            <Box>
              <Heading 
                size="2xl" 
                mb={8} 
                className="theme-text-primary"
                fontWeight="700"
              >
                Análises Inteligentes
              </Heading>
              
              <Tabs.Root defaultValue="overview" variant="enclosed">
                <Tabs.List mb={6}>
                  <Tabs.Trigger value="overview">
                    <HStack spacing={2}>
                      <FaChartLine />
                      <Text>Visão Geral</Text>
                    </HStack>
                  </Tabs.Trigger>
                  <Tabs.Trigger value="platforms">
                    <HStack spacing={2}>
                      <FaChartPie />
                      <Text>Plataformas</Text>
                    </HStack>
                  </Tabs.Trigger>
                  <Tabs.Trigger value="sentiment">
                    <HStack spacing={2}>
                      <FaBrain />
                      <Text>Sentimento</Text>
                    </HStack>
                  </Tabs.Trigger>
                  {selectedCampaign && (
                    <Tabs.Trigger value="campaign">
                      <HStack spacing={2}>
                        <FaChartBar />
                        <Text>Campanha Selecionada</Text>
                      </HStack>
                    </Tabs.Trigger>
                  )}
                </Tabs.List>

                <Tabs.Content value="overview">
                  <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
                    <ChartCard 
                      title="Performance em Tempo Real" 
                      icon={FaChartLine} 
                      color="blue"
                      onViewDetails={() => setAnalyticsModal({ isOpen: true, type: 'performance', data: null })}
                    >
                      {analytics && campaigns.length > 0 ? (
                        <PerformanceChart 
                          data={campaigns[0].performance} 
                          title="Últimos 7 dias - Campanha Principal"
                        />
                      ) : (
                        <Box textAlign="center" py={8}>
                          <Text className="theme-text-muted">Carregando dados de performance...</Text>
                        </Box>
                      )}
                    </ChartCard>
                    
                    <ChartCard 
                      title="Previsão de Alcance" 
                      icon={FaBullseye} 
                      color="green"
                      onViewDetails={() => setAnalyticsModal({ isOpen: true, type: 'prediction', data: analytics?.reachPrediction })}
                    >
                      <VStack gap={6} h="400px" justify="center">
                        <Box 
                          style={{
                            color: isDarkMode ? 'var(--green-dark)' : 'var(--green-500)'
                          }}
                        >
                          <FaBullseye size={64} />
                        </Box>
                        <VStack gap={2} textAlign="center">
                          <Text className="theme-text-primary" fontWeight="700" fontSize="lg">
                            Projeção Inteligente
                          </Text>
                          <Text fontSize="sm" className="theme-text-tertiary">
                            IA prevê alcance dos próximos 7 dias
                          </Text>
                          <Text 
                            fontSize="2xl" 
                            fontWeight="800" 
                            style={{ 
                              color: isDarkMode ? 'var(--green-dark)' : 'var(--green-500)',
                              fontVariantNumeric: 'tabular-nums'
                            }}
                          >
                            +{analytics?.reachPrediction?.next7Days?.toLocaleString() || '245K'} pessoas
                          </Text>
                          <Badge 
                            colorPalette="green" 
                            variant="subtle"
                            style={{
                              background: isDarkMode ? 'rgba(52, 211, 153, 0.2)' : 'var(--green-100)',
                              color: isDarkMode ? 'var(--green-dark)' : 'var(--green-700)'
                            }}
                          >
                            {analytics?.reachPrediction?.confidence || 87}% de confiança
                          </Badge>
                        </VStack>
                      </VStack>
                    </ChartCard>
                  </SimpleGrid>
                </Tabs.Content>

                <Tabs.Content value="platforms">
                  <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
                    <ChartCard title="Distribuição por Plataforma" icon={FaChartPie} color="purple">
                      {analytics?.platformDistribution ? (
                        <PlatformChart data={analytics.platformDistribution} />
                      ) : (
                        <Box textAlign="center" py={8}>
                          <Text className="theme-text-muted">Carregando distribuição de plataformas...</Text>
                        </Box>
                      )}
                    </ChartCard>
                    
                    <ChartCard 
                      title="ROI Otimizado" 
                      icon={FaDollarSign} 
                      color="orange"
                      onViewDetails={() => setAnalyticsModal({ isOpen: true, type: 'roi', data: analytics?.roiOptimization })}
                    >
                      <VStack gap={6} h="400px" justify="center">
                        <Box 
                          style={{
                            color: isDarkMode ? 'var(--orange-dark)' : 'var(--orange-500)'
                          }}
                        >
                          <FaDollarSign size={64} />
                        </Box>
                        <VStack gap={2} textAlign="center">
                          <Text className="theme-text-primary" fontWeight="700" fontSize="lg">
                            Otimização de ROI
                          </Text>
                          <Text fontSize="sm" className="theme-text-tertiary">
                            Sugestões de IA para maximizar retorno
                          </Text>
                          <HStack spacing={4}>
                            <VStack>
                              <Text fontSize="sm" className="theme-text-tertiary">Atual</Text>
                              <Text 
                                fontSize="xl" 
                                fontWeight="700" 
                                style={{ 
                                  color: isDarkMode ? 'var(--orange-dark)' : 'var(--orange-500)',
                                  fontVariantNumeric: 'tabular-nums'
                                }}
                              >
                                {analytics?.roiOptimization?.currentROI || 286}%
                              </Text>
                            </VStack>
                            <Text fontSize="2xl" className="theme-text-muted">→</Text>
                            <VStack>
                              <Text fontSize="sm" className="theme-text-tertiary">Otimizado</Text>
                              <Text 
                                fontSize="xl" 
                                fontWeight="700" 
                                style={{ 
                                  color: isDarkMode ? 'var(--green-dark)' : 'var(--green-500)',
                                  fontVariantNumeric: 'tabular-nums'
                                }}
                              >
                                {analytics?.roiOptimization?.optimizedROI || 398}%
                              </Text>
                            </VStack>
                          </HStack>
                          <Badge 
                            colorPalette="green" 
                            variant="subtle"
                            style={{
                              background: isDarkMode ? 'rgba(52, 211, 153, 0.2)' : 'var(--green-100)',
                              color: isDarkMode ? 'var(--green-dark)' : 'var(--green-700)'
                            }}
                          >
                            +{analytics?.roiOptimization?.improvement || 39}% potencial
                          </Badge>
                        </VStack>
                      </VStack>
                    </ChartCard>
                  </SimpleGrid>
                </Tabs.Content>

                <Tabs.Content value="sentiment">
                  <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
                    <ChartCard 
                      title="Análise de Sentimento IA" 
                      icon={FaBrain} 
                      color="purple"
                      onViewDetails={() => setAnalyticsModal({ isOpen: true, type: 'sentiment', data: analytics?.sentimentAnalysis })}
                    >
                      {analytics?.sentimentAnalysis ? (
                        <SentimentChart data={analytics.sentimentAnalysis} />
                      ) : (
                        <Box textAlign="center" py={8}>
                          <Text className="theme-text-muted">Carregando análise de sentimento...</Text>
                        </Box>
                      )}
                    </ChartCard>
                    
                    <ChartCard title="Insights de IA" icon={FaBrain} color="indigo">
                      <VStack gap={4} h="400px" justify="center" align="start" p={4}>
                        <Text fontSize="lg" fontWeight="700" className="theme-text-primary">
                          Recomendações da IA
                        </Text>
                        
                        <VStack gap={3} align="start" w="full">
                          <Box 
                            p={4} 
                            borderRadius="lg" 
                            w="full"
                            className="glass-effect"
                            style={{
                              background: isDarkMode ? 'rgba(96, 165, 250, 0.1)' : 'var(--blue-50)',
                              border: `1px solid ${isDarkMode ? 'rgba(96, 165, 250, 0.2)' : 'var(--blue-200)'}`
                            }}
                          >
                            <Text 
                              fontSize="sm" 
                              fontWeight="600" 
                              style={{
                                color: isDarkMode ? 'var(--blue-dark)' : 'var(--blue-800)'
                              }}
                              mb={1}
                            >
                              Melhor horário para postar
                            </Text>
                            <Text 
                              fontSize="sm" 
                              style={{
                                color: isDarkMode ? 'var(--blue-dark)' : 'var(--blue-600)'
                              }}
                            >
                              Entre 19h-21h para maior engajamento
                            </Text>
                          </Box>
                          
                          <Box 
                            p={4} 
                            borderRadius="lg" 
                            w="full"
                            className="glass-effect"
                            style={{
                              background: isDarkMode ? 'rgba(52, 211, 153, 0.1)' : 'var(--green-50)',
                              border: `1px solid ${isDarkMode ? 'rgba(52, 211, 153, 0.2)' : 'var(--green-200)'}`
                            }}
                          >
                            <Text 
                              fontSize="sm" 
                              fontWeight="600" 
                              style={{
                                color: isDarkMode ? 'var(--green-dark)' : 'var(--green-800)'
                              }}
                              mb={1}
                            >
                              Público recomendado
                            </Text>
                            <Text 
                              fontSize="sm" 
                              style={{
                                color: isDarkMode ? 'var(--green-dark)' : 'var(--green-600)'
                              }}
                            >
                              Mulheres 25-35 anos interessadas em tecnologia
                            </Text>
                          </Box>
                          
                          <Box 
                            p={4} 
                            borderRadius="lg" 
                            w="full"
                            className="glass-effect"
                            style={{
                              background: isDarkMode ? 'rgba(251, 191, 36, 0.1)' : 'var(--orange-50)',
                              border: `1px solid ${isDarkMode ? 'rgba(251, 191, 36, 0.2)' : 'var(--orange-200)'}`
                            }}
                          >
                            <Text 
                              fontSize="sm" 
                              fontWeight="600" 
                              style={{
                                color: isDarkMode ? 'var(--orange-dark)' : 'var(--orange-800)'
                              }}
                              mb={1}
                            >
                              Otimização de orçamento
                            </Text>
                            <Text 
                              fontSize="sm" 
                              style={{
                                color: isDarkMode ? 'var(--orange-dark)' : 'var(--orange-600)'
                              }}
                            >
                              Redistribuir 30% do orçamento para Instagram
                            </Text>
                          </Box>
                          
                          <Box 
                            p={4} 
                            borderRadius="lg" 
                            w="full"
                            className="glass-effect"
                            style={{
                              background: isDarkMode ? 'rgba(196, 181, 253, 0.1)' : 'var(--purple-50)',
                              border: `1px solid ${isDarkMode ? 'rgba(196, 181, 253, 0.2)' : 'var(--purple-200)'}`
                            }}
                          >
                            <Text 
                              fontSize="sm" 
                              fontWeight="600" 
                              style={{
                                color: isDarkMode ? 'var(--purple-dark)' : 'var(--purple-800)'
                              }}
                              mb={1}
                            >
                              Conteúdo sugerido
                            </Text>
                            <Text 
                              fontSize="sm" 
                              style={{
                                color: isDarkMode ? 'var(--purple-dark)' : 'var(--purple-600)'
                              }}
                            >
                              Vídeos curtos têm 40% mais engajamento
                            </Text>
                          </Box>
                        </VStack>
                      </VStack>
                    </ChartCard>
                  </SimpleGrid>
                </Tabs.Content>

                {selectedCampaign && (
                  <Tabs.Content value="campaign">
                    <ChartCard 
                      title={`Performance - ${selectedCampaign.name}`} 
                      icon={FaChartBar} 
                      color="blue"
                    >
                      {campaignAnalytics ? (
                        <PerformanceChart 
                          data={campaignAnalytics} 
                          title={`Performance detalhada - ${selectedCampaign.name}`}
                        />
                      ) : (
                        <Box textAlign="center" py={8}>
                          <Text className="theme-text-muted">Carregando analytics da campanha...</Text>
                            </Box>
                      )}
                    </ChartCard>
                  </Tabs.Content>
                )}
              </Tabs.Root>
            </Box>

            <Separator style={{ 
              borderColor: isDarkMode ? 'rgba(75, 85, 99, 0.3)' : 'var(--border-primary)',
              opacity: 0.6
            }} />

            {/* Campanhas */}
            <Box>
              <HStack justify="space-between" align="center" mb={8}>
                <Heading 
                  size="2xl" 
                  className="theme-text-primary"
                  fontWeight="700"
                >
                  Campanhas ({campaigns.length})
                </Heading>
                <Button 
                  colorPalette="blue" 
                  size="lg"
                  onClick={() => setIsCreateModalOpen(true)}
                  className="theme-interactive theme-focus gradient-primary"
                  style={{
                    background: isDarkMode 
                      ? 'linear-gradient(135deg, var(--blue-dark) 0%, var(--purple-dark) 100%)'
                      : 'linear-gradient(135deg, var(--blue-500) 0%, var(--purple-500) 100%)',
                    border: 'none',
                    color: 'white',
                    fontWeight: '600',
                    boxShadow: isDarkMode ? 'var(--shadow-elevated)' : 'var(--shadow-lg)'
                  }}
                  leftIcon={<FaPlus />}
                >
                  Nova Campanha
                </Button>
              </HStack>
              
              {isLoading ? (
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
                  {[1, 2, 3].map((i) => (
                    <Box 
                      key={i} 
                      className="theme-card" 
                      p={6} 
                      style={{
                        background: isDarkMode 
                          ? 'linear-gradient(145deg, #1f2937 0%, #111827 100%)'
                          : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)'
                      }}
                    >
                      <VStack spacing={4}>
                        <Skeleton height="20px" width="80%" />
                        <Skeleton height="40px" width="60%" />
                        <Skeleton height="16px" width="100%" />
                        <Skeleton height="32px" width="100%" />
                      </VStack>
                    </Box>
                  ))}
                </SimpleGrid>
              ) : campaigns.length > 0 ? (
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
                  {campaigns.map((campaign) => (
                    <CampaignCard key={campaign.id} campaign={campaign} />
                  ))}
                </SimpleGrid>
              ) : (
                <Box 
                  textAlign="center" 
                  py={16}
                  className="theme-card"
                  style={{
                    background: isDarkMode 
                      ? 'linear-gradient(145deg, #1f2937 0%, #111827 100%)'
                      : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                    border: `2px dashed ${isDarkMode ? 'rgba(75, 85, 99, 0.4)' : 'var(--border-secondary)'}`
                  }}
                >
                  <VStack spacing={6}>
                    <Box 
                      p={4}
                      borderRadius="full"
                      style={{
                        background: isDarkMode ? 'rgba(96, 165, 250, 0.1)' : 'var(--blue-50)',
                        color: isDarkMode ? 'var(--blue-dark)' : 'var(--blue-500)'
                      }}
                    >
                      <FaPlus size={32} />
                    </Box>
                    <VStack spacing={2}>
                      <Text 
                        fontSize="xl" 
                        fontWeight="600" 
                        className="theme-text-primary"
                      >
                        Nenhuma campanha encontrada
                      </Text>
                      <Text 
                        fontSize="md" 
                        className="theme-text-tertiary"
                        maxW="md"
                        textAlign="center"
                      >
                        Crie sua primeira campanha para começar a monitorar performance e obter insights de IA
                      </Text>
                    </VStack>
                    <Button 
                      colorPalette="blue"
                      size="lg"
                      onClick={() => setIsCreateModalOpen(true)}
                      className="theme-interactive theme-focus"
                      style={{
                        background: isDarkMode 
                          ? 'linear-gradient(135deg, var(--blue-dark) 0%, var(--purple-dark) 100%)'
                          : 'linear-gradient(135deg, var(--blue-500) 0%, var(--purple-500) 100%)',
                        border: 'none',
                        color: 'white',
                        fontWeight: '600'
                      }}
                      leftIcon={<FaPlus />}
                    >
                      Criar Primeira Campanha
                    </Button>
                  </VStack>
                </Box>
              )}
            </Box>

            {/* Centro de Controle Avançado */}
            <Box>
              <Heading 
                size="2xl" 
                mb={8} 
                className="theme-text-primary"
                fontWeight="700"
              >
                Centro de Controle
              </Heading>
              
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6}>
                <Button 
                  size="lg" 
                  h="100px"
                  flexDirection="column"
                  gap={2}
                  className="theme-interactive theme-focus"
                  onClick={() => setIsCreateModalOpen(true)}
                  style={{
                    background: isDarkMode 
                      ? 'linear-gradient(145deg, #1f2937 0%, #111827 100%)'
                      : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                    border: `1px solid ${isDarkMode ? 'rgba(75, 85, 99, 0.3)' : 'var(--border-primary)'}`,
                    color: isDarkMode ? 'var(--text-primary)' : 'var(--text-secondary)',
                    boxShadow: isDarkMode ? 'var(--shadow-primary)' : 'var(--shadow-md)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    height="3px"
                    style={{
                      background: 'linear-gradient(90deg, var(--blue-500) 0%, var(--purple-500) 100%)'
                    }}
                  />
                  <Box 
                    p={2}
                    borderRadius="lg"
                    style={{
                      background: isDarkMode ? 'rgba(96, 165, 250, 0.1)' : 'var(--blue-50)',
                      color: isDarkMode ? 'var(--blue-dark)' : 'var(--blue-500)'
                    }}
                  >
                    <FaRocket size={24} />
                  </Box>
                  <VStack spacing={0}>
                    <Text fontWeight="600" fontSize="md">Nova Campanha</Text>
                    <Text fontSize="xs" className="theme-text-muted">com IA</Text>
                  </VStack>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  h="100px"
                  flexDirection="column"
                  gap={2}
                  className="theme-interactive theme-focus"
                  onClick={generateReport}
                  loading={isLoading}
                  style={{
                    background: isDarkMode 
                      ? 'linear-gradient(145deg, #1f2937 0%, #111827 100%)'
                      : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                    border: `1px solid ${isDarkMode ? 'rgba(75, 85, 99, 0.3)' : 'var(--border-primary)'}`,
                    color: isDarkMode ? 'var(--text-primary)' : 'var(--text-secondary)',
                    boxShadow: isDarkMode ? 'var(--shadow-primary)' : 'var(--shadow-md)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    height="3px"
                    style={{
                      background: 'linear-gradient(90deg, var(--green-500) 0%, var(--blue-500) 100%)'
                    }}
                  />
                  <Box 
                    p={2}
                    borderRadius="lg"
                    style={{
                      background: isDarkMode ? 'rgba(52, 211, 153, 0.1)' : 'var(--green-50)',
                      color: isDarkMode ? 'var(--green-dark)' : 'var(--green-500)'
                    }}
                  >
                    <FaDownload size={24} />
                  </Box>
                  <VStack spacing={0}>
                    <Text fontWeight="600" fontSize="md">Relatório</Text>
                    <Text fontSize="xs" className="theme-text-muted">Completo</Text>
                  </VStack>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  h="100px"
                  flexDirection="column"
                  gap={2}
                  className="theme-interactive theme-focus"
                  onClick={performAIAnalysis}
                  loading={isLoading}
                  style={{
                    background: isDarkMode 
                      ? 'linear-gradient(145deg, #1f2937 0%, #111827 100%)'
                      : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                    border: `1px solid ${isDarkMode ? 'rgba(75, 85, 99, 0.3)' : 'var(--border-primary)'}`,
                    color: isDarkMode ? 'var(--text-primary)' : 'var(--text-secondary)',
                    boxShadow: isDarkMode ? 'var(--shadow-primary)' : 'var(--shadow-md)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    height="3px"
                    style={{
                      background: 'linear-gradient(90deg, var(--purple-500) 0%, var(--pink-500) 100%)'
                    }}
                  />
                  <Box 
                    p={2}
                    borderRadius="lg"
                    style={{
                      background: isDarkMode ? 'rgba(196, 181, 253, 0.1)' : 'var(--purple-50)',
                      color: isDarkMode ? 'var(--purple-dark)' : 'var(--purple-500)'
                    }}
                  >
                    <FaBrain size={24} />
                  </Box>
                  <VStack spacing={0}>
                    <Text fontWeight="600" fontSize="md">Análise IA</Text>
                    <Text fontSize="xs" className="theme-text-muted">Avançada</Text>
                  </VStack>
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="lg"
                  h="100px"
                  flexDirection="column"
                  gap={2}
                  className="theme-interactive theme-focus"
                  onClick={() => setSettingsModal(true)}
                  style={{
                    background: isDarkMode 
                      ? 'linear-gradient(145deg, #1f2937 0%, #111827 100%)'
                      : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                    border: `1px solid ${isDarkMode ? 'rgba(75, 85, 99, 0.3)' : 'var(--border-primary)'}`,
                    color: isDarkMode ? 'var(--text-primary)' : 'var(--text-secondary)',
                    boxShadow: isDarkMode ? 'var(--shadow-primary)' : 'var(--shadow-md)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    height="3px"
                    style={{
                      background: 'linear-gradient(90deg, var(--gray-500) 0%, var(--gray-600) 100%)'
                    }}
                  />
                  <Box 
                    p={2}
                    borderRadius="lg"
                    style={{
                      background: isDarkMode ? 'rgba(156, 163, 175, 0.1)' : 'var(--gray-50)',
                      color: isDarkMode ? 'var(--text-tertiary)' : 'var(--gray-500)'
                    }}
                  >
                    <FaCog size={24} />
                  </Box>
                  <VStack spacing={0}>
                    <Text fontWeight="600" fontSize="md">Configurações</Text>
                    <Text fontSize="xs" className="theme-text-muted">Sistema</Text>
                  </VStack>
                </Button>
              </SimpleGrid>
            </Box>

            {/* Footer com informações adicionais */}
            <Box 
              mt={16}
              pt={8}
              style={{
                borderTop: `1px solid ${isDarkMode ? 'rgba(75, 85, 99, 0.3)' : 'var(--border-primary)'}`
              }}
            >
              <HStack justify="space-between" align="center">
                <VStack align="start" spacing={1}>
                  <Text className="theme-text-primary" fontWeight="600" fontSize="sm">
                    Marketing Pulse AI Dashboard
                  </Text>
                  <Text className="theme-text-muted" fontSize="xs">
                    Powered by Advanced AI Analytics • Versão 2.0.1
                  </Text>
                </VStack>
                
                <HStack spacing={4}>
                  <CustomBadge 
                    colorPalette="green" 
                    size="sm"
                    className="glass-effect"
                  >
                    Uptime: 99.9%
                  </CustomBadge>
                  <CustomBadge 
                    colorPalette="blue" 
                    size="sm"
                    className="glass-effect"
                  >
                    Latência: 45ms
                  </CustomBadge>
                  <CustomBadge 
                    colorPalette="purple" 
                    size="sm"
                    className="glass-effect"
                  >
                    IA: Online
                  </CustomBadge>
                </HStack>
              </HStack>
            </Box>
          </Stack>
        </Container>

        {/* Modais */}
        <CreateCampaignModal 
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
        />

        <AnalyticsDetailModal
          isOpen={analyticsModal.isOpen}
          onClose={() => setAnalyticsModal({ isOpen: false, type: null, data: null })}
          type={analyticsModal.type}
          data={analyticsModal.data}
        />

        <SettingsModal 
          isOpen={settingsModal}
          onClose={() => setSettingsModal(false)}
        />
      </DashboardLayout>
    </Box>
  );
};

export default Dashboard;