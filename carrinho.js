// let mouse = document.getElementById("k9");
// let gabinete = document.getElementById("gabi");
// let monitor = document.getElementById("ad");
// let teclado = document.getElementById("ij");
// let PlacaDeVideo = document.getElementById("pv");
// let Ventoinha = document.getElementById("vt");
// let contamouse = 0;
// let contagabinete =0;
// let contamonitor = 0;
// let contateclado =0;
// let contaPlacaDeVideo =0;
// let contaVentoinha =0;
// let quantasmouse = 0;
// let quantasgabinete =0;
// let quantasmonitor = 0;
// let quantasteclado =0;
// let quantasPlacaDeVideo=0;
// let quantasVentoinha =0;

// //mouse + 
// mouse.onclick = function(){
//    contamouse = contamouse + 55.80;
//    b = contamouse.toFixed(2);
//    quantasmouse = quantasmouse + 1;
   
// }
// let removas1 = document.getElementById("Remover1");
// //gabinete +
// gabinete.onclick = function(){
//     contagabinete = contagabinete + 129.90;
//     z = contagabinete.toFixed(2);
//     quantasgabinete = quantasgabinete + 1;
// }
// ///gabinete -
// subt2.onclick = function(){
//     contagabinete = contagabinete - 129.90;
//     z = contagabinete.toFixed(2);
//     quantasgabinete = quantasgabinete - 1;
// }
// //monitor
// monitor.onclick = function(){
//     contamonitor = contamonitor + 859.90;
//     l = contamonitor.toFixed(2);
//     quantasmonitor = quantasmonitor + 1;
// }
// ///teclado
// teclado.onclick = function(){
//     contateclado = contateclado + 159.99;
//     n = contateclado.toFixed(2);
//     quantasteclado = quantasteclado + 1;
// }
// ///placa de ideo
// PlacaDeVideo.onclick = function(){
//     contaPlacaDeVideo = contaPlacaDeVideo + 55999; 
//     m = contaPlacaDeVideo.toFixed(2);
//     quantasPlacaDeVideo = quantasPlacaDeVideo + 1;
    
// }
// //
// //ventoinha
// Ventoinha.onclick = function(){
//     contaVentoinha = contaVentoinha + 99.90;
//     x = contaVentoinha.toFixed(2);
//     quantasVentoinha = quantasVentoinha + 1;
    
// }
// //
// //total

// function calcularTotal() {
//   let total = 0;
  
//     total += (inp1*55.80) ;
  
//   return total;
// }           


// aqui são os produtos e seus preços 
let produtos = ["Mouse Gamer", "Gabinete TGT G250", "Monitor BRX 23, 27 POL", "TECLADO GAMER", "PLACA DE VIDEO PNY GEFORCE RTX 6000", "Ventoinha XPG HUNRRICANE"];
let precos = [55.80, 129.90, 859.90, 159.99, 55.999, 99.90];
let quantidades = [0, 0, 0, 0, 0, 0];

function adicionarProduto(produto, quantidade) {
  let index = produtos.indexOf(produto);
  quantidades[index] += quantidade;
}

function reduzirProduto(produto, quantidade) {
  let index = produtos.indexOf(produto);
  if (quantidades[index] >= quantidade) {
    quantidades[index] -= quantidade;
  } else {
    quantidades[index] = 0;
  }
}

function calcularTotal() {
  let total = 0;
  for (let i = 0; i < produtos.length; i++) {
    total += precos[i] * quantidades[i];
  }
  return total;
}
