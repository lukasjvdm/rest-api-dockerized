module.exports = {
    // pgUser: "postgres",
    // pgHost: "postgres",
    // pgDatabase: "postgres",
    // //pgPassword: "postgres",
    // pgPassword:"password",
    // pgPort: "5432",
  
    pgUser: process.env.PGUSER,
    pgHost: process.env.PGHOST,
    pgDatabase: process.env.PGDATABASE,
    pgPassword: process.env.PGPASSWORD,
    pgPort: process.env.PGPORT,
  };
  