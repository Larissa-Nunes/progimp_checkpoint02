function comparar (tempoPadrao, tempo) {
    if (tempo < tempoPadrao) {
        console.log("Tempo insuficiente")
    }
    else if (tempo >= 2 * tempoPadrao && tempo< 3 * tempoPadrao) {
        console.log("A comida queimou")
    }
    else if (tempo > 3 * tempoPadrao) {
        console.log("Kabumm")
    }
    else {
        console.log("Prato pronto, bom apetite!!!")
    }
}

function menu (prato, tempo) { 

    let tempoPadrao = 0;
    
    switch (prato){

        case 'Pipoca':
            tempoPadrao = 10;
            comparar(tempoPadrao, tempo)
            break;
    
        case 'Macarrao':
            tempoPadrao = 8;
            comparar(tempoPadrao, tempo)
            break;

        case 'Carne':
            tempoPadrao = 15;
            comparar(tempoPadrao, tempo)
            break;

        case 'Feijao':
            tempoPadrao = 12;
            comparar(tempoPadrao, tempo)
            break;
        
        case 'Brigadeiro':
            tempoPadrao = 8;
            comparar(tempoPadrao, tempo)
            break;

        default:
            console.log("Prato inexistente")
    }
}
    
console.log('Pipoca')
menu('Pipoca', 5)
menu('Pipoca', 10)
menu('Pipoca', 20)
menu('Pipoca', 31)

// menu('Macarrao', 8);
// menu('Macarrao', 16);
// menu('Macarrao', 24);

// menu('Carne', 15);
// menu('Carne', 30);
// menu('Carne', 45);

// menu('Feijao', 12);
// menu('Feijao', 24);
// menu('Feijao', 36);

// menu('Brigadeiro', 8);
// menu('Brigadeiro', 16);
// menu('Brigadeiro', 24);
