const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/wanel");

const Pedido = mongoose.model("Pedido", {
  gas: Number,
  agua: Number,
  endereco: String,
  data: { type: Date, default: Date.now }
});

/* RECEBER PEDIDO */
app.post("/pedido", async (req, res) => {
  const pedido = new Pedido(req.body);
  await pedido.save();
  res.send({ ok: true });
});

/* LISTAR PEDIDOS */
app.get("/pedidos", async (req, res) => {
  const pedidos = await Pedido.find().sort({ data: -1 });
  res.send(pedidos);
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

let pedido = {gas:0, agua:0};

function trocar(secao){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.getElementById(secao).classList.add('active');

  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  event.target.classList.add('active');
}

function alterar(item, valor){
  pedido[item]+=valor;
  if(pedido[item]<0) pedido[item]=0;

  document.getElementById(item).innerText=pedido[item];
  atualizarResumo();
}

function atualizarResumo(){
  let texto="";
  if(pedido.gas>0) texto+=`🔥 ${pedido.gas} gás `;
  if(pedido.agua>0) texto+=`💧 ${pedido.agua} água`;

  if(texto==="") texto="Nenhum item selecionado";

  document.getElementById("resumo-texto").innerText=texto;
}

/* ENVIAR PEDIDO COMPLETO */
async function enviarPedido(){
  if(pedido.gas===0 && pedido.agua===0){
    alert("Adicione um item");
    return;
  }

  let endereco = prompt("Digite seu endereço:");

  /* SALVA NO BACKEND */
  await fetch("http://localhost:3000/pedido", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      gas: pedido.gas,
      agua: pedido.agua,
      endereco
    })
  });

  /* ENVIA PRO WHATSAPP */
  let numero="5515996649502";
  let msg="Pedido:%0A";

  if(pedido.gas>0) msg+=`🔥 Gás: ${pedido.gas}%0A`;
  if(pedido.agua>0) msg+=`💧 Água: ${pedido.agua}%0A`;

  msg+=`%0AEndereço: ${endereco}`;

  window.open(`https://wa.me/${numero}?text=${msg}`,'_blank');
}