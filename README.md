# integer-max-min-array
______________________________________

## PROBLEMA 

- dados los cinco enteros positivos, encuentre los valores minimo y maximo qu ese pueden
calcular sumando exactamente cuatro de los 5 enteros, luego imprima los valores minimos
y maximos respectivos y con una sola linea de dos enteros largos separados por espacios.

por ejemplo arr = [1,3,5,7,9] nuestra suma minima es 1+3+5+7 = 16 y nuestra suma maxima.

### Description de las variables

__Entrada de valores__
- Se crean dos tipos de variables uno el cual contiene el array y el segundo que contiene el valor inicial en 0 para generar una suma de cada uno de los enteros del array.

```javascript
let array = [1, 3, 5, 7, 9];
let sum = 0;
```

__Proceso de valores__
- Se crea un ciclo for para recorrer nuestro array y poder sumar cada uno de los valores asignados

```javascript
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);
```

#### Explicacion de la funcion calc

- En esta funcion generamos 3 parametros los cuales son:
1. para nuestro array 
2. para el primero valor(suma maxima)
3. para el segundo valor(suma minima)

aqui se implementa un ciclo forEach para que recorra cada uno de los elementos y nos pueda mostrar los valores especificos (suma maxima / suma minima) que se pueden crear en este array con ayuda del metodo slice.

```javascript
function calc(array, value1, value2){
  let result = 0;

  array.slice(value1, (value2 + 1)).forEach(element => {
      result += element;
  });

  return result;
}
```

__Salida de los datos__

- por ultimo la salida de los datos se genera un console.log para mostrar el valor maximo y el valor minimo.

```javascript
console.log(calc(array, 0, 3));
console.log(calc(array, 1,4));
```
![imagen]()