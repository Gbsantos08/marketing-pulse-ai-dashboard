import psycopg2
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT
import os
from dotenv import load_dotenv

load_dotenv()

def create_database():
    # Configurações do banco (ajuste conforme necessário)
    host = "localhost"
    port = "5432"
    user = "postgres"
    password = "postgrespassword" # Default local password or set via env
    database_name = "marketing_db"
    
    try:
        # Conecta ao PostgreSQL (banco padrão)
        conn = psycopg2.connect(
            host=host,
            port=port,
            user=user,
            password=password,
            database="postgres"  # Conecta ao banco padrão primeiro
        )
        conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
        cursor = conn.cursor()
        
        # Verifica se o banco já existe
        cursor.execute(f"SELECT 1 FROM pg_database WHERE datname='{database_name}'")
        exists = cursor.fetchone()
        
        if not exists:
            cursor.execute(f"CREATE DATABASE {database_name}")
            print(f"✅ Banco de dados '{database_name}' criado com sucesso!")
        else:
            print(f"ℹ️  Banco de dados '{database_name}' já existe.")
        
        cursor.close()
        conn.close()
        
        # Atualiza o arquivo .env com a URL correta
        database_url = f"postgresql://{user}:{password}@{host}:{port}/{database_name}"
        
        # Lê o arquivo .env atual
        env_content = ""
        if os.path.exists(".env"):
            with open(".env", "r") as f:
                env_content = f.read()
        
        # Atualiza ou adiciona a DATABASE_URL
        lines = env_content.split("\n")
        updated = False
        for i, line in enumerate(lines):
            if line.startswith("DATABASE_URL="):
                lines[i] = f"DATABASE_URL={database_url}"
                updated = True
                break
        
        if not updated:
            lines.append(f"DATABASE_URL={database_url}")
        
        # Escreve o arquivo .env atualizado
        with open(".env", "w") as f:
            f.write("\n".join(lines))
        
        print(f"✅ Arquivo .env atualizado com a DATABASE_URL!")
        
    except Exception as e:
        print(f"❌ Erro ao criar banco de dados:")
        print(repr(e))

if __name__ == "__main__":
    create_database()