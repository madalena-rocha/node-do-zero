import 'dotenv/config'
// Abrir o arquivo .env, ler as variáveis ambiente e salvar numa variável global do node chamada process.env
import postgres from 'postgres'

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;
// De dentro do process.env, lê as variáveis ambiente e cria uma url de conexão para acessar o banco de dados

export const sql = postgres(URL, { ssl: 'require' });
