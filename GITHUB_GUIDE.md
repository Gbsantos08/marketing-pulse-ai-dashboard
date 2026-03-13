# GitHub Upload Guide / Guia de Upload para o GitHub

Follow these steps to upload your project to GitHub safely and professionally.
Siga estes passos para subir seu projeto para o GitHub de forma segura e profissional.

## 1. Create a Repository / Criar um Repositório
Go to GitHub and create a new repository called "marketing-pulse-ai-dashboard". Do not initialize it with a README or .gitignore (we already have those).
Vá ao GitHub e crie um novo repositório chamado "marketing-pulse-ai-dashboard". Não o inicialize com README ou .gitignore (nós já temos esses arquivos).

## 2. Prepare the Project / Preparar o Projeto
Open your terminal in the project root and run these commands:
Abra seu terminal na raiz do projeto e execute estes comandos:

```bash
# Initialize git (if not already done)
# Inicializar o git (se ainda não foi feito)
git init

# Add all files
# Adicionar todos os arquivos
git add .

# Create the first commit
# Criar o primeiro commit
git commit -m "Initial commit: Marketing Pulse AI Dashboard revamp"
```

## 3. Link and Push / Vincular e Enviar
Replace [YOUR_USERNAME] with your GitHub username:
Substitua [YOUR_USERNAM] pelo seu nome de usuário do GitHub:

```bash
# Link to your remote repository
# Vincular ao seu repositório remoto
git remote add origin https://github.com/[YOUR_USERNAME]/marketing-pulse-ai-dashboard.git

# Set the main branch
# Definir o branch principal
git branch -M main

# Push the code
# Enviar o código
git push -u origin main
```

## Security Note / Nota de Segurança
Your API keys and virtual environments are protected by the .gitignore file and will not be uploaded. Only your code, setup instructions, and bilingual documentation will be public.
Suas chaves de API e ambientes virtuais estão protegidos pelo arquivo .gitignore e não serão enviados. Apenas seu código, instruções de configuração e documentação bilingue ficarão públicos.
