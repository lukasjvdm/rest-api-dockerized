const keys = require("./keys");

const { Pool } = require("pg");
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort,
});

pgClient.on("connect", (client) => {
    client
        .query("CREATE TABLE IF NOT EXISTS user_numbers (user_id serial PRIMARY KEY, username VARCHAR ( 50 ) UNIQUE NOT NULL, user_number INT NOT NULL)")
        .catch((err) => console.error(err));
});

module.exports = pgClient;