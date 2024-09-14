const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/clientes", (req, res) => {
  const cliente = [
    {
      num: 1,
      nome: "Carlos da Silva",
      cpf: "458.115.770-60",
      endereco: "Quadra QE 11 Área Especial C, nº435, Guará I. CEP: 71090-285. Brasília - Distrito Federal"
    },
    {
      num: 2,
      nome: "Joaquim Magno",
      cpf: "648.453.620-15",
      endereco: "Rua Cristiano Olsen, nº254, Jardim Sumaré. CEP: 16015-244. Araçatuba - São Paulo"
    },
    {
      num: 3,
      nome: "Charles Emmanuel",
      cpf: "571.147.050-77",
      endereco: "Rua da Imprensa, nº97, Monte Castelo. CEP: 79002-290. Campo Grande - Mato Grosso do Sul"
    },
    {
      num: 4,
      nome: "Guilherme Cabral",
      cpf: "155.050.150-00",
      endereco: "Rua Domingos Olímpio, nº42, Casa, Centro. CEP: 62011-140. Sobral - Ceará"
    }
  ];
  res.render("clientes", {
    cliente: cliente
})

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
