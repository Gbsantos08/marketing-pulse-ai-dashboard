import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box, Text } from '@chakra-ui/react';

ChartJS.register(ArcElement, Tooltip, Legend);

const PlatformChart = ({ data, title = "Distribuição por Plataforma" }) => {
  if (!data) {
    return (
      <Box textAlign="center" py={8}>
        <Text color="gray.500">Dados insuficientes para gerar gráfico</Text>
      </Box>
    );
  }

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',   // Instagram - Azul
          'rgba(16, 185, 129, 0.8)',   // Facebook - Verde
          'rgba(245, 158, 11, 0.8)',   // Google Ads - Amarelo
          'rgba(239, 68, 68, 0.8)',    // LinkedIn - Vermelho
          'rgba(139, 92, 246, 0.8)',   // TikTok - Roxo
          'rgba(236, 72, 153, 0.8)'    // YouTube - Rosa
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(16, 185, 129)',
          'rgb(245, 158, 11)',
          'rgb(239, 68, 68)',
          'rgb(139, 92, 246)',
          'rgb(236, 72, 153)'
        ],
        borderWidth: 2,
        hoverOffset: 10
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
            weight: '500'
          }
        }
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
          weight: 'bold'
        },
        padding: 20
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.parsed}%`;
          }
        }
      }
    },
    cutout: '60%'
  };

  return (
    <Box h="400px" w="full">
      <Doughnut data={chartData} options={options} />
    </Box>
  );
};

export default PlatformChart;