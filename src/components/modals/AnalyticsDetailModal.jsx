import React from 'react';
import {
  Box,
  Button,
  VStack,
  HStack,
  Text,
  SimpleGrid,
  Badge,
  Separator
} from '@chakra-ui/react';
import { 
  FaTimes, 
  FaChartLine, 
  FaBullseye, 
  FaDollarSign, 
  FaBrain,
  FaArrowUp,
  FaArrowDown,
  FaEye,
  FaMousePointer,
  FaHeart,
  FaShare
} from 'react-icons/fa';

const AnalyticsDetailModal = ({ isOpen, onClose, type, data }) => {
  if (!isOpen) return null;

  const getModalContent = () => {
    switch (type) {
      case 'performance':
        return {
          title: '📈 Performance em Tempo Real',
          icon: FaChartLine,
          color: 'blue',
          content: (
            <VStack spacing={6} align="stretch">
              <SimpleGrid columns={2} gap={4}>
                <Box bg="blue.50" p={4} borderRadius="lg">
                  <HStack spacing={2} mb={2}>
                    <FaEye color="var(--chakra-colors-blue-500)" />
                    <Text fontSize="sm" fontWeight="medium" color="blue.700">
                      Impressões Totais
                    </Text>
                  </HStack>
                  <Text fontSize="2xl" fontWeight="bold" color="blue.800">
                    2.4M
                  </Text>
                  <HStack spacing={1} mt={1}>
                    <FaArrowUp size={12} color="green" />
                    <Text fontSize="sm" color="green.600">+12.5%</Text>
                  </HStack>
                </Box>

                <Box bg="green.50" p={4} borderRadius="lg">
                  <HStack spacing={2} mb={2}>
                    <FaMousePointer color="var(--chakra-colors-green-500)" />
                    <Text fontSize="sm" fontWeight="medium" color="green.700">
                      Taxa de Cliques
                    </Text>
                  </HStack>
                  <Text fontSize="2xl" fontWeight="bold" color="green.800">
                    4.2%
                  </Text>
                  <HStack spacing={1} mt={1}>
                    <FaArrowUp size={12} color="green" />
                    <Text fontSize="sm" color="green.600">+0.8%</Text>
                  </HStack>
                </Box>

                <Box bg="purple.50" p={4} borderRadius="lg">
                  <HStack spacing={2} mb={2}>
                    <FaHeart color="var(--chakra-colors-purple-500)" />
                    <Text fontSize="sm" fontWeight="medium" color="purple.700">
                      Engajamento
                    </Text>
                  </HStack>
                  <Text fontSize="2xl" fontWeight="bold" color="purple.800">
                    8.7%
                  </Text>
                  <HStack spacing={1} mt={1}>
                    <FaArrowUp size={12} color="green" />
                    <Text fontSize="sm" color="green.600">+2.1%</Text>
                  </HStack>
                </Box>

                <Box bg="orange.50" p={4} borderRadius="lg">
                  <HStack spacing={2} mb={2}>
                    <FaShare color="var(--chakra-colors-orange-500)" />
                    <Text fontSize="sm" fontWeight="medium" color="orange.700">
                      Compartilhamentos
                    </Text>
                  </HStack>
                  <Text fontSize="2xl" fontWeight="bold" color="orange.800">
                    1.2K
                  </Text>
                  <HStack spacing={1} mt={1}>
                    <FaArrowDown size={12} color="red" />
                    <Text fontSize="sm" color="red.600">-3.2%</Text>
                  </HStack>
                </Box>
              </SimpleGrid>

              <Separator />

              <VStack align="start" spacing={3}>
                <Text fontSize="lg" fontWeight="bold" color="gray.800">
                  🎯 Insights em Tempo Real
                </Text>
                
                <Box p={3} bg="green.50" borderRadius="lg" w="full">
                  <Text fontSize="sm" fontWeight="medium" color="green.800">
                    ✅ Performance Excelente
                  </Text>
                  <Text fontSize="sm" color="green.700">
                    Sua campanha está 23% acima da média do setor
                  </Text>
                </Box>

                <Box p={3} bg="blue.50" borderRadius="lg" w="full">
                  <Text fontSize="sm" fontWeight="medium" color="blue.800">
                    📊 Tendência Positiva
                  </Text>
                  <Text fontSize="sm" color="blue.700">
                    Crescimento consistente nas últimas 24 horas
                  </Text>
                </Box>

                <Box p={3} bg="orange.50" borderRadius="lg" w="full">
                  <Text fontSize="sm" fontWeight="medium" color="orange.800">
                    ⚠️ Atenção
                  </Text>
                  <Text fontSize="sm" color="orange.700">
                    Queda nos compartilhamentos - considere ajustar o conteúdo
                  </Text>
                </Box>
              </VStack>
            </VStack>
          )
        };

      case 'prediction':
        return {
          title: '🎯 Previsão de Alcance',
          icon: FaBullseye,
          color: 'green',
          content: (
            <VStack spacing={6} align="stretch">
              <Box textAlign="center" p={6} bg="green.50" borderRadius="xl">
                <Text fontSize="sm" color="green.700" mb={2}>
                  Projeção para os próximos 7 dias
                </Text>
                <Text fontSize="4xl" fontWeight="bold" color="green.600">
                  +187K
                </Text>
                <Text fontSize="sm" color="green.700">
                  pessoas alcançadas
                </Text>
                <Badge colorPalette="green" variant="subtle" mt={2}>
                  85% de confiança
                </Badge>
              </Box>

              <SimpleGrid columns={1} gap={4}>
                <Box p={4} border="1px" borderColor="gray.200" borderRadius="lg">
                  <Text fontSize="sm" fontWeight="medium" color="gray.700" mb={3}>
                    📈 Breakdown da Previsão
                  </Text>
                  <VStack spacing={2} align="stretch">
                    <HStack justify="space-between">
                      <Text fontSize="sm" color="gray.600">Alcance orgânico:</Text>
                      <Text fontSize="sm" fontWeight="medium">45K pessoas</Text>
                    </HStack>
                    <HStack justify="space-between">
                      <Text fontSize="sm" color="gray.600">Alcance pago:</Text>
                      <Text fontSize="sm" fontWeight="medium">142K pessoas</Text>
                    </HStack>
                    <HStack justify="space-between">
                      <Text fontSize="sm" color="gray.600">Crescimento viral:</Text>
                      <Text fontSize="sm" fontWeight="medium">+12% estimado</Text>
                    </HStack>
                  </VStack>
                </Box>

                <Box p={4} bg="blue.50" borderRadius="lg">
                  <Text fontSize="sm" fontWeight="medium" color="blue.800" mb={2}>
                    🤖 Recomendações da IA
                  </Text>
                  <VStack spacing={2} align="start">
                    <Text fontSize="sm" color="blue.700">
                      • Aumente o orçamento em 15% para maximizar alcance
                    </Text>
                    <Text fontSize="sm" color="blue.700">
                      • Foque em horários de pico: 19h-21h
                    </Text>
                    <Text fontSize="sm" color="blue.700">
                      • Teste variações de criativo para melhor performance
                    </Text>
                  </VStack>
                </Box>
              </SimpleGrid>
            </VStack>
          )
        };

      case 'roi':
        return {
          title: '💰 ROI Otimizado',
          icon: FaDollarSign,
          color: 'orange',
          content: (
            <VStack spacing={6} align="stretch">
              <HStack spacing={8} justify="center">
                <VStack>
                  <Text fontSize="sm" color="gray.600">ROI Atual</Text>
                  <Text fontSize="3xl" fontWeight="bold" color="orange.500">
                    250%
                  </Text>
                  <Badge colorPalette="orange" variant="subtle">Bom</Badge>
                </VStack>
                
                <Text fontSize="3xl" color="gray.400">→</Text>
                
                <VStack>
                  <Text fontSize="sm" color="gray.600">ROI Otimizado</Text>
                  <Text fontSize="3xl" fontWeight="bold" color="green.500">
                    355%
                  </Text>
                  <Badge colorPalette="green" variant="subtle">Excelente</Badge>
                </VStack>
              </HStack>

              <Box p={4} bg="green.50" borderRadius="lg" textAlign="center">
                <Text fontSize="lg" fontWeight="bold" color="green.800">
                  +42% de Potencial de Melhoria
                </Text>
                <Text fontSize="sm" color="green.700" mt={1}>
                  Implementando as sugestões da IA
                </Text>
              </Box>

              <VStack spacing={4} align="stretch">
                <Text fontSize="lg" fontWeight="bold" color="gray.800">
                  🎯 Estratégias de Otimização
                </Text>

                <Box p={4} border="1px" borderColor="blue.200" borderRadius="lg">
                  <Text fontSize="sm" fontWeight="medium" color="blue.800" mb={2}>
                    1. Redistribuição de Orçamento
                  </Text>
                  <Text fontSize="sm" color="blue.700" mb={2}>
                    Mover 30% do orçamento para Instagram (melhor performance)
                  </Text>
                  <Badge colorPalette="blue" variant="subtle" size="sm">
                    +15% ROI esperado
                  </Badge>
                </Box>

                <Box p={4} border="1px" borderColor="purple.200" borderRadius="lg">
                  <Text fontSize="sm" fontWeight="medium" color="purple.800" mb={2}>
                    2. Otimização de Público
                  </Text>
                  <Text fontSize="sm" color="purple.700" mb={2}>
                    Focar em mulheres 25-35 anos (maior taxa de conversão)
                  </Text>
                  <Badge colorPalette="purple" variant="subtle" size="sm">
                    +18% ROI esperado
                  </Badge>
                </Box>

                <Box p={4} border="1px" borderColor="green.200" borderRadius="lg">
                  <Text fontSize="sm" fontWeight="medium" color="green.800" mb={2}>
                    3. Ajuste de Horários
                  </Text>
                  <Text fontSize="sm" color="green.700" mb={2}>
                    Concentrar anúncios entre 19h-21h (pico de engajamento)
                  </Text>
                  <Badge colorPalette="green" variant="subtle" size="sm">
                    +9% ROI esperado
                  </Badge>
                </Box>
              </VStack>
            </VStack>
          )
        };

      case 'sentiment':
        return {
          title: '🧠 Análise de Sentimento IA',
          icon: FaBrain,
          color: 'purple',
          content: (
            <VStack spacing={6} align="stretch">
              <SimpleGrid columns={3} gap={4}>
                <Box bg="green.50" p={4} borderRadius="lg" textAlign="center">
                  <Text fontSize="3xl" mb={2}>😊</Text>
                  <Text fontSize="2xl" fontWeight="bold" color="green.600">
                    68%
                  </Text>
                  <Text fontSize="sm" color="green.700">Positivo</Text>
                </Box>

                <Box bg="gray.50" p={4} borderRadius="lg" textAlign="center">
                  <Text fontSize="3xl" mb={2}>😐</Text>
                  <Text fontSize="2xl" fontWeight="bold" color="gray.600">
                    20%
                  </Text>
                  <Text fontSize="sm" color="gray.700">Neutro</Text>
                </Box>

                <Box bg="red.50" p={4} borderRadius="lg" textAlign="center">
                  <Text fontSize="3xl" mb={2}>😞</Text>
                  <Text fontSize="2xl" fontWeight="bold" color="red.600">
                    12%
                  </Text>
                  <Text fontSize="sm" color="red.700">Negativo</Text>
                </Box>
              </SimpleGrid>

              <Box p={4} bg="purple.50" borderRadius="lg">
                <Text fontSize="sm" fontWeight="medium" color="purple.800" mb={3}>
                  📊 Análise Detalhada dos Comentários
                </Text>
                <VStack spacing={2} align="stretch">
                  <HStack justify="space-between">
                    <Text fontSize="sm" color="purple.700">Palavras positivas mais citadas:</Text>
                    <Text fontSize="sm" fontWeight="medium">"incrível", "amei", "perfeito"</Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text fontSize="sm" color="purple.700">Principais elogios:</Text>
                    <Text fontSize="sm" fontWeight="medium">Qualidade, atendimento, preço</Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text fontSize="sm" color="purple.700">Pontos de melhoria:</Text>
                    <Text fontSize="sm" fontWeight="medium">Entrega, embalagem</Text>
                  </HStack>
                </VStack>
              </Box>

              <VStack spacing={3} align="stretch">
                <Text fontSize="lg" fontWeight="bold" color="gray.800">
                  💡 Insights e Recomendações
                </Text>

                <Box p={3} bg="green.50" borderRadius="lg">
                  <Text fontSize="sm" fontWeight="medium" color="green.800">
                    ✅ Sentimento Muito Positivo
                  </Text>
                  <Text fontSize="sm" color="green.700">
                    68% de comentários positivos está acima da média do setor (55%)
                  </Text>
                </Box>

                <Box p={3} bg="blue.50" borderRadius="lg">
                  <Text fontSize="sm" fontWeight="medium" color="blue.800">
                    🎯 Oportunidade
                  </Text>
                  <Text fontSize="sm" color="blue.700">
                    Use os elogios sobre qualidade em novos anúncios
                  </Text>
                </Box>

                <Box p={3} bg="orange.50" borderRadius="lg">
                  <Text fontSize="sm" fontWeight="medium" color="orange.800">
                    ⚠️ Atenção
                  </Text>
                  <Text fontSize="sm" color="orange.700">
                    Melhorar comunicação sobre prazos de entrega
                  </Text>
                </Box>
              </VStack>
            </VStack>
          )
        };

      default:
        return {
          title: 'Detalhes',
          icon: FaChartLine,
          color: 'blue',
          content: <Text>Conteúdo não encontrado</Text>
        };
    }
  };

  const modalContent = getModalContent();

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
        bg="white"
        borderRadius="xl"
        shadow="2xl"
        maxW="2xl"
        w="full"
        mx={4}
        maxH="90vh"
        overflow="auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <Box
          bgGradient={`linear(to-r, ${modalContent.color}.500, ${modalContent.color}.600)`}
          color="white"
          p={6}
        >
          <HStack justify="space-between" align="center">
            <HStack spacing={3}>
              <Box p={2} bg="whiteAlpha.200" borderRadius="lg">
                <modalContent.icon size={24} />
              </Box>
              <VStack align="start" spacing={0}>
                <Text fontSize="xl" fontWeight="bold">
                  {modalContent.title}
                </Text>
                <Text fontSize="sm" opacity={0.9}>
                  Análise detalhada com IA
                </Text>
              </VStack>
            </HStack>
            <Button 
              size="sm" 
              variant="ghost" 
              color="white"
              _hover={{ bg: "whiteAlpha.200" }}
              onClick={onClose}
              borderRadius="full"
            >
              <FaTimes />
            </Button>
          </HStack>
        </Box>
        
        {/* Body */}
        <Box p={6}>
          {modalContent.content}
        </Box>
      </Box>
    </Box>
  );
};

export default AnalyticsDetailModal;