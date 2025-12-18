import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/v1';

export const getCampaigns = async () => {
  const response = await axios.get(`${API_BASE_URL}/campaigns/`);
  return response.data;
};

export const createCampaign = async (campaignData) => {
  const response = await axios.post(`${API_BASE_URL}/campaigns/`, campaignData);
  return response.data;
};

export const createComment = async (commentData) => {
  const response = await axios.post(`${API_BASE_URL}/comments/`, commentData);
  return response.data;
};

export const getSentimentAnalysis = async (campaignId) => {
  const response = await axios.get(`${API_BASE_URL}/campaigns/${campaignId}/sentiment_analysis/`);
  return response.data;
};

export const getPredictedEngagement = async (campaignId) => {
  const response = await axios.get(`${API_BASE_URL}/campaigns/${campaignId}/predict_engagement/`);
  return response.data;
};