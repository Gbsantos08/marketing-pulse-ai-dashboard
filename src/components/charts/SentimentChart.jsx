import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box, Text, HStack, VStack } from '@chakra-ui/react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SentimentChart = ({ data, title = "Análise de Sentimento" }) => {
  if (!data) {
    return (
      <Box textAlign="center" py={8}>
<<<<<<< HEAD
        <Text color="gray.500">Dados insuficientes para análise</Text>
=======
        <Text color="fg.muted">Dados insuficientes para análise</Text>
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
      </Box>
    );
  }

  const chartData = {
    labels: ['Positivo', 'Neutro', 'Negativo'],
    datasets: [
      {
        label: 'Sentimento (%)',
        data: [data.positive, data.neutral, data.negative],
        backgroundColor: [
          'rgba(16, 185, 129, 0.8)',   // Verde para positivo
          'rgba(156, 163, 175, 0.8)',  // Cinza para neutro
          'rgba(239, 68, 68, 0.8)'     // Vermelho para negativo
        ],
        borderColor: [
          'rgb(16, 185, 129)',
          'rgb(156, 163, 175)',
          'rgb(239, 68, 68)'
        ],
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
          weight: 'bold'
        },
<<<<<<< HEAD
        padding: 20
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(255, 255, 255, 0.1)',
=======
        padding: 20,
        color: '#374151'
      },
      tooltip: {
        backgroundColor: '#ffffff',
        titleColor: '#374151',
        bodyColor: '#6B7280',
        borderColor: '#E5E7EB',
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
        callbacks: {
          label: function(context) {
            return `${context.parsed.y}% dos comentários`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 12,
            weight: '500'
<<<<<<< HEAD
          }
=======
          },
          color: '#6B7280'
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
        }
      },
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          font: {
            size: 11
          },
<<<<<<< HEAD
=======
          color: '#6B7280',
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
          callback: function(value) {
            return value + '%';
          }
        }
      }
    }
  };

  return (
    <VStack spacing={4} h="400px" w="full">
      <Box h="300px" w="full">
        <Bar data={chartData} options={options} />
      </Box>
      
      {/* Resumo visual */}
      <HStack spacing={6} justify="center">
        <HStack spacing={2}>
          <Box w={3} h={3} bg="green.500" borderRadius="full" />
<<<<<<< HEAD
          <Text fontSize="sm" fontWeight="medium">
=======
          <Text fontSize="sm" fontWeight="medium" color="fg.muted">
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
            😊 {data.positive}% Positivo
          </Text>
        </HStack>
        <HStack spacing={2}>
          <Box w={3} h={3} bg="gray.400" borderRadius="full" />
<<<<<<< HEAD
          <Text fontSize="sm" fontWeight="medium">
            �� {data.neutral}% Neutro
=======
          <Text fontSize="sm" fontWeight="medium" color="fg.muted">
            😐 {data.neutral}% Neutro
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
          </Text>
        </HStack>
        <HStack spacing={2}>
          <Box w={3} h={3} bg="red.500" borderRadius="full" />
<<<<<<< HEAD
          <Text fontSize="sm" fontWeight="medium">
            �� {data.negative}% Negativo
=======
          <Text fontSize="sm" fontWeight="medium" color="fg.muted">
            😞 {data.negative}% Negativo
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
          </Text>
        </HStack>
      </HStack>
    </VStack>
  );
};

export default SentimentChart;