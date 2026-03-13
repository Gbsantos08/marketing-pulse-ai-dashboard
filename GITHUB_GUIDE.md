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

## Handling "Rejected" Error / Resolvendo Erro de "Rejected"
If you get an error saying "updates were rejected because the remote contains work that you do not have locally", it means GitHub created a file (like a README) that is not on your computer.
Se você receber um erro dizendo "updates were rejected because the remote contains work that you do not have locally", significa que o GitHub criou um arquivo (como um README) que não está no seu computador.

Run these commands to fix it:
Execute estes comandos para corrigir:

```bash
# Pull remote changes and allow merging unrelated histories
# Puxar mudanças remotas e permitir mesclar históricos diferentes
git pull origin main --allow-unrelated-histories

# Now push again
# Agora envie novamente
git push -u origin main
```

Alternatively (if you don't care about what is on GitHub already):
Alternativamente (se você não se importa com o que já está no GitHub):
```bash
git push -u origin main --force
```
Your API keys and virtual environments are protected by the .gitignore file and will not be uploaded. Only your code, setup instructions, and bilingual documentation will be public.
Suas chaves de API e ambientes virtuais estão protegidos pelo arquivo .gitignore e não serão enviados. Apenas seu código, instruções de configuração e documentação bilingue ficarão públicos.
