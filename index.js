let array = [1, 3, 5, 7, 9];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);

function calc(array, value1, value2){
  let result = 0;

  array.slice(value1, (value2 + 1)).forEach(element => {
      result += element;
  });

  return result;
}

console.log(calc(array, 0, 3));
console.log(calc(array, 1,4));




// SEGUNDO EJERCICIO
 let numeros = [4, 3, 2, 1, 3];

 let minimo = numeros[0];

 for (var i = 0; i < numeros.length ; i++) {
     if (numeros[i] < minimo[3]) {
        minimo = numeros[i];
     }
 }
// console.log('Valor mínimo: ' + minimo);
