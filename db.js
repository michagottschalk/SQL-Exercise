const { Pool } = require("pg");

const { PGUSER, PGHOST, PGDATABASE, PGPASSWORD, PGPORT, PGCONNECTIONSTRING } =
  process.env;

const pool = new Pool({
  PGCONNECTIONSTRING,
});

module.exports = pool;
