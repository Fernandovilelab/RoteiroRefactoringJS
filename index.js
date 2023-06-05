const { readFileSync } = require('fs'); 

var Repositorio = require("./repositorio.js");
var ServicoCalculoFatura = require("./servico.js") ;
var gerarFaturaStr = require("./apresentacao.js");

const calc = new ServicoCalculoFatura(new Repositorio());
const faturas = JSON.parse(readFileSync('./faturas.json'));
const faturaStr = gerarFaturaStr(faturas, calc);


//const faturaHtml = gerarFaturaHTML(faturas, pecas);

console.log(faturaStr);
//console.log(faturaHtml);
