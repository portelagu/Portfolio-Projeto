var celular = document.getElementById("number")

celular.addEventListener("input", () => {

    //remover os caracteres nao numericos usando a expressao regular /\D/g e limitar a 11 digitos.
    var limparvalor = celular.value.replace(/\D/g, "").substring(0, 11);

    //dividir a string em um array de caracteres individuais.
    var numerosArray=limparvalor.split("");

    //criar variavel para receber o numero formatado
    var numeroFormatado = "";

    //acessa o IF quando a quantidade de números é maior do que zero
    if(numerosArray.length > 0) {
        //formatar o numero do telefone e concatenar o valor
    //slice - extrai uma parte do array
    //join - unir os elementos do array em uma única string
        numeroFormatado += `(${numerosArray.slice(0,2).join("")})`;
    }

    //acessa o IF quando a quantidade de números é maior do que dois
    if(numerosArray.length >2) {
        //formatar o numero do telefone e concatenar o valor
    //slice - extrai uma parte do array
    //join - unir os elementos do array em uma única string
        numeroFormatado += ` ${numerosArray.slice(2,7).join("")}`;
    }

    //acessa o IF quando a quantidade de números é maior do que sete
    if(numerosArray.length >7) {
        //formatar o numero do telefone e concatenar o valor
    //slice - extrai uma parte do array
    //join - unir os elementos do array em uma única string
        numeroFormatado += `-${numerosArray.slice(7,11).join("")}`;
    }

    //enviar para o campo o número formatado
    celular.value = numeroFormatado;
})