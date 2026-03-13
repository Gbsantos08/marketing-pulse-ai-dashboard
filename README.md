# Marketing Pulse AI Dashboard

## Overview / Visão Geral
Marketing Pulse AI Dashboard is an intelligent platform for digital marketing campaign analysis with integrated AI.
O Marketing Pulse AI Dashboard é uma plataforma inteligente para análise de campanhas de marketing digital com IA integrada.

## Security / Segurança
The application follows a "Bring Your Own Key" (BYOK) model for AI features. Your OpenAI API Key is stored only in your browser's LocalStorage and is never committed to GitHub or sent to any server other than OpenAI's official API.
A aplicação segue um modelo "Traga Sua Própria Chave" (BYOK) para recursos de IA. Sua chave de API da OpenAI é armazenada apenas no LocalStorage do seu navegador e nunca é enviada ao GitHub ou a qualquer servidor que não seja a API oficial da OpenAI.

## Project Structure / Estrutura do Projeto
- frontend/: React application with Chakra UI and Framer Motion. / Aplicação React com Chakra UI e Framer Motion.
- backend/: FastAPI server with SQLite database. / Servidor FastAPI com banco de dados SQLite.

## How to Run / Como Executar

### Backend
1. Navigate to the backend folder / Navegue até a pasta backend:
   ```bash
   cd backend
   ```
2. Install dependencies / Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the server / Execute o servidor:
   ```bash
   uvicorn app.main:app --reload
   ```

### Frontend
1. Navigate to the frontend folder / Navegue até a pasta frontend:
   ```bash
   cd frontend
   ```
2. Install dependencies / Instale as dependências:
   ```bash
   npm install
   ```
3. Run the application / Execute a aplicação:
   ```bash
   npm start
   ```

## Technologies / Tecnologias
- Frontend: React 18, Chakra UI, Framer Motion, Chart.js.
- Backend: FastAPI, SQLAlchemy, SQLite.
- AI: OpenAI API (GPT-3.5-Turbo).
