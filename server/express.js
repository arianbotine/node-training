const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.contentType("text/html");
  res.status(200).send("<h1>hello world</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "Arian Botine",
      email: "arian@botine.com",
    },
    {
      name: "Bruna Ramos",
      email: "bruna@ramos.com",
    },
  ];
  res.status(200).json(users);
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));
