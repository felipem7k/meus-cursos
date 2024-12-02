import modificador from "./modificador.js";

var ingredientes = ['mel', 'água', 'sal', 'mostarda'];

var resultadoCapitalizacao = modificador.capitalizar(ingredientes);
var resultadoOrdenacao = modificador.ordenar(resultadoCapitalizacao);

console.log(resultadoOrdenacao);
