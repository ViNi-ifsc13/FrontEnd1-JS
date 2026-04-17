// Questões

// 1 -- Soma

function funcSoma(a){    
    let soma = 0;

    for (let i = 0; i < a.length; i++) {
        soma += a[i];        
    }
    return soma;
}

// 2 -- Média

function funcMedia(med){    
    
    let media = funcSoma(med) / med.length;

    return media;   

}

// 3 -- Menor Elemento

function funcMenor(menorE){
    let nanico = menorE[0];

    for (let i = 0; i < menorE.length; i++) {
        if (menorE[i] < nanico){
            nanico = menorE[i];
        }          
    }
    return nanico;
}

// 4 -- Medalha de Prata

function funcPrata(segundo){
    let maior = segundo[0];
    let segundao = 0;

    for (let i = 0; i < segundo.length; i++) {
        if(segundo[i] >= maior){
            segundao = maior;
            maior = segundo[i];
        }    
    }
    return segundao;
}

// 5 -- Filtro

function funcFiltro(imp) {

}

// 6 -- Inverso

// 7 -- Histograma

// 8 -- Verificador

// 9 -- Comparador

// 10 -- Removedor

// 11 -- Palíndromo

// 12 -- Intercalador

// 13 -- Compactador