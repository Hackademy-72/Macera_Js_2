//Esercizio 1

 let giorno = prompt (`Inserisci il giorno`);

 switch(true){

     case giorno == 1:
         console.log(`Lunedì`);
         break;

     case giorno == 2:
         console.log(`Martedì`);
         break;

     case giorno == 3:
         console.log(`Mercoledì`);
         break;

     case giorno == 4:
         console.log(`Giovedì`);
         break;

     case giorno == 5:
         console.log(`Venerdì`);
         break;

     case giorno == 6:
         console.log(`Sabato`);
         break;

     case giorno == 7:
         console.log(`Domenica`);
         break;

     default:
         console.log(`Errore! Giorno della settimana non valido!`);
 }

 //Esercizio 2

let voto = prompt (`inserisci il voto`)
    
     if( voto < 18 ){
        console.log(`insufficiente`);
     } else {

        if(18 <=voto && voto <= 21){
         console.log(`sufficiente`);
        } else {

        if(21 <=voto && voto <= 24){
            console.log(`buono`);    
        } else {
            
        if(24 <=voto && voto <= 27){
            console.log(`distinto`);
        } else {

         if(27 <=voto && voto <= 29){
            console.log(`ottimo`);
         } else {

         if( voto == 30 ){
            console.log(`eccelente`);
       } 
      }  
     }
    }
   }
  }
     
//Esercizio 3

let min = 1
let max = 6


let N = prompt;

let player_1 = 1;
let player_2 = 0;

for(let i=1; i<N; i++){

    player_1 = player_1 + (math.floor(Math.random(i) * (max - min + 1)+min));
    player_2 = player_2 + (math.floor(Math.random(i) * (max - min + 1)+min));

}
    
console.log(player_1);

console.log(player_2);

if(player_1>player_2){
    console.log(`ha vinto player 1 che ha totalizzato ${player_1} punti`);
} else if(player_2>player_1){
    console.log(`ha vinto player 2 che ha totalizzato ${player_2} punti`);
}else{console.log(`pareggio`);
}


//Esercizio 4

for(i = 1; i<=10; i++){
    console.log(i*10);
    alert(i*10);
}

//Esercizio 5 

let valore = "";
for (let i = 1; i <= 100; i++){
valore = valore + i+ " ";
if (i % 10 == 0) {
valore = valore + "\n";
}
console.log(valore);
}