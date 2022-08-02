// console.log('holi')


let numeriUtente = []
let numeriRandomArray = []
let isCorrect = []

let punti = []
for (let i=0; i < 5; i++ ){
    let nums = Math.floor(Math.random() * 100);
    
    if(!numeriRandomArray.includes(nums)){
        numeriRandomArray.push(nums)
    }else{
        i--
    }
}

alert(numeriRandomArray.join('  '))


setTimeout(() =>{
    for(i=0; i < numeriRandomArray.length; i++){
    let numero = parseInt(prompt('Inserisci un numero'))
        if(Number.isInteger(numero)){
            numeriUtente.push(numero)
        } else{
            console.log('inserire un numero');
            i--
        }
    }
    // console.log(numeriUtente)
    controllo()
},3000)

function controllo(){
    for(let i=0; i < numeriRandomArray.length; i++){
        if(numeriRandomArray.includes(numeriUtente[i])){
            punti++
            isCorrect.push(numeriUtente[i]);
        } 
    }
    console.log('il tuo punteggio è di ' + punti + ' punti')
    if(punti > 0){
        console.log('numeri indovinati: ' + isCorrect.join('  '))
    }else {
        console.log('zero numeri trovati, hai perso')
    }
}
