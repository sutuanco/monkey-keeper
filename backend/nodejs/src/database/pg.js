const pg = require("pg")


async function connect_db() {

  const pool = new pg.Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DB,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
  })
  
  console.log(await pool.query('SELECT NOW()'))

  const client = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DB,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
  })
  
  await client.connect()
  
  console.log(await client.query('SELECT NOW()'))
  
  await client.end()

}


module.exports = { connect_db }
