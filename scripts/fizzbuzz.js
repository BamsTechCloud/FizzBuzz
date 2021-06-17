/*
for( let nombre = 1 ; nombre <= 100 ; nombre += 1) {
let sortie = "";
 if(nombre % 3 == 0) {
     sortie += "Fizz";
 }
 if(nombre % 5 == 0) {
     sortie += 'Buzz';
 }else {
     console.log(nombre);
 }
 console.log(sortie || nombre);
}
*/


for( let nombre = 1 ; nombre <= 100 ; nombre += 1) {
     if(nombre % 3 == 0) {
          console.log("Fizz");
     }
     if(nombre % 5 == 0) {
        console.log("Buzz");
     }else {
         console.log(nombre);
     }
     console.log("FizzBuzz" || nombre);
    }
    
