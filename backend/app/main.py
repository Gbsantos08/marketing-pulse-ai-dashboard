from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Marketing Pulse AI Dashboard API")

# Configuração CORS para permitir que o front-end se conecte
origins = [
    "http://localhost:3000",  # URL do seu front-end React
    # Adicione outras URLs de produção aqui
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "🚀 Marketing Pulse AI Dashboard API", "status": "running"}

@app.get("/health")
def health_check():
    return {"status": "healthy", "version": "1.0.0"}

# Import routes
from app.api.v1.endpoints import campaigns

app.include_router(campaigns.router, prefix="/api/v1")