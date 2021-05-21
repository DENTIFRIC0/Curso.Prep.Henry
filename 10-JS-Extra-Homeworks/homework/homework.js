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
let array = [];
for (var i in objeto){
  array.push([i, objeto[i]]);
}
return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
var objetoVacio = {};
for (i=0; i<string.length; i++){
  if (objetoVacio[string[i]]){
    objetoVacio[string[i]]+=1
  } else{
    objetoVacio[string[i]]=1;
}  
}
return objetoVacio;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var tamaño = s.length;
  var mayusculas = '';
  var minusculas = '';
  for (i = 0; i < tamaño; i++) {
    if (s[i] === s[i].toUpperCase()) {
      mayusculas += s[i];
    } else {
      minusculas += s[i];
    }
  }
  return mayusculas + minusculas;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var aArray = str.split(' ');
  var resultado = '';
  
  for (i=0 ; i<aArray.length ; i++){
    if (i === aArray.length-1) {
      var temp1 = aArray[i].split('').reverse().join('');
      resultado += temp1;
    } else {
      var temp2 = aArray[i].split('').reverse().join('');
      resultado += temp2 + ' ';
    }
  }
  return resultado;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var forzarString = numero.toString();
  var alReves = forzarString.split('').reverse().join('');
  if (forzarString === alReves){
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var largo = cadena.length;
 	var resto = '';
  for(i = 0 ; i<largo ; i++) {
    if(cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") {
         resto += cadena[i];
    }
  }
	return resto;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var nArr = arr.sort((a,b) => a.length - b.length);
  return nArr;
  //var nArr = arr.sort(function(a,b){a.length - b.length;})
  //return nArr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  var nArr = [];
  var largoArr1 = arreglo1.length;
  var largoArr2 = arreglo2.length;
  for (i = 0 ; i < largoArr1 ; i++) {
    for (ii = 0 ; ii < largoArr2 ; ii++) {
      if (arreglo2[ii] === arreglo1[i]) {
        nArr.push(arreglo2[ii]);
      }
    }
  }
  return nArr;
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

