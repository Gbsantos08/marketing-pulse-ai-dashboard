<<<<<<< HEAD
class ApiService {
  constructor() {
    this.baseURL = 'http://localhost:8000/api/v1';
    this.isDemo = true;
  }

  async delay(ms = 800) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

=======
// Simulação de API - substitua por chamadas reais ao backend
class ApiService {
  constructor() {
    this.baseURL = 'http://localhost:8000/api/v1';
    this.isOnline = false; // Simula se backend está online
  }

  // Simular delay de rede
  async delay(ms = 1000) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Dados mockados mais realistas
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
  getMockData() {
    return {
      campaigns: [
        {
          id: 1,
<<<<<<< HEAD
          name: "Campanha Black Friday 2024",
          platform: "Instagram",
          status: "Ativa",
          reach: "125.4K",
          engagement: "6.8%",
          roi: "385%",
          progress: 78,
          daysAgo: 5,
          budget: 25000,
          spent: 19500,
          clicks: 8540,
          conversions: 342,
          ctr: 5.2,
          impressions: 164200,
          costPerClick: 2.28,
          conversionRate: 4.01,
          createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
          performance: {
            daily: [
              { date: '2024-12-10', reach: 18200, engagement: 1238, conversions: 48 },
              { date: '2024-12-11', reach: 21500, engagement: 1462, conversions: 58 },
              { date: '2024-12-12', reach: 19800, engagement: 1346, conversions: 52 },
              { date: '2024-12-13', reach: 23100, engagement: 1571, conversions: 62 },
              { date: '2024-12-14', reach: 20900, engagement: 1421, conversions: 56 },
              { date: '2024-12-15', reach: 22000, engagement: 1496, conversions: 59 },
              { date: '2024-12-16', reach: 24500, engagement: 1666, conversions: 67 }
=======
          name: "Black Friday 2024",
          platform: "Instagram",
          status: "Ativa",
          reach: "45.2K",
          engagement: "5.2%",
          roi: "320%",
          progress: 75,
          daysAgo: 3,
          budget: 15000,
          spent: 11250,
          clicks: 2840,
          conversions: 148,
          ctr: 4.2,
          impressions: 67500,
          costPerClick: 3.96,
          conversionRate: 5.21,
          createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
          performance: {
            daily: [
              { date: '2024-12-01', reach: 8500, engagement: 442, conversions: 23 },
              { date: '2024-12-02', reach: 9200, engagement: 478, conversions: 28 },
              { date: '2024-12-03', reach: 10100, engagement: 525, conversions: 31 },
              { date: '2024-12-04', reach: 8900, engagement: 463, conversions: 25 },
              { date: '2024-12-05', reach: 9800, engagement: 509, conversions: 29 },
              { date: '2024-12-06', reach: 11200, engagement: 582, conversions: 35 },
              { date: '2024-12-07', reach: 12300, engagement: 639, conversions: 38 }
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
            ]
          }
        },
        {
          id: 2,
<<<<<<< HEAD
          name: "Lançamento Produto Inovador",
          platform: "Facebook",
          status: "Ativa",
          reach: "89.2K",
          engagement: "4.9%",
          roi: "278%",
          progress: 65,
          daysAgo: 12,
          budget: 18000,
          spent: 11700,
          clicks: 4380,
          conversions: 156,
          ctr: 3.8,
          impressions: 115300,
          costPerClick: 2.67,
          conversionRate: 3.56,
          createdAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000),
          performance: {
            daily: [
              { date: '2024-12-10', reach: 12800, engagement: 627, conversions: 22 },
              { date: '2024-12-11', reach: 13200, engagement: 647, conversions: 24 },
              { date: '2024-12-12', reach: 12100, engagement: 593, conversions: 21 },
              { date: '2024-12-13', reach: 14500, engagement: 711, conversions: 28 },
              { date: '2024-12-14', reach: 13800, engagement: 676, conversions: 26 },
              { date: '2024-12-15', reach: 11900, engagement: 583, conversions: 19 },
              { date: '2024-12-16', reach: 12900, engagement: 632, conversions: 23 }
=======
          name: "Lançamento Produto X",
          platform: "Facebook",
          status: "Pausada",
          reach: "32.1K",
          engagement: "3.8%",
          roi: "180%",
          progress: 45,
          daysAgo: 7,
          budget: 8000,
          spent: 3600,
          clicks: 1220,
          conversions: 62,
          ctr: 3.1,
          impressions: 39300,
          costPerClick: 2.95,
          conversionRate: 5.08,
          createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          performance: {
            daily: [
              { date: '2024-11-28', reach: 5200, engagement: 198, conversions: 8 },
              { date: '2024-11-29', reach: 4800, engagement: 182, conversions: 7 },
              { date: '2024-11-30', reach: 5500, engagement: 209, conversions: 9 },
              { date: '2024-12-01', reach: 4900, engagement: 186, conversions: 8 },
              { date: '2024-12-02', reach: 5100, engagement: 194, conversions: 9 },
              { date: '2024-12-03', reach: 3300, engagement: 125, conversions: 5 },
              { date: '2024-12-04', reach: 3300, engagement: 125, conversions: 5 }
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
            ]
          }
        },
        {
          id: 3,
<<<<<<< HEAD
          name: "Campanha Awareness Q4",
          platform: "Google Ads",
          status: "Pausada",
          reach: "67.8K",
          engagement: "3.2%",
          roi: "195%",
          progress: 45,
          daysAgo: 8,
          budget: 15000,
          spent: 6750,
          clicks: 2170,
          conversions: 87,
          ctr: 2.9,
          impressions: 74800,
          costPerClick: 3.11,
          conversionRate: 4.01,
          createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
          performance: {
            daily: [
              { date: '2024-12-08', reach: 9600, engagement: 307, conversions: 12 },
              { date: '2024-12-09', reach: 10200, engagement: 326, conversions: 14 },
              { date: '2024-12-10', reach: 9800, engagement: 314, conversions: 13 },
              { date: '2024-12-11', reach: 11100, engagement: 355, conversions: 16 },
              { date: '2024-12-12', reach: 8900, engagement: 285, conversions: 11 },
              { date: '2024-12-13', reach: 9200, engagement: 294, conversions: 12 },
              { date: '2024-12-14', reach: 9000, engagement: 288, conversions: 11 }
=======
          name: "Promoção Verão 2024",
          platform: "Google Ads",
          status: "Finalizada",
          reach: "28.5K",
          engagement: "4.1%",
          roi: "250%",
          progress: 100,
          daysAgo: 15,
          budget: 12000,
          spent: 12000,
          clicks: 1850,
          conversions: 95,
          ctr: 3.8,
          impressions: 48700,
          costPerClick: 6.49,
          conversionRate: 5.14,
          createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
          performance: {
            daily: [
              { date: '2024-11-20', reach: 4100, engagement: 168, conversions: 12 },
              { date: '2024-11-21', reach: 4300, engagement: 176, conversions: 13 },
              { date: '2024-11-22', reach: 4000, engagement: 164, conversions: 11 },
              { date: '2024-11-23', reach: 4200, engagement: 172, conversions: 12 },
              { date: '2024-11-24', reach: 3900, engagement: 160, conversions: 11 },
              { date: '2024-11-25', reach: 4000, engagement: 164, conversions: 12 },
              { date: '2024-11-26', reach: 4000, engagement: 164, conversions: 12 }
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
            ]
          }
        }
      ],
      analytics: {
        overview: {
<<<<<<< HEAD
          totalReach: 282400,
          totalEngagement: 5.1,
          totalROI: 286,
          totalConversions: 585,
          avgCTR: 4.0,
          totalSpent: 37950,
          totalBudget: 58000
        },
        platformDistribution: {
          Instagram: 44.4,
          Facebook: 31.6,
          'Google Ads': 24.0
        },
        sentimentAnalysis: {
          positive: 72,
          neutral: 18,
          negative: 10
        },
        reachPrediction: {
          next7Days: 245000,
          confidence: 87
        },
        roiOptimization: {
          currentROI: 286,
          optimizedROI: 398,
          improvement: 39
=======
          totalReach: 105800,
          totalEngagement: 4.37,
          totalROI: 250,
          totalConversions: 305,
          avgCTR: 3.77,
          totalSpent: 26850,
          totalBudget: 35000
        },
        platformDistribution: {
          Instagram: 42.7,
          Facebook: 30.3,
          'Google Ads': 27.0
        },
        sentimentAnalysis: {
          positive: 68,
          neutral: 20,
          negative: 12
        },
        reachPrediction: {
          next7Days: 187000,
          confidence: 85
        },
        roiOptimization: {
          currentROI: 250,
          optimizedROI: 355,
          improvement: 42
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
        }
      }
    };
  }

<<<<<<< HEAD
  async getDashboardData() {
    await this.delay();
    return this.getMockData();
  }

  async createCampaign(campaignData) {
    await this.delay(1000);
=======
  // Simular chamadas de API
  async getDashboardData() {
    await this.delay(800);
    
    if (!this.isOnline) {
      return this.getMockData();
    }
    
    try {
      return this.getMockData();
    } catch (error) {
      console.warn('Backend offline, usando dados mockados');
      return this.getMockData();
    }
  }

  async createCampaign(campaignData) {
    await this.delay(1200);
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
    
    const newCampaign = {
      id: Date.now(),
      ...campaignData,
      status: "Ativa",
      progress: 0,
      daysAgo: 0,
      reach: "0",
      engagement: "0%",
      roi: "0%",
      clicks: 0,
      conversions: 0,
      ctr: 0,
      impressions: 0,
      costPerClick: 0,
      conversionRate: 0,
      spent: 0,
      createdAt: new Date(),
<<<<<<< HEAD
      performance: { daily: [] }
=======
      performance: {
        daily: []
      }
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
    };
    
    return newCampaign;
  }

  async updateCampaign(campaignId, updates) {
<<<<<<< HEAD
    await this.delay(500);
=======
    await this.delay(600);
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
    return { id: campaignId, ...updates };
  }

  async deleteCampaign(campaignId) {
<<<<<<< HEAD
    await this.delay(300);
=======
    await this.delay(400);
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
    return { success: true, id: campaignId };
  }

  async getCampaignAnalytics(campaignId) {
<<<<<<< HEAD
    await this.delay(400);
=======
    await this.delay(500);
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
    const mockData = this.getMockData();
    const campaign = mockData.campaigns.find(c => c.id === campaignId);
    return campaign?.performance || { daily: [] };
  }
<<<<<<< HEAD
=======

  async getAIInsights() {
    await this.delay(1000);
    return [
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
  }
>>>>>>> 9d9de9e1518e4dca0e037fb6c0b9e247f2675d26
}

const apiService = new ApiService();
export default apiService;