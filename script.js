var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("show-menu");
});

const vlrPag = 100;
const pctJS = 1.1;
const vlrLay = 500;
const pctSem = 10;

document.querySelector("#qtde").addEventListener("change", atualizaPreco);
document.querySelector("#js").addEventListener("change", atualizaPreco);
document.querySelector("#group-layout").addEventListener("change", atualizaPreco);
document.querySelector("#prazo").addEventListener("change", () => {
  let prazo = document.querySelector("#prazo").value;
  document.querySelector('label[for=prazo]').innerHTML = `Prazo: ${prazo} semana(s)`;
  atualizaPreco();
});

function atualizaPreco() {
  const qtde = document.querySelector("#qtde").value;
  const temJS = document.querySelector("#js").checked;
  const laySim = document.querySelector("#layout-sim").checked;
  const prazo = document.querySelector("#prazo").value;

  let preco = qtde * vlrPag;
  if (temJS) preco *= pctJS;
  if (laySim) preco += vlrLay;

  // preco += preco * ((prazo * pctSem)/100);
  let taxaUrgencia = 1 - prazo * 0.1;
  preco *= 1 + taxaUrgencia;

  document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`;
}
