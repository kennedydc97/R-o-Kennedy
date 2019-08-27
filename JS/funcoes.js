/*  ex 1 */
function media(){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    var n4 = document.getElementById("n4").value;
    var mEdia = (parseInt(n1) + parseInt(n2) + parseInt (n3) + parseInt(n4)) / 4;      
    if (mEdia > 7){
        alert("APROVADO!!! média: " + mEdia);
    }else{
        alert("R - E - P - R - O - V - A - D - O " + mEdia);
    }
}

/*  ex 2 */
function ex2(){
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    var mediA = Number((n1+n2)/2);
    if((mediA<3)){
        alert("REPROVADO com média " + mediA)
    }else if((mediA<=7)){
        alert("EXAME com média " + mediA)
    }else if((mediA<=10)){
        alert("APROVADO com média " + mediA)
    }
}

/*  ex 3 */
function Menor(){
    var n1 = document.getElementById("nota1").value;
    var n2 = document.getElementById("nota2").value;
    if (parseInt(n1) > parseInt(n2)){
        alert("Menor numero: " + parseInt(n2));
    } else if (parseInt(n2) > parseInt(n1)){
        alert("Menor numero: " + parseInt(n1));
    } else {
        alert("Os dois números são iguais");
    }
}
/*  ex 4 */
function maiorizi(){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;

    if (parseInt(n1) > parseInt(n2) & parseInt(n2) > parseInt(n3)){
        alert(n1 + " é o maior número");
    }
    else if(parseInt(n1) > parseInt(n3) & parseInt(n3) > parseInt(n2)){
        alert(n1 + " é o maior número");
}
    else if(parseInt(n2) > parseInt(n1) & parseInt(n1) > parseInt(n3)){
        alert(n2 + " é o maior número");
}
    else if(parseInt(n2) > parseInt(n3) & parseInt(n3) > parseInt(n1)){
    alert(n2 + " é o maior número");
}
    else if(parseInt(n3) > parseInt(n1) & parseInt(n1) > parseInt(n2)){
    alert(n3 + " é o maior número");
}
    else if(parseInt(n3) > parseInt(n2) & parseInt(n2) > parseInt(n1)){
    alert(n3 + " é o maior número");
}
    else if(parseInt(n1) > parseInt(n2) & parseInt(n2) == parseInt(n3)){
    alert(n1 + " é o maior número");
}
    else if(parseInt(n2) > parseInt(n1) & parseInt(n1) == parseInt(n3)){
    alert(n2 + " é o maior número");
} 
   else if(parseInt(n3) > parseInt(n2) & parseInt(n2) == parseInt(n1)){
    alert(n3 + " é o maior número");
}  
   else if(parseInt(n1) == parseInt(n3) & parseInt(n3) == parseInt(n2)){
    alert("TODOS OS NÚMEROS SÃO IGUAIS!!!");
}
   else if(parseInt(n2) == parseInt(n3) & parseInt(n3) > parseInt(n1)){
    alert(n2 + " é o maior número");
}
   else if(parseInt(n1) == parseInt(n2) & parseInt(n1) > parseInt(n3)){
    alert(n1 + " é o maior número");
}
   else if(parseInt(n1) == parseInt(n3) & parseInt(n1) > parseInt(n2)){
    alert(n1 + " é o maior número");
}
}

/*  ex 5 */

function ESCOLHA(){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var esc = document.getElementById("esc").value;
    switch (esc){
        case "1":
            alert("a média entre os números é: " + (((parseInt(n1) + parseInt(n2)) / 2) ));
            break;
        case "2":
            if (parseInt(n1)>parseInt(n2)){
                alert("a diferença do maior para o menor é: " + (parseInt(n1) - parseInt(n2)))
            }
            else if(parseInt(n2)>parseInt(n1)){
                alert("a diferença do maior para o menor é: " + (parseInt(n2) - parseInt(n1)))
            }
            else {
                alert("os números digitados são iguais!")
            }
            break;
        case "3":
            alert("o produtor dos números digitados é: " + parseInt(n1) * parseInt(n2))
            break;
        case "4":
            alert("a divisão do primeiro número pelo segundo é: " + parseInt(n1) / parseInt(n2))
            break;      
    }
}

/* ex6 */

function escolhA(){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var esc = document.getElementById("esc").value;
    switch (esc){
        case"1":
            alert("o resultado do primeiro número elevado ao segundo número é: " + (parseInt(n1) ** parseInt(n2)));
        break;
        case"2":
            alert("raiz quadrada do primeiro número é: " + Math.sqrt(parseInt(n1)));
            alert("raiz quadrada do segundo número é: " + Math.sqrt(parseInt(n2)));
        break;
        case"3":
            alert("a raiz cúbica dos números é (respectivamente): " + Math.cbrt(parseInt(n1)) + " e " + Math.cbrt(parseInt(n2)))
            break;
        default:
            alert("OPÇÃO INVÁLIDA!!!")
            break;
}
}

/* ex 7 */

function ex7(){
    var s1 = document.getElementById("s1").value;
    if(parseInt(s1) <= 500){
        alert("o valor do salário reajustado é: R$" + (parseInt(s1)*1.3).toFixed(2) + " (+30%)");
    }else{
        alert("você não tem direito ao reajuste de salário!")
    }
}

/* ex 8 */

function ex8(){
    var s1 = document.getElementById("s1").value;
    if(parseInt(s1) <= 300){
        alert("o valor do salário reajustado é: R$" + (parseInt(s1)*1.35).toFixed(3) + " (+35%)");
    }else{
        alert("o valor do salário reajustado é: R$" + (parseInt(s1)*1.15).toFixed(3) + " (+15%)");
    }
}

/* ex 9 */

function ex9(){
    var s1 = Number(document.getElementById("s1").value);
    if(s1 > 400){
        alert("o saldo médio é: R$" + s1 + '\n' +  
        "e o valor do crédito adicional é: " + (s1*1.3).toFixed(2))
    }else if(s1 <= 400){
        alert("o saldo médio é: R$" + s1 + '\n' + 
        "valor do crédito adicional: R$" + (s1*1.25).toFixed(2))
    }
    else if(s1 <= 300){
        alert("o saldo médio é: R$" + s1 + '\n' +
        "valor do crédito adicional: R$" + (s1*1.2).toFixed(2))
    }else{
        alert("o saldo médio é: R$" + s1 + '\n' +
        "valor do crédito adicional: R$" + (s1*1.1).toFixed(2))
    }
}

/* ex 10 */

function ex10(){
    var c1 = Number(document.getElementById("c1").value);
    if(c1<12000){
        alert("preço do carro: R$" + (c1+(c1*0.05)).toFixed(2))
    }else if(c1<=25000){
        alert("preço do carro: R$" + (c1+(c1*0.10)+(c1*0.15)).toFixed(2))
    }else if(c1>25000){
        alert("preço do carro: R$" + (c1+(c1*0.15)+(c1*0.20)).toFixed(2))
    }
}
