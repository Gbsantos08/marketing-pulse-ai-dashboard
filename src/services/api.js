class ApiService {
  constructor() {
    this.baseURL = 'http://localhost:8000/api/v1';
    this.isDemo = true;
  }

  async delay(ms = 800) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getMockData() {
    return {
      campaigns: [
        {
          id: 1,
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
            ]
          }
        },
        {
          id: 2,
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
            ]
          }
        },
        {
          id: 3,
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
            ]
          }
        }
      ],
      analytics: {
        overview: {
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
        }
      }
    };
  }

  async getDashboardData() {
    await this.delay();
    return this.getMockData();
  }

  async createCampaign(campaignData) {
    await this.delay(1000);
    
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
      performance: { daily: [] }
    };
    
    return newCampaign;
  }

  async updateCampaign(campaignId, updates) {
    await this.delay(500);
    return { id: campaignId, ...updates };
  }

  async deleteCampaign(campaignId) {
    await this.delay(300);
    return { success: true, id: campaignId };
  }

  async getCampaignAnalytics(campaignId) {
    await this.delay(400);
    const mockData = this.getMockData();
    const campaign = mockData.campaigns.find(c => c.id === campaignId);
    return campaign?.performance || { daily: [] };
  }
}

const apiService = new ApiService();
export default apiService;