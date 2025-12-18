<<<<<<< HEAD
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import ApiService from '../services/api';

const DashboardContext = createContext();

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard deve ser usado dentro de DashboardProvider');
  }
  return context;
};

export const DashboardProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
=======
import React, { createContext, useContext, useState, useEffect } from "react";

// Contexto
const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
  const [campaigns, setCampaigns] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [metrics, setMetrics] = useState({
    totalCampaigns: 0,
    activeCampaigns: 0,
    totalReach: 0,
<<<<<<< HEAD
    engagement: 0,
    roi: 0,
    campaignGrowth: 0,
    reachGrowth: 0,
    engagementGrowth: 0,
    totalSpent: 0,
    totalBudget: 0,
    budgetUtilization: 0
=======
    roi: 0,
    campaignGrowth: 0,
    reachGrowth: 0,
    engagementGrowth: 0
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
  });
  const [notifications, setNotifications] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [selectedCampaign, setSelectedCampaign] = useState(null);

<<<<<<< HEAD
  // Remover notificação
  const removeNotification = useCallback((notificationId) => {
    setNotifications(prev => prev.filter(n => n.id !== notificationId));
  }, []);

  // Adicionar notificação
  const addNotification = useCallback((notification) => {
    const newNotification = {
      id: Date.now(),
      timestamp: new Date(),
      ...notification
    };
    setNotifications(prev => [newNotification, ...prev.slice(0, 4)]);
    
    // Auto-remover após 5 segundos
    setTimeout(() => {
      removeNotification(newNotification.id);
    }, 5000);
  }, [removeNotification]);

  // Função para recalcular métricas baseadas nas campanhas atuais
  const recalculateMetrics = useCallback((campaignsList) => {
    const activeCampaigns = campaignsList.filter(c => c.status === "Ativa");
    const totalReach = campaignsList.reduce((sum, c) => {
      const reach = parseInt(c.reach.replace(/[K,]/g, '')) * (c.reach.includes('K') ? 1000 : 1);
      return sum + reach;
    }, 0);
    
    const totalSpent = campaignsList.reduce((sum, c) => sum + (c.spent || 0), 0);
    const totalBudget = campaignsList.reduce((sum, c) => sum + (c.budget || 0), 0);
    const avgROI = campaignsList.length > 0 ? 
      campaignsList.reduce((sum, c) => sum + parseInt(c.roi.replace('%', '')), 0) / campaignsList.length : 0;
    const avgEngagement = campaignsList.length > 0 ?
      campaignsList.reduce((sum, c) => sum + parseFloat(c.engagement.replace('%', '')), 0) / campaignsList.length : 0;

    setMetrics({
      totalCampaigns: campaignsList.length,
      activeCampaigns: activeCampaigns.length,
      totalReach,
      engagement: parseFloat(avgEngagement.toFixed(1)), // Garantir que é número
      roi: Math.round(avgROI),
      campaignGrowth: 15.3,
      reachGrowth: -2.1,
      engagementGrowth: 8.7,
      totalSpent,
      totalBudget,
      budgetUtilization: totalBudget > 0 ? parseFloat(((totalSpent / totalBudget) * 100).toFixed(1)) : 0
    });
  }, []);

  // Função de IA para análise inteligente
  const performAIAnalysis = useCallback(async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const insights = [
      {
        type: "optimization",
        title: "Otimização Detectada",
        message: "IA sugere redistribuir 25% do orçamento do Facebook para Instagram (+18% ROI esperado)",
        priority: "high",
        action: "redistribute_budget"
      },
      {
        type: "performance",
        title: "Performance Alert",
        message: "Campanha 'Black Friday 2024' está 23% acima da média do setor",
        priority: "medium",
        action: "scale_campaign"
      },
      {
        type: "audience",
        title: "Novo Público Identificado",
        message: "IA identificou segmento de alta conversão: Homens 30-45 anos interessados em tecnologia",
        priority: "medium",
        action: "create_audience"
      }
    ];

    insights.forEach(insight => {
      addNotification({
        type: "info",
        title: insight.title,
        message: insight.message
      });
    });

    setIsLoading(false);
    return insights;
  }, [addNotification]);

  // Função para gerar relatório completo
  const generateReport = useCallback(async () => {
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const reportData = {
        period: "Últimos 30 dias",
        totalCampaigns: campaigns.length,
        activeCampaigns: campaigns.filter(c => c.status === "Ativa").length,
        totalSpent: campaigns.reduce((sum, c) => sum + (c.spent || 0), 0),
        totalROI: metrics.roi,
        topPerformingCampaign: campaigns.length > 0 ? campaigns.reduce((best, current) => {
          const currentROI = parseInt(current.roi.replace('%', ''));
          const bestROI = parseInt(best.roi.replace('%', ''));
          return currentROI > bestROI ? current : best;
        }, campaigns[0]) : null,
        recommendations: [
          "Aumentar orçamento das campanhas com ROI > 300%",
          "Pausar campanhas com CTR < 2%",
          "Testar novos criativos para campanhas estagnadas"
        ]
      };

      // Simular download do relatório
      const reportContent = `
RELATÓRIO DE MARKETING - ${reportData.period}
=====================================

RESUMO EXECUTIVO:
- Total de Campanhas: ${reportData.totalCampaigns}
- Campanhas Ativas: ${reportData.activeCampaigns}
- Investimento Total: R$ ${reportData.totalSpent.toLocaleString()}
- ROI Médio: ${reportData.totalROI}%

MELHOR CAMPANHA:
${reportData.topPerformingCampaign?.name || 'N/A'} - ROI: ${reportData.topPerformingCampaign?.roi || 'N/A'}

RECOMENDAÇÕES:
${reportData.recommendations.map(rec => `• ${rec}`).join('\n')}

Relatório gerado em: ${new Date().toLocaleString()}
      `;

      const blob = new Blob([reportContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `relatorio-marketing-${new Date().toISOString().split('T')[0]}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      addNotification({
        type: "success",
        title: "Relatório Gerado",
        message: "Relatório completo foi baixado com sucesso!"
      });

    } catch (error) {
      addNotification({
        type: "error",
        title: "Erro",
        message: "Falha ao gerar relatório."
      });
    } finally {
      setIsLoading(false);
    }
  }, [campaigns, metrics.roi, addNotification]);

  // Carregar dados do dashboard
  const loadDashboardData = useCallback(async () => {
    setIsLoading(true);
    
    try {
      const data = await ApiService.getDashboardData();
      
      setCampaigns(data.campaigns);
      setAnalytics(data.analytics);
      
      // Recalcular métricas
      recalculateMetrics(data.campaigns);
      
      setLastUpdate(new Date());
      
      addNotification({
        type: "success",
        title: "Dados Atualizados",
        message: "Dashboard atualizado com sucesso!"
      });
      
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      addNotification({
        type: "error",
        title: "Erro",
        message: "Falha ao carregar dados do dashboard."
      });
    } finally {
      setIsLoading(false);
    }
  }, [addNotification, recalculateMetrics]);

  // Criar nova campanha
  const createCampaign = useCallback(async (campaignData) => {
    try {
      const newCampaign = await ApiService.createCampaign(campaignData);
      
      const updatedCampaigns = [...campaigns, newCampaign];
      setCampaigns(updatedCampaigns);
      
      // Recalcular métricas
      recalculateMetrics(updatedCampaigns);

      addNotification({
        type: "success",
        title: "Campanha Criada!",
        message: `${campaignData.name} foi criada com sucesso.`
      });
      
      return newCampaign;
    } catch (error) {
      addNotification({
        type: "error",
        title: "Erro",
        message: "Falha ao criar campanha."
      });
      throw error;
    }
  }, [campaigns, addNotification, recalculateMetrics]);

  // Alternar status da campanha
  const toggleCampaignStatus = useCallback(async (campaignId) => {
    try {
      const campaign = campaigns.find(c => c.id === campaignId);
      const newStatus = campaign.status === "Ativa" ? "Pausada" : "Ativa";
      
      await ApiService.updateCampaign(campaignId, { status: newStatus });
      
      const updatedCampaigns = campaigns.map(campaign => {
        if (campaign.id === campaignId) {
          return { ...campaign, status: newStatus };
        }
        return campaign;
      });
      
      setCampaigns(updatedCampaigns);
      recalculateMetrics(updatedCampaigns);

      addNotification({
        type: "info",
        title: "Status Alterado",
        message: `Campanha ${campaign.name} foi ${newStatus.toLowerCase()}.`
      });
    } catch (error) {
      addNotification({
        type: "error",
        title: "Erro",
        message: "Falha ao alterar status da campanha."
      });
    }
  }, [campaigns, addNotification, recalculateMetrics]);

  // Deletar campanha
  const deleteCampaign = useCallback(async (campaignId) => {
    try {
      const campaign = campaigns.find(c => c.id === campaignId);
      
      await ApiService.deleteCampaign(campaignId);
      
      const updatedCampaigns = campaigns.filter(c => c.id !== campaignId);
      setCampaigns(updatedCampaigns);
      recalculateMetrics(updatedCampaigns);

      addNotification({
        type: "warning",
        title: "Campanha Removida",
        message: `${campaign.name} foi removida.`
      });
    } catch (error) {
      addNotification({
        type: "error",
        title: "Erro",
        message: "Falha ao remover campanha."
      });
    }
  }, [campaigns, addNotification, recalculateMetrics]);

  // Selecionar campanha para análise detalhada
  const selectCampaign = useCallback((campaignId) => {
    const campaign = campaigns.find(c => c.id === campaignId);
    setSelectedCampaign(campaign);
  }, [campaigns]);

  // Obter analytics de campanha específica
  const getCampaignAnalytics = useCallback(async (campaignId) => {
    try {
      const analytics = await ApiService.getCampaignAnalytics(campaignId);
      return analytics;
    } catch (error) {
      console.error('Erro ao carregar analytics:', error);
      return { daily: [] };
    }
  }, []);

  // Carregar dados iniciais
  useEffect(() => {
    loadDashboardData();
    
    // Atualizar automaticamente a cada 30 segundos
    const interval = setInterval(() => {
      setLastUpdate(new Date());
      
      // Simular pequenas mudanças nas métricas - CORREÇÃO AQUI
      setMetrics(prev => ({
        ...prev,
        engagement: parseFloat((parseFloat(prev.engagement) + (Math.random() - 0.5) * 0.1).toFixed(1)),
        roi: parseFloat((parseFloat(prev.roi) + (Math.random() - 0.5) * 2).toFixed(1))
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, [loadDashboardData]);

  const value = {
    // Estado
    isLoading,
    campaigns,
    analytics,
    metrics,
    notifications,
    lastUpdate,
    selectedCampaign,
    
    // Ações
    loadDashboardData,
    createCampaign,
    toggleCampaignStatus,
    deleteCampaign,
    selectCampaign,
    getCampaignAnalytics,
    addNotification,
    removeNotification,
    
    // Novas funções
    performAIAnalysis,
    generateReport,
    recalculateMetrics
  };

  return (
    <DashboardContext.Provider value={value}>
=======
  // Simula carregar dados
  const loadDashboardData = async () => {
    setIsLoading(true);
    try {
      // Simulação de API
      await new Promise((res) => setTimeout(res, 1000));

      // Campanhas fake
      const fakeCampaigns = [
        {
          id: 1,
          name: "Campanha Alpha",
          platform: "Instagram",
          daysAgo: 5,
          status: "Ativa",
          progress: 70,
          roi: "250%",
          reach: "12.345",
          engagement: "2.345",
          ctr: 4.5,
          conversions: 150,
          costPerClick: 0.35,
          spent: 5000,
          performance: [
            { date: "2025-10-10", value: 100 },
            { date: "2025-10-11", value: 150 },
            { date: "2025-10-12", value: 120 }
          ]
        },
        {
          id: 2,
          name: "Campanha Beta",
          platform: "Facebook",
          daysAgo: 3,
          status: "Pausada",
          progress: 40,
          roi: "180%",
          reach: "8.123",
          engagement: "1.234",
          ctr: 3.2,
          conversions: 80,
          costPerClick: 0.50,
          spent: 3000,
          performance: [
            { date: "2025-10-10", value: 80 },
            { date: "2025-10-11", value: 90 },
            { date: "2025-10-12", value: 100 }
          ]
        }
      ];

      setCampaigns(fakeCampaigns);
      setAnalytics({
        platformDistribution: [
          { platform: "Instagram", value: 60 },
          { platform: "Facebook", value: 40 }
        ],
        reachPrediction: { next7Days: 187000, confidence: 85 },
        roiOptimization: { currentROI: 250, optimizedROI: 355, improvement: 42 },
        sentimentAnalysis: [
          { sentiment: "Positive", value: 70 },
          { sentiment: "Neutral", value: 20 },
          { sentiment: "Negative", value: 10 }
        ]
      });

      setMetrics({
        totalCampaigns: fakeCampaigns.length,
        activeCampaigns: fakeCampaigns.filter(c => c.status === "Ativa").length,
        totalReach: 200000,
        roi: 250,
        campaignGrowth: 5,
        reachGrowth: 8,
        engagementGrowth: 10
      });

      setNotifications([
        { id: 1, type: "success", title: "Campanha criada!", message: "Sua campanha Alpha foi criada com sucesso." },
        { id: 2, type: "info", title: "Atualização de métricas", message: "As métricas foram atualizadas recentemente." }
      ]);

      setLastUpdate(new Date());
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleCampaignStatus = (id) => {
    setCampaigns(prev =>
      prev.map(c => c.id === id ? { ...c, status: c.status === "Ativa" ? "Pausada" : "Ativa" } : c)
    );
  };

  const deleteCampaign = (id) => {
    setCampaigns(prev => prev.filter(c => c.id !== id));
    setNotifications(prev => [...prev, { id: Date.now(), type: "error", title: "Campanha excluída", message: "Uma campanha foi removida." }]);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const selectCampaign = (id) => {
    const campaign = campaigns.find(c => c.id === id);
    setSelectedCampaign(campaign || null);
  };

  const getCampaignAnalytics = async (id) => {
    const campaign = campaigns.find(c => c.id === id);
    return campaign?.performance || [];
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  return (
    <DashboardContext.Provider value={{
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
      getCampaignAnalytics
    }}>
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
      {children}
    </DashboardContext.Provider>
  );
};

<<<<<<< HEAD
export default DashboardProvider;
=======
export const useDashboard = () => useContext(DashboardContext);
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
