process.env.NODE_ENV = "development";
module.exports = {
  port: 3000,
  postgres: {
    host: "127.0.0.1",
    port: 5432,
    database: "minorwebdev",
    user: "minorwebdev",
    password: "faberyayo"
  }
};
