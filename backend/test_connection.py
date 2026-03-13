import psycopg2
from dotenv import load_dotenv
import os

load_dotenv()

try:
    # Conectar diretamente com parâmetros separados (evita problemas de encoding)
    conn = psycopg2.connect(
        host="localhost",
        database="marketing_db", 
        user="postgres",
        password="Gsantos102@",
        port="5432"
    )
    
    cursor = conn.cursor()
    
    # Testar consulta
    cursor.execute("SELECT version();")
    version = cursor.fetchone()
    print(f"✅ Conectado ao PostgreSQL!")
    print(f"📊 Versão: {version[0]}")
    
    # Verificar se a database existe
    cursor.execute("SELECT current_database();")
    db_name = cursor.fetchone()
    print(f"🗄️ Database atual: {db_name[0]}")
    
    cursor.close()
    conn.close()
    
except Exception as error:
    print(f"❌ Erro ao conectar: {error}")