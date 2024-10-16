import pg from 'pg'

const config = {
    connectionString:"postgresql://postgres:jHKwjVSePUXUxBQdgkbwPYruWKrFsWWA@junction.proxy.rlwy.net:41818/railway"
}
const pool = new pg.Pool(config)

export default pool
