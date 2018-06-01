const express = require('express');
const nunjucks = require("nunjucks");
const app = express();

app.set("view engine", "html")
app.use(express.static('./static'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

nunjucks.configure("templates", {
  autoescape: true,
  express: app
});