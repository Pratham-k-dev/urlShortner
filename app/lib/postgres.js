import { Pool } from 'pg'

const client = new Pool({
  host: "some-postgres",
  port: 5432,
  user: "postgres",
  password: "mypwd",
  database: "postgres",
});

export default pool