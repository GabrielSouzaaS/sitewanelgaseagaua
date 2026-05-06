<!doctype html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Wanel Gás & Água</title>

<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet">

<style>
*{margin:0;padding:0;box-sizing:border-box}

body{
  font-family:'Montserrat',sans-serif;
  background:#0B1F14;
  color:#fff;
}

/* NAV */
nav{
  display:flex;
  justify-content:space-between;
  padding:20px 30px;
}
.logo{font-weight:800;font-size:22px;}
nav a{color:#aaa;margin-left:20px;text-decoration:none}

/* HERO */
.hero{
  padding:90px 30px;
}
.hero h1{
  font-size:55px;
  line-height:1.1;
}
.hero span{color:#2EFF88}
.hero p{color:#aaa;margin:20px 0;max-width:500px}

.btn{
  background:#2EFF88;
  color:#000;
  padding:15px 25px;
  border-radius:30px;
  text-decoration:none;
  font-weight:700;
}

/* PROVA */
.proof{
  text-align:center;
  padding:15px;
  background:#132E20;
  color:#2EFF88;
}

/* SEÇÃO CLARA */
.light{
  background:#fff;
  color:#000;
  padding:60px 30px;
  text-align:center;
}
.light h2{margin-bottom:15px}

/* PEDIDOS */
.orders{
  padding:40px 30px;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:20px;
}
.order{
  background:#132E20;
  padding:25px;
  border-radius:15px;
  transition:.2s;
}
.order:hover{transform:translateY(-5px)}
.highlight{border:2px solid #2EFF88}
.order button{
  margin-top:15px;
  padding:12px;
  border:none;
  border-radius:30px;
  background:#2EFF88;
  font-weight:700;
  cursor:pointer;
}

/* STEPS */
.steps{
  padding:40px 30px;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:20px;
}
.step{
  background:#132E20;
  padding:20px;
  border-radius:10px;
  text-align:center;
}

/* DIFERENCIAIS */
.features{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:15px;
  padding:30px;
}
.feature{
  background:#132E20;
  padding:15px;
  text-align:center;
  border-radius:10px;
}

/* SOBRE LADO A LADO */
.about{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:40px;
  padding:60px 30px;
}
.about-text{
  color:#aaa;
  line-height:1.7;
}
.about-box{
  background:#132E20;
  padding:30px;
  border-radius:15px;
}

/* AVALIAÇÕES */
.reviews{
  padding:40px 30px;
}
.review{
  background:#132E20;
  padding:20px;
  border-radius:12px;
  margin-bottom:15px;
  border-left:4px solid #2EFF88;
}
.review small{color:#aaa}

/* ÁREA */
.area{
  padding:40px 30px;
}
.area span{
  display:inline-block;
  background:#132E20;
  padding:10px 15px;
  border-radius:20px;
  margin:5px;
}

/* CONTATO */
.contact{
  padding:40px 30px;
}

/* FOOTER */
footer{
  text-align:center;
  padding:20px;
  color:#aaa;
}

/* WHATS */
.whats{
  position:fixed;
  bottom:20px;
  right:20px;
  background:#2EFF88;
  color:#000;
  padding:15px 20px;
  border-radius:40px;
  text-decoration:none;
  font-weight:bold;
}

/* RESPONSIVO */
@media(max-width:900px){
  .features{grid-template-columns:repeat(2,1fr)}
  .about{grid-template-columns:1fr}
}
</style>
</head>

<body>

<nav>
  <div class="logo">WANEL GÁS & ÁGUA</div>
  <div>
    <a href="#pedir">Pedidos</a>
    <a href="#sobre">Sobre</a>
    <a href="#contato">Contato</a>
  </div>
</nav>

<div class="proof">
  ⭐ Mais de 500 clientes atendidos • Entregas todos os dias
</div>

<section class="hero">
  <h1>GÁS & ÁGUA EM<br><span>ATÉ 30 MINUTOS</span></h1>
  <p>Peça agora e receba com rapidez, segurança e confiança em Sorocaba.</p>
  <a href="#pedir" class="btn">🔥 Pedir agora</a>
</section>

<!-- SEÇÃO CLARA -->
<section class="light">
  <h2>Por que escolher a gente?</h2>
  <p>Entrega rápida, atendimento profissional e confiança de clientes da região.</p>
</section>

<!-- PEDIDOS -->
<section id="pedir" class="orders">

  <div class="order highlight">
    🔥 Gás P13 (Mais vendido)
    <button onclick="pedir('gás P13')">🔥 Pedir agora</button>
  </div>

  <div class="order">
    🔥 Gás P45
    <button onclick="pedir('gás P45')">Pedir</button>
  </div>

  <div class="order">
    💧 Água 20L
    <button onclick="pedir('água 20L')">Pedir</button>
  </div>

</section>

<!-- COMO FUNCIONA -->
<section class="steps">
  <div class="step">1️⃣ Escolha o produto</div>
  <div class="step">2️⃣ Envie no WhatsApp</div>
  <div class="step">3️⃣ Receba em casa</div>
</section>

<!-- DIFERENCIAIS -->
<section class="features">
  <div class="feature">⚡ Entrega rápida</div>
  <div class="feature">📅 Todos os dias</div>
  <div class="feature">💳 Pagamento fácil</div>
  <div class="feature">🏠 Casa e comércio</div>
</section>

<!-- SOBRE -->
<section id="sobre" class="about">

  <div class="about-box">
    <h2>Sobre a empresa</h2>
    <p class="about-text">
      A Wanel Gás & Água atua em Sorocaba com foco em rapidez, segurança e compromisso.
      Nosso objetivo é garantir que cada cliente receba seu pedido com agilidade e confiança.
    </p>
  </div>

  <div class="about-box">
    <h2>Missão</h2>
    <p class="about-text">
      Levar praticidade para o dia a dia dos nossos clientes, oferecendo produtos de qualidade
      com atendimento rápido e profissional.
    </p>
  </div>

</section>

<!-- AVALIAÇÕES -->
<section class="reviews">

  <div class="review">
    <strong>Lucas Andrade ⭐⭐⭐⭐⭐</strong><br>
    <small>Zona Oeste • Cliente verificado</small><br><br>
    Entrega extremamente rápida, atendimento profissional.
  </div>

  <div class="review">
    <strong>Mariana Costa ⭐⭐⭐⭐⭐</strong><br>
    <small>Wanel Ville • Cliente verificado</small><br><br>
    Muito educados e rápidos, recomendo.
  </div>

  <div class="review">
    <strong>Bruno Oliveira ⭐⭐⭐⭐⭐</strong><br>
    <small>Central Parque • Cliente verificado</small><br><br>
    Sempre compro com eles, confiança total.
  </div>

</section>

<!-- ÁREA -->
<section class="area">
  <h2>Área de atendimento</h2>
  <span>Sorocaba</span>
  <span>Votorantim</span>
  <span>Zona Oeste</span>
  <span>Região</span>
</section>

<!-- CONTATO -->
<section id="contato" class="contact">
  <h2>Contato</h2>
  <p>📞 (15) 99178-5563</p>
  <p>⏰ Atendimento: 07h às 22h</p>

  <p>📍 Endereço:</p>
  <p><strong>Rua Ramzia El Hadi, 733</strong></p>
  <p>Sorocaba - SP</p>

  <a href="https://www.google.com/maps/search/?api=1&query=Rua+Ramzia+El+Hadi+733+Sorocaba"
     target="_blank"
     style="display:inline-block;margin-top:15px;color:#2EFF88;">
     Ver no mapa →
  </a>
</section>

<footer>
  Wanel Gás & Água © 2026
</footer>

<a class="whats" href="https://wa.me/5515991785563">
  WhatsApp
</a>

<script>
function pedir(produto){
  const msg = `Olá! Quero pedir ${produto}. Meu endereço é:`;
  window.open(`https://wa.me/5515991785563?text=${encodeURIComponent(msg)}`);
}
</script>

</body>
</html>
