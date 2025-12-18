import React, { useState } from 'react';
import { useDashboard } from '../contexts/DashboardContext';

const CreateCampaignModal = ({ isOpen, onClose }) => {
  const { createCampaign } = useDashboard();
  const [formData, setFormData] = useState({
    name: '',
    platform: '',
    budget: '',
    description: '',
    targetAudience: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome da campanha é obrigatório';
    }
    
    if (!formData.platform) {
      newErrors.platform = 'Plataforma é obrigatória';
    }
    
    if (!formData.budget || formData.budget <= 0) {
      newErrors.budget = 'Orçamento deve ser maior que zero';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      await createCampaign({
        ...formData,
        budget: parseFloat(formData.budget)
      });
      
      setFormData({
        name: '',
        platform: '',
        budget: '',
        description: '',
        targetAudience: ''
      });
      
      onClose();
    } catch (error) {
      console.error('Erro ao criar campanha:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const modalStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '16px'
    },
    modal: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      maxWidth: '500px',
      width: '100%',
      maxHeight: '90vh',
      overflow: 'auto'
    },
    header: {
      background: 'linear-gradient(135deg, #3182ce 0%, #2c5aa0 100%)',
      color: 'white',
      padding: '24px',
      borderTopLeftRadius: '12px',
      borderTopRightRadius: '12px'
    },
    headerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      margin: 0
    },
    subtitle: {
      fontSize: '14px',
      opacity: 0.9,
      margin: '4px 0 0 0'
    },
    closeButton: {
      background: 'rgba(255, 255, 255, 0.2)',
      border: 'none',
      borderRadius: '50%',
      width: '32px',
      height: '32px',
      color: 'white',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px'
    },
    body: {
      padding: '32px'
    },
    formGroup: {
      marginBottom: '24px'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '8px'
    },
    required: {
      color: '#ef4444'
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      border: '2px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '16px',
      transition: 'border-color 0.2s',
      outline: 'none'
    },
    inputError: {
      borderColor: '#ef4444'
    },
    inputFocus: {
      borderColor: '#3182ce'
    },
    select: {
      width: '100%',
      padding: '12px 16px',
      border: '2px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '16px',
      backgroundColor: 'white',
      cursor: 'pointer',
      outline: 'none'
    },
    textarea: {
      width: '100%',
      padding: '12px 16px',
      border: '2px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '16px',
      minHeight: '100px',
      resize: 'vertical',
      fontFamily: 'inherit',
      outline: 'none'
    },
    error: {
      color: '#ef4444',
      fontSize: '14px',
      marginTop: '4px'
    },
    hint: {
      color: '#6b7280',
      fontSize: '12px',
      marginTop: '4px'
    },
    estimateBox: {
      backgroundColor: '#eff6ff',
      border: '1px solid #bfdbfe',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '24px'
    },
    estimateTitle: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#1e40af',
      marginBottom: '12px'
    },
    estimateRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '4px'
    },
    estimateLabel: {
      fontSize: '12px',
      color: '#1e40af'
    },
    estimateValue: {
      fontSize: '12px',
      fontWeight: '500',
      color: '#1e40af'
    },
    buttonGroup: {
      display: 'flex',
      gap: '16px',
      marginTop: '32px'
    },
    button: {
      flex: 1,
      padding: '12px 24px',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s',
      border: 'none'
    },
    cancelButton: {
      backgroundColor: 'white',
      color: '#374151',
      border: '2px solid #d1d5db'
    },
    submitButton: {
      backgroundColor: '#3182ce',
      color: 'white'
    },
    submitButtonDisabled: {
      backgroundColor: '#9ca3af',
      cursor: 'not-allowed'
    }
  };

  return (
    <div style={modalStyles.overlay} onClick={onClose}>
      <div style={modalStyles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={modalStyles.header}>
          <div style={modalStyles.headerContent}>
            <div>
              <h2 style={modalStyles.title}>🚀 Nova Campanha</h2>
              <p style={modalStyles.subtitle}>Crie uma campanha inteligente com IA</p>
            </div>
            <button style={modalStyles.closeButton} onClick={onClose}>
              ×
            </button>
          </div>
        </div>
        
        {/* Body */}
        <div style={modalStyles.body}>
          {/* Nome da Campanha */}
          <div style={modalStyles.formGroup}>
            <label style={modalStyles.label}>
              Nome da Campanha <span style={modalStyles.required}>*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Ex: Campanha Black Friday 2024"
              style={{
                ...modalStyles.input,
                ...(errors.name ? modalStyles.inputError : {})
              }}
            />
            {errors.name && <div style={modalStyles.error}>{errors.name}</div>}
          </div>

          {/* Plataforma */}
          <div style={modalStyles.formGroup}>
            <label style={modalStyles.label}>
              Plataforma <span style={modalStyles.required}>*</span>
            </label>
            <select
              value={formData.platform}
              onChange={(e) => handleInputChange('platform', e.target.value)}
              style={{
                ...modalStyles.select,
                ...(errors.platform ? modalStyles.inputError : {})
              }}
            >
              <option value="">Selecione a plataforma</option>
              <option value="Facebook">📘 Facebook</option>
              <option value="Instagram">📷 Instagram</option>
              <option value="Google Ads">🔍 Google Ads</option>
              <option value="LinkedIn">💼 LinkedIn</option>
              <option value="TikTok">🎵 TikTok</option>
              <option value="YouTube">📺 YouTube</option>
              <option value="Twitter">🐦 Twitter</option>
            </select>
            {errors.platform && <div style={modalStyles.error}>{errors.platform}</div>}
          </div>

          {/* Orçamento */}
          <div style={modalStyles.formGroup}>
            <label style={modalStyles.label}>
              Orçamento (R$) <span style={modalStyles.required}>*</span>
            </label>
            <input
              type="number"
              value={formData.budget}
              onChange={(e) => handleInputChange('budget', e.target.value)}
              placeholder="5000"
              style={{
                ...modalStyles.input,
                ...(errors.budget ? modalStyles.inputError : {})
              }}
            />
            {errors.budget && <div style={modalStyles.error}>{errors.budget}</div>}
            <div style={modalStyles.hint}>
              💡 Sugestão: Orçamentos entre R$ 1.000 - R$ 50.000 têm melhor performance
            </div>
          </div>

          {/* Público-Alvo */}
          <div style={modalStyles.formGroup}>
            <label style={modalStyles.label}>Público-Alvo</label>
            <input
              type="text"
              value={formData.targetAudience}
              onChange={(e) => handleInputChange('targetAudience', e.target.value)}
              placeholder="Ex: Mulheres 25-40 anos interessadas em moda"
              style={modalStyles.input}
            />
            <div style={modalStyles.hint}>
              🎯 Defina idade, gênero, interesses e localização
            </div>
          </div>

          {/* Descrição */}
          <div style={modalStyles.formGroup}>
            <label style={modalStyles.label}>Descrição</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Descreva os objetivos da campanha, produtos/serviços, mensagem principal..."
              style={modalStyles.textarea}
            />
            <div style={modalStyles.hint}>
              📝 Seja específico sobre objetivos e estratégia
            </div>
          </div>

          {/* Preview de Estimativas */}
          {formData.budget && formData.platform && (
            <div style={modalStyles.estimateBox}>
              <div style={modalStyles.estimateTitle}>📊 Estimativas da IA</div>
              <div style={modalStyles.estimateRow}>
                <span style={modalStyles.estimateLabel}>Alcance estimado:</span>
                <span style={modalStyles.estimateValue}>
                  {(formData.budget * 15).toLocaleString()} pessoas
                </span>
              </div>
              <div style={modalStyles.estimateRow}>
                <span style={modalStyles.estimateLabel}>Cliques esperados:</span>
                <span style={modalStyles.estimateValue}>
                  {Math.round(formData.budget * 0.8)} cliques
                </span>
              </div>
              <div style={modalStyles.estimateRow}>
                <span style={modalStyles.estimateLabel}>ROI projetado:</span>
                <span style={{...modalStyles.estimateValue, color: '#059669'}}>
                  +{Math.round(150 + Math.random() * 100)}%
                </span>
              </div>
            </div>
          )}

          {/* Botões */}
          <div style={modalStyles.buttonGroup}>
            <button 
              style={{...modalStyles.button, ...modalStyles.cancelButton}}
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              style={{
                ...modalStyles.button,
                ...modalStyles.submitButton,
                ...(isSubmitting ? modalStyles.submitButtonDisabled : {})
              }}
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Criando...' : '+ Criar Campanha'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaignModal;