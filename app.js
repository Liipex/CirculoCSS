const chalk = require("chalk");
const prompt = require('prompt-sync')();

var circuloPropriedadesCSS = [];
var inputPropriedade = "";
var isRunning = true;

console.log("Bem vindo a circulo de propriedades, aplique quantas vezes você quiser e digitar SAIR para exibir a lista de propriedades passadas de forma ordenada.")
while(inputPropriedade !== "SAIR"){
    inputPropriedade = prompt('Insira o nome da propriedade CSS ou digite SAIR: ');
        if(isRunning === true) {
            listaPropriedadesCSS.push(inputPropriedade);
        }
}
listaPropriedadesCSS.pop();
listaPropriedadesCSS.sort();
for(var i = 0; i < listaPropriedadesCSS.length; i++){
    console.log(chalk.blue(listaPropriedadesCSS[i]));
}