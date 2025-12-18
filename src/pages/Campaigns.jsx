import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
  HStack,
  Badge,
  IconButton,
  Input,
  Select
} from '@chakra-ui/react';
import { 
  FaPlus, 
  FaSearch, 
  FaFilter, 
  FaPlay, 
  FaPause, 
  FaEdit, 
  FaTrash,
  FaChartLine
} from 'react-icons/fa';
import DashboardLayout from '../layouts/DashboardLayout';
import CreateCampaignModal from '../components/CreateCampaignModal';
import { useDashboard } from '../contexts/DashboardContext';

const Campaigns = () => {
  const { campaigns, isLoading, toggleCampaignStatus, deleteCampaign } = useDashboard();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || campaign.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const CampaignCard = ({ campaign }) => (
    <Box
      bg="white"
      p={6}
      borderRadius="xl"
      shadow="md"
      border="1px"
      borderColor="gray.200"
      _hover={{ shadow: "lg", transform: "translateY(-2px)" }}
      transition="all 0.3s ease"
    >
      <VStack align="start" spacing={4}>
        <HStack justify="space-between" w="full">
          <VStack align="start" spacing={1}>
            <Text fontWeight="bold" fontSize="lg" color="gray.800">
              {campaign.name}
            </Text>
            <Text fontSize="sm" color="gray.600">
              {campaign.platform} • Criada há {campaign.daysAgo} dias
            </Text>
          </VStack>
          <Badge
            colorScheme={campaign.status === 'Ativa' ? 'green' : campaign.status === 'Pausada' ? 'yellow' : 'gray'}
            variant="subtle"
            px={3}
            py={1}
            borderRadius="full"
          >
            {campaign.status}
          </Badge>
        </HStack>
        
        {/* Barra de progresso */}
        <Box w="full">
          <HStack justify="space-between" mb={2}>
            <Text fontSize="xs" color="gray.600" fontWeight="medium">
              Progresso
            </Text>
            <Text fontSize="xs" color="blue.600" fontWeight="bold">
              {campaign.progress}%
            </Text>
          </HStack>
          <Box w="full" bg="gray.200" borderRadius="full" h="2">
            <Box 
              bg="blue.500" 
              h="2" 
              borderRadius="full" 
              width={`${campaign.progress}%`}
              transition="width 0.3s"
            />
          </Box>
        </Box>
        
        <SimpleGrid columns={3} gap={4} w="full">
          <VStack spacing={1} align="start">
            <Text fontSize="xs" color="gray.500" textTransform="uppercase" fontWeight="semibold">
              Alcance
            </Text>
            <Text fontWeight="bold" color="blue.600" fontSize="lg">
              {campaign.reach}
            </Text>
          </VStack>
          <VStack spacing={1} align="start">
            <Text fontSize="xs" color="gray.500" textTransform="uppercase" fontWeight="semibold">
              ROI
            </Text>
            <Text fontWeight="bold" color="green.600" fontSize="lg">
              {campaign.roi}
            </Text>
          </VStack>
          <VStack spacing={1} align="start">
            <Text fontSize="xs" color="gray.500" textTransform="uppercase" fontWeight="semibold">
              CTR
            </Text>
            <Text fontWeight="bold" color="purple.600" fontSize="lg">
              {campaign.ctr}%
            </Text>
          </VStack>
        </SimpleGrid>

        <HStack spacing={2} w="full" pt={2}>
          <IconButton
            size="sm"
            variant="outline"
            colorScheme={campaign.status === 'Ativa' ? 'orange' : 'green'}
            onClick={() => toggleCampaignStatus(campaign.id)}
            icon={campaign.status === 'Ativa' ? <FaPause /> : <FaPlay />}
            title={campaign.status === 'Ativa' ? 'Pausar' : 'Ativar'}
          />
          <IconButton
            size="sm"
            variant="outline"
            colorScheme="blue"
            icon={<FaChartLine />}
            title="Ver analytics"
          />
          <IconButton
            size="sm"
            variant="outline"
            colorScheme="purple"
            icon={<FaEdit />}
            title="Editar"
          />
          <IconButton
            size="sm"
            variant="outline"
            colorScheme="red"
            onClick={() => deleteCampaign(campaign.id)}
            icon={<FaTrash />}
            title="Excluir"
          />
        </HStack>
      </VStack>
    </Box>
  );

  return (
    <DashboardLayout>
      <Container maxW="7xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <Box>
            <HStack justify="space-between" align="start" mb={6}>
              <VStack align="start" spacing={2}>
                <Heading size="2xl" color="gray.800">
                  🎯 Campanhas
                </Heading>
                <Text color="gray.600" fontSize="lg">
                  Gerencie todas as suas campanhas de marketing
                </Text>
              </VStack>
              <Button
                colorScheme="blue"
                leftIcon={<FaPlus />}
                onClick={() => setIsCreateModalOpen(true)}
                size="lg"
                borderRadius="xl"
                _hover={{ transform: "translateY(-2px)", shadow: "lg" }}
                transition="all 0.3s ease"
              >
                Nova Campanha
              </Button>
            </HStack>

            {/* Filtros */}
            <HStack spacing={4} mb={6}>
              <HStack flex={1} bg="white" borderRadius="lg" border="1px" borderColor="gray.200" px={4}>
                <FaSearch color="gray.400" />
                <Input
                  placeholder="Buscar campanhas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  border="none"
                  _focus={{ boxShadow: "none" }}
                />
              </HStack>
              <HStack bg="white" borderRadius="lg" border="1px" borderColor="gray.200" px={4}>
                <FaFilter color="gray.400" />
                <Select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  w="200px"
                  border="none"
                  _focus={{ boxShadow: "none" }}
                >
                  <option value="all">Todos os status</option>
                  <option value="Ativa">Ativas</option>
                  <option value="Pausada">Pausadas</option>
                  <option value="Finalizada">Finalizadas</option>
                </Select>
              </HStack>
            </HStack>
          </Box>

          {/* Estatísticas rápidas */}
          <SimpleGrid columns={{ base: 1, md: 4 }} gap={6}>
            <Box bg="white" p={6} borderRadius="xl" shadow="md" border="1px" borderColor="gray.200">
              <VStack align="start" spacing={2}>
                <Text fontSize="sm" color="gray.600" fontWeight="semibold">
                  Total de Campanhas
                </Text>
                <Text fontSize="3xl" fontWeight="bold" color="blue.600">
                  {campaigns.length}
                </Text>
              </VStack>
            </Box>
            <Box bg="white" p={6} borderRadius="xl" shadow="md" border="1px" borderColor="gray.200">
              <VStack align="start" spacing={2}>
                <Text fontSize="sm" color="gray.600" fontWeight="semibold">
                  Campanhas Ativas
                </Text>
                <Text fontSize="3xl" fontWeight="bold" color="green.600">
                  {campaigns.filter(c => c.status === 'Ativa').length}
                </Text>
              </VStack>
            </Box>
            <Box bg="white" p={6} borderRadius="xl" shadow="md" border="1px" borderColor="gray.200">
              <VStack align="start" spacing={2}>
                <Text fontSize="sm" color="gray.600" fontWeight="semibold">
                  Campanhas Pausadas
                </Text>
                <Text fontSize="3xl" fontWeight="bold" color="yellow.600">
                  {campaigns.filter(c => c.status === 'Pausada').length}
                </Text>
              </VStack>
            </Box>
            <Box bg="white" p={6} borderRadius="xl" shadow="md" border="1px" borderColor="gray.200">
              <VStack align="start" spacing={2}>
                <Text fontSize="sm" color="gray.600" fontWeight="semibold">
                  ROI Médio
                </Text>
                <Text fontSize="3xl" fontWeight="bold" color="purple.600">
                  245%
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>

          {/* Lista de campanhas */}
          <Box>
            {isLoading ? (
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Box key={i} bg="white" p={6} borderRadius="xl" shadow="md">
                    <VStack spacing={4}>
                      <Box h="20px" bg="gray.200" borderRadius="md" w="80%" />
                      <Box h="40px" bg="gray.200" borderRadius="lg" w="60%" />
                      <Box h="16px" bg="gray.200" borderRadius="md" w="100%" />
                    </VStack>
                  </Box>
                ))}
              </SimpleGrid>
            ) : filteredCampaigns.length > 0 ? (
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                {filteredCampaigns.map((campaign) => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
              </SimpleGrid>
            ) : (
              <Box 
                textAlign="center" 
                py={16}
                bg="white"
                borderRadius="xl"
                border="1px"
                borderColor="gray.200"
              >
                <VStack spacing={6}>
                  <Box fontSize="6xl">📊</Box>
                  <VStack spacing={2}>
                    <Text fontSize="xl" fontWeight="bold" color="gray.800">
                      {searchTerm || statusFilter !== 'all' ? 'Nenhuma campanha encontrada' : 'Nenhuma campanha criada'}
                    </Text>
                    <Text color="gray.600" maxW="md">
                      {searchTerm || statusFilter !== 'all' 
                        ? 'Tente ajustar os filtros de busca'
                        : 'Comece criando sua primeira campanha inteligente com nossa IA'
                      }
                    </Text>
                  </VStack>
                  {(!searchTerm && statusFilter === 'all') && (
                    <Button 
                      colorScheme="blue"
                      leftIcon={<FaPlus />}
                      onClick={() => setIsCreateModalOpen(true)}
                      size="lg"
                      borderRadius="xl"
                    >
                      Criar Primeira Campanha
                    </Button>
                  )}
                </VStack>
              </Box>
            )}
          </Box>
        </VStack>
      </Container>

      <CreateCampaignModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </DashboardLayout>
  );
};

export default Campaigns;