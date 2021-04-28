// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:

  let matriz = array;

return matriz[0];

//probado
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:

  let matriz = array;

  return matriz[ matriz.length -1];

  //probado
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  let matriz = array;

  return matriz.length;

  //probado
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  let arrayB = [];
  for (var i=0; i<array.length ; i++){
    arrayB.push(Math.floor(array[i]) + 1)
  }

  return arrayB;

  //probado

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  let matriz= array;

    matriz.push( elemento);

  return matriz;

  //probado
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  let matriz = array;

  matriz.unshift(elemento);
  
  return matriz;

  //probado
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  let matriz = palabras;
  let frase = matriz.join(" ") ;

  
  return frase ;

  //probado... usamos la funcion .join(" ") para unir los strings separados por un espacio
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  let matriz = array;

  for(var i=0 ; i<matriz.length ; i++){

    if (matriz[i] === elemento){
      return true;
    }
  }

  return false;

  //probado
}


function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  let array = [];
  let suma =0;

  for (var i=0 ; i< numeros.length ; i++){
    array.push (Math.floor(numeros[i]));
  }

  for (var i=0; i< array.length ; i++){

    suma = suma + array[i] ;
  }

  return suma;

  //probado
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  let matriz = [];
  let suma =0;

  for (var i=0 ; i< resultadosTest.length ; i++){
    matriz.push (Math.floor(resultadosTest[i]));
  }

  for(var i=0; i < matriz.length; i++){
    suma = suma + matriz[i];
  }

  return (suma / matriz.length);

  //probado
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:


let array =[];
let mayor= - 9007199254740991;

for(var i=0; i< numeros.length; i++){

  array.push(Math.floor(numeros[i]));

}

for (var i=0; i <array.length ; i++){

  if(array[i] > mayor){
    mayor = array[i];
  }

}

return mayor;

//probado
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  let multiplicados= 1;

  if(arguments.length === 0){
    return 0;

  }else if(arguments.length === 1){
    return arguments[0];
  }

  for (var i=0 ; i<arguments.length; i++){
multiplicados = multiplicados * arguments[i];
  }

  return multiplicados;

  //probado
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí

  let matriz = [];
  let contador = 0;

  for (var i=0 ; i< arreglo.length; i++){
    matriz.push(arreglo[i]);
  }

for (var i=0;i< matriz.length; i++){
  if(matriz[i] > 19){
    contador++;
  }
}

return contador;

//probado
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
if(numeroDeDia === 1 || numeroDeDia === 7){
  return "Es fin de semana";
}else {
  return "Es dia Laboral";
}

//probado

} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  let numero = n.toString();

  if(numero[0] === "9") {
    return true;
  }

  return false;

  //probado
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
let iguales =1;

for (var i =0; i< arreglo.length -1 ; i++){

  if (arreglo[i] === arreglo[i +1]){
    iguales = iguales +1;
  }
}

if( iguales === arreglo.length){
  return true;
}else{
  return false;
}

//probado
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

let nuevoMeses = [];

for (var i=0; i< array.length; i++){
  if( array[i] ==="Enero" || array[i] ==="Marzo" || array[i] ==="Noviembre" ){
    nuevoMeses.push(array[i]);

  };
}

if(nuevoMeses.length === 3){
return nuevoMeses;
}else{
  return "No se encontraron los meses pedidos"
}

//probado
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  let nuevoArray = [];

  for (var i=0; i< array.length; i++){

    if(array[i] >100){
      nuevoArray.push(array[i]);
    }
  }

  return nuevoArray;

  //probado

}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:


  let nuevoArray = [];
  let nuevoNumero = numero ;

  for (var i=0; i< 10; i++){

    nuevoNumero =  nuevoNumero +2;

   

      if(nuevoNumero === i){
        break;
      }else{
        nuevoArray.push(nuevoNumero);
      }

      

  }

  if(nuevoNumero === i){
    return "Se interrumpió la ejecución";
  }else{
    return nuevoArray;
  }

  //probado   se usa el break con el (-2)
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
    let nuevoArray = [];
    let nuevoNumero = numero;
  
    for (var i=0; i< 10; i++){
  
     
  
        if(i === 4){
          continue;
        }else{
          nuevoNumero =  nuevoNumero +2;
          nuevoArray.push(nuevoNumero);
        }
  
    }
      return nuevoArray;
  
    //probado puse como condicion 4. ya que la i comienza en 0
  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
