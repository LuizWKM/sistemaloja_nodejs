// Importando o Express com ES6 Modules
import express from 'express'
//Iniciando o Express na variável app
const app = express();

// Importando os Controllers (onde estão as rotas)
import ClientesController from "./controllers/ClientesController.js"

// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));

// Definindo o uso das rotas dos Controllers
app.use("/", ClientesController)

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/pedidos", (req,res) => {
  const pedidos = [ 
    {
    nump: 1,
    valor: "388,80",
    },
    {
      nump: 2,
      valor: "3723,00",
    },
    {
      nump: 3,
      valor: "99,00",
    },
    {
      nump: 4,
      valor: "208,90",
    },  
  ]
  res.render("pedidos", 
  {
  pedidos: pedidos
  });
});

app.get("/produtos", (req, res) => {
  const produtos = [
    {
      img: "imgs/fob.png",
      nomep: "Headphone Fone de Ouvido Havit HV-H2002d",
      pre: "179,90",
      cat: "Fones para Jogos"
    },
    {
      img: "imgs/ps5b.png",
      nomep: "PlayStation®5 Slim Edição Digital com 2 Jogos",
      pre: "3732,00",
      cat: "Consoles"
    },
    {
      img: "imgs/mouseb.png",
      nomep: "Mouse Gamer Redragon Cobra",
      pre: "99,00",
      cat: "Mouses para Jogos"
    },
    {
      img: "imgs/ventiladorb.png",
      nomep: "Ventilador de Mesa MONDIAL 110V",
      pre: "109,90",
      cat: "Ventiladores de Mesa"
    },
  ]
  res.render("produtos", {
    produtos: produtos
  })
});

const port = 8080;

app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
