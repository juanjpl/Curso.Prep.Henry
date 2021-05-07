// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  

  var pares = [];

  //un bucle para iterar objetos

  for(var i in objeto){
    pares.push(i,objeto[i])
  }

  return pares;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var contador ={};

  for(var i=0;i< string.length; i++){
    //si existe el contador de x...lo suma ... sino .. lo crea 
    if(contador[string[i]]){
      contador[string[i]]+=1
    }else{
      contador[string[i]] =1
    }
  }

  //var min = "", may="";
  //for (let i =0; i < string.length; i++){
  //  const letra = string[i];
  //  if(letra === letra.toUpperCase()) may += letra 
  //  else min += letra

  //}
  //return max +min;


}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  //
  var minusculas ="";
  var mayusculas = "";

  for(var i=0; i< s.length; i++){

    if(s[i].toUpperCase()===s[i]){
      mayusculas += [i];
    }else{
      minusculas += [i];
    }
  }


}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var alReves = "";

  for(var i=str.length-1 ; i>=0 ; i--){
    alReves += str[i];
  }

  return alReves.slip(" ").reverse().join(" ");

  //console.log(alReves.split(" ").reverse).join(" ")
  
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var numero_a_string = numero.toString();

  var alReves="";

  for(var i = numero_a_string.length-1; i>= 0; i--){
    alReves += numero_a_string[i];
  }

  if(alReves === numero_a_string)
  return "Es capicua"
  else return "No es capicua"
  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var filtros="";

  for(var i=0; i < cadena.length; i+=1){
    if(cadena[i]!=="a" && cadena[i]!=="b" && cadena[i]!=="c"){
      filtros +=cadena[i]
    }
  }

  return filtros;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  var flecha, 
  nuevoArray =arr.slice(),
  acumulador =[];



  for(var i=0; i<arr.length; i++){

    var palabra = nuevoArray[0].length;
    flecha = nuevoArray[0];
   

    for(var j=1; j<nuevoArray.length; j++){

      var palabra2 = nuevoArray[j].length;

      if(palabra2< palabra){
        flecha = nuevoArray[j];
       

      }
  

      if(nuevoarraylength >=  1){
        acumulador.push(flecha);
      }else{
        acumulador.push(nuevoArray[0]);
      }

    }
    nuevoArray.splice(nuevoArray.indexOf(flecha),1);
 
  }
return acumulador
 

}
const resultado = sortArray (["you","are","beautiful","looking"])
console.log(resultado)

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var intersecciones =[]

  for(var i=0; i<arreglo1.length; i+=1){

    for(var j=0; j<arreglo2.length; j+=1){

      if(arreglo1[i]===arreglo2[j]){
        intersecciones.push(arreglo1[i])
      }
    }
  }
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

