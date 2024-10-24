import pg from 'pg'
import './dotenv.js'

const config = {
    connectionString:"postgresql://postgres:jHKwjVSePUXUxBQdgkbwPYruWKrFsWWA@junction.proxy.rlwy.net:41818/railway"
}

export const pool = new pg.Pool(config)