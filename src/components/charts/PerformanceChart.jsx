import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box, Text } from '@chakra-ui/react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const PerformanceChart = ({ data, title = "Performance da Campanha" }) => {
  if (!data || !data.daily || data.daily.length === 0) {
    return (
      <Box textAlign="center" py={8}>
<<<<<<< HEAD
        <Text color="gray.500">Dados insuficientes para gerar gráfico</Text>
=======
        <Text color="fg.muted">Dados insuficientes para gerar gráfico</Text>
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
      </Box>
    );
  }

  const chartData = {
    labels: data.daily.map(item => {
      const date = new Date(item.date);
      return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
    }),
    datasets: [
      {
        label: 'Alcance',
        data: data.daily.map(item => item.reach),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgb(59, 130, 246)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7
      },
      {
        label: 'Engajamento',
        data: data.daily.map(item => item.engagement),
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgb(16, 185, 129)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7
      },
      {
        label: 'Conversões',
        data: data.daily.map(item => item.conversions),
        borderColor: 'rgb(245, 158, 11)',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgb(245, 158, 11)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 20,
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
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
          weight: 'bold'
        },
<<<<<<< HEAD
        padding: 20
=======
        padding: 20,
        color: '#374151'
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
      },
      tooltip: {
        mode: 'index',
        intersect: false,
<<<<<<< HEAD
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(255, 255, 255, 0.1)',
=======
        backgroundColor: '#ffffff',
        titleColor: '#374151',
        bodyColor: '#6B7280',
        borderColor: '#E5E7EB',
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12
      }
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 11
<<<<<<< HEAD
          }
=======
          },
          color: '#6B7280'
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
        }
      },
      y: {
        display: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          font: {
            size: 11
<<<<<<< HEAD
          }
=======
          },
          color: '#6B7280'
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
        }
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    }
  };

  return (
    <Box h="400px" w="full">
      <Line data={chartData} options={options} />
    </Box>
  );
};

export default PerformanceChart;