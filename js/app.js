// console.log('holi')

let numeriCasuali = []   //qua è dove pusherò i numeri generati casualmente

console.log(numeriCasuali);

for (i = 0; i < 5; i++){    //ciclo per formare i 5 numeri
let nums = getRandomInt(100)
numeriCasuali.push(nums)
}


//funzione per generare random numeri
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

alert (numeriCasuali);  //numeri stampati nel dom alert