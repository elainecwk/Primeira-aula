var qg = prompt("DIGITA A QTD DE GOLS");
var qc = prompt("DIGITA A QTD DE PASSES CERTOS");
var qe =prompt("DIGITA A QTD DE PASSES CERTOS");

var pontos = (qg * 50) + (qe * 10) + (qc * -5);

if (pontos < 50) {
    alert (PÉSSIMA PARTIDA);
} else if (pontos >=50 && pontos < 100) {
    alert ("PARTIDA RUIM");
} else if (pontos >= 100 && pontos < 150){
    alert("FEZ O BASICO");
}else if (pontos >= 150 && pontos< 200){
    alert ("JOGOU BEM");
}else {
    alert("JOGOU BEM DEMAIS");
}