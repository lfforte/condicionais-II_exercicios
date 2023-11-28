const verificarDivisao = (num) => {

    if (num % 2 === 0){
        console.log(`Número divisivel por 2`);
    } else if (num % 3 ===0){
        console.log(`Número divisivel por 3`);
    }else {
        console.log(`Não é divisível por 2 ou 3!`);
    }

    if ((num % 2 === 0) || (num % 3 === 0)){
        num % 2 === 0 ? console.log(`Número divisivel por 2`) : console.log(`Número não divisivel por 2`);
        num % 3 === 0 ? console.log(`Número divisivel por 3`) : console.log(`Número não divisivel por 2`);
    }else{
        console.log(`Não é divisível por 2 ou 3!`);
    }
}


verificarDivisao(Number(prompt(`Digite um número`)));