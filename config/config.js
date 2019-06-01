module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "engage3db",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
