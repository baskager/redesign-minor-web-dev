const fs = require("fs");
const credentialsPath = "../credentials.env";
let credentials = {};

if (fs.existsSync(credentialsPath)) {
  credentials = require("dotenv").config({
    path: credentialsPath
  }).parsed;
} else {
  credentials = {
    POSTGRES_USER: "minorwebdev",
    POSTGRES_PASSWORD: "faberyayo",
    POSTGRES_HOST: "127.0.0.1"
  };
}

module.exports = {
  port: 3000,
  postgres: {
    host: credentials.POSTGRES_HOST,
    port: 5432,
    database: "minorwebdev",
    user: credentials.POSTGRES_USER,
    password: credentials.POSTGRES_PASSWORD
  }
};
