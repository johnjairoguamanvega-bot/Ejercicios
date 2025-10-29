// variables es una area de memoria para almacenar datos en JavaScript
// una funcion es un conjunto de instrucciones que realizan una tarea especifica
function variables(){
    alert("Variables en JS")
    console.log("Uso de variables en JavaScript");
    let numero=10 // variable de tipo number
    let nombre="Juan" // variable de tipo string
    let esActivo=true // variable de tipo boolean
    let numeros=[10,20,30] // variable de tipo array de numeros
    //posiciones:0  1  2
    //         lenght:3 // devuelve la cantidad de elementos del arreglo
    let nombres=["Ana","Luis","Maria"]// variable de tipo array de strings
    //             0      1      2
    numero=15 // reasignacion de variable numero
    numero=numero+5 // operacion aritmetica con variable numero
    nombre="Pedro" // reasignacion de variable nombre
    nombre = nombre + " Gomez" // concatenacion de variable nombre
    esActivo=false // reasignacion de variable esActivo
    numeros.push(40) // agregar un elemento al array numeros
    numeros[0]=5 // modificar un elemento del array numeros en la posicion 0
    let num = numeros[0] // acceder a un elemento del array numeros en la posicion 0
    nombres[3]= "Carlos" // agregar un elemento al array nombres en la posicion 3
    //posiciones:012345
    let pos = nombres.length-1
    let ultimoNombre = nombres[pos] // acceder al ultimo elemento del array nombres
    let frase = "Hola Mundo" // variable de tipo string
    //           0123456789
    // let car= frase.charAt(0) // "H" acceder al primer caracter del string ultimoNombre
    let car = frase[0] // "H" acceder al primer caracter del string ultimoNombre  
    let lon = frase.length //10: obtener la longitud del string ultimoNombre
    let ultimoCaracter = frase[lon-1] // acceder al ultimo caracter del string ultimoNombre
    frase[0]="h" // no se puede modificar un caracter de un string
    frase = "*"+frase+"*"//*Hola Mundo* // concatenacion de strings
    let subFrase= frase.substring(1,5) // "Hola" extraer una subcadena del string frase
    console.log("numero:",numero);
    console.log("nombre:",nombre);
    console.log("esActivo:",esActivo);
    console.log("numeros:",numeros);
    console.log("nombres:",nombres);
    console.log("num:",num);
    console.log("pos:",pos);
    console.log("ultimoNombre:",ultimoNombre);
    console.log("car:",car);
    console.log("lon:",lon);
    console.log("ultimoCaracter:",ultimoCaracter);
    console.log("frase:",frase);
    console.log("subFrase:",subFrase);
}
function condicionales(){
    // numero par
    // obtener un numero por medio de un prompt
    // obtener el reciduo de la division entre 2 y preguntar
    // si el reciduo es 0
    let numero=prompt("Ingrese un numero:")
    numero=parseInt(numero) // convertir el string a number
    let residuo=numero % 2
    //En programación, una condición es una pregunta que el programa 
    // se hace a sí mismo para decidir qué hacer.
    // las condiciones simples if else tienen dos caminos posibles verdadero o falso
    if(residuo==0){
        console.log("El numero es par");
    }else{
        console.log("El numero es impar");
    }
    // condicion multiple if else if else
    // Cuando queremos que el programa tome decisiones con varias posibilidades,
    // usamos una estructura de condiciones múltiples
    // calificacion de un estudiante
    // si la calificacion es mayor o igual a 70 -> Aprobado
    // si la calificacion es mayor o igual a 40 -> Recuperacion
    //
    let calificacion=prompt("Ingrese la calificacion del estudiante:")
    calificacion=parseFloat(calificacion) // convertir el string a number con decimales
    let obs=""
    if(calificacion>=70){
        obs="Aprobado"
    }else if(calificacion>=40){
        obs="Recuperacion"
    }else{
        obs="Reprobado"
    }
    console.log("Calificacion:",calificacion,"Observacion:",obs);
}

// tarea semana 9 
// Bloque 1: Ejercicios con Cadenas
function contcaracteres(){
    let entrada = prompt("Ingrese la frase");
    let frase = entrada.length;
    alert("la frase tiene"+frase+"caracteres")
}

function contapariciones(){
    let frase = prompt("Ingrese el título:");
    let contador = 0;

    for (let letra of frase) {
        if (letra === "a" || letra === "A") {
            contador++;
        }
    }

    alert("La vocal 'a' aparece " + contador + " veces.");
}

function invertirproducto(){
    let nombre = prompt("Ingrese el nombre del producto:");
    let invertido ="";

    for (let i = nombre.length - 1; i >= 0; i--){
        invertido = invertido+nombre[i];
    }
    alert(invertido)
}

function compararciudades(){
    let c1 = prompt("Ingrese la primera ciudad:");
    let c2 = prompt("Ingresa la segunda ciudad:");

    if(c1.length > c2.length){
        alert("La palabra '" +c1+ "' tiene mas letras.");
    } else if (c2.length > c1.length){
        alert("La palabra '" +c2+ "' tiene mas letras.");
    } else{
        alert("Ambas tienen la misma cantidad de letras.");

    }
}

function obtenerIniciales(){
    let cargo = prompt("Ingrese el cargo profesional:");
    let partes = cargo.split(" ");
    let iniciales = "";

    for (let i = 0; i < partes.length; i++) {
        iniciales = iniciales + partes[i][0].toUpperCase() +".";
    }
    alert(iniciales);
}

//Bloque 2(version con arreglos del Bloque1)
function contarCaracteres(){
    let entrada = prompt("Ingresar las frases separas por coma: ");
    let frases = entrada.split(",");

     for (let i = 0; i < frases.length; i++) {
    alert(frases[i] + " → " + frases[i].length + " caracteres");
  }
}

function contarvocales(){
    let entrada = prompt("Ingresar los titulos separadas por comas; ");
    let titulos = entrada.split(",");
    
    let vocal = "a";

    for (let i = 0; i < titulos.length; i++){
        let contador = 0;
        for(let j = 0; j < titulos[i].length; j++){
            if(titulos[i][j].toLowerCase() === vocal){
                contador++;
            }
        }
        alert(titulos[i] + "  "+ contador+ "veces la '"+ vocal +"'");

    }
}

function invertirProductos(){
    let entrada = prompt("Ingresar nombres de productos");
    let productos = entrada.split(",");

    for (let i = 0; i < productos.length; i++){
        let invertido = "";
        for (let j = productos[i].length - 1; j >= 0; j--){
            invertido = invertido + productos[i][j];
        }
        alert(productos[i]+ " " + invertido);
    }
}

function ciudadMasLarga(){
    let entrada = prompt("Ingresar los nombres de ciudades")
    let ciudades = entrada.split(",");
    let mayor = ciudades[0];

    for(let i = 1; i < ciudades.length; i++){
        if (ciudades[i].length > mayor.length){
            mayor = ciudades[i];
        }
    }
    alert("La ciudad con mas letras es '"+ mayor + "' ("+ mayor.length + "letras).");
}

function inicialesCargos(){
    let entrada = prompt("Ingresar los cargos profesionales");
    let cargos = entrada.split(",");

    for(let i = 0; i < cargos.length; i++){
        let cargo = cargos[i].trim(); //elimina espacios extra
        let partes = cargo.split(" ");
        let iniciales = "";
        for (let j = 0; j < partes.length; j++){
            iniciales = iniciales + partes[j][0].toUpperCase() + ".";
        }
        alert(cargo + " -> " + iniciales);
    }
}

// Bloque 3: Ejercicios Individuales con Ciclos
function promedio(){
    //let notas = [65,80,90,50,75];
    let n = Number(prompt("Ingrese el numero de calificaciones:"));
    let suma = 0;
    let contador = 0;

    for (let i = 1 ; i <= n; i++){
        let nota = Number(prompt("Ingrese la nota" + i + ":"));
        if (nota >= 70){
            suma = suma + nota;
            contador = contador + 1;
        }
    }

    if (contador > 0){
        let promedio = suma / contador;
        alert ("Promedio de notas de igual o mayor a 70:" + promedio.toFixed(2));
    } else{
        alert("No hay notas mayores o iguales a 70")
    }
}


function contarnegativos(){
let n = Number(prompt("Ingrese la cantidad de números:"));  //(-3,-6,0,7,-1,-8)
  let contador = 0;

  for (let i = 1; i <= n; i++) {
    let numero = Number(prompt("Ingrese el número " + i + ":"));
    if (numero < 0) {
      contador = contador + 1;
    }
  }

  alert("La cantidad de números negativos es: " + contador);
}

function promedioedades(){
    let n = Number(prompt("Ingrese la cantidad de edades:"));
  let sumaMayores = 0;
  let sumaMenores = 0;
  let contMayores = 0;
  let contMenores = 0;

  for (let i = 1; i <= n; i++) {
    let edad = Number(prompt("Ingrese la edad " + i + ":"));

    if (edad >= 18) {
      sumaMayores = sumaMayores + edad;
      contMayores = contMayores + 1;
    } else {
      sumaMenores = sumaMenores + edad;
      contMenores = contMenores + 1;
    }
  }

  if (contMayores > 0) {
    let promMayores = sumaMayores / contMayores;
    alert("Promedio de edades mayores o iguales a 18: " + promMayores.toFixed(2));
  } else {
    alert("No hay mayores de edad.");
  }

  if (contMenores > 0) {
    let promMenores = sumaMenores / contMenores;
    alert("Promedio de edades menores de 18: " + promMenores.toFixed(2));
  } else {
    alert("No hay menores de edad.");
  }
}

function tablaMultiplicar() {
  let numero = Number(prompt("Ingrese un número:"));

  alert("Tabla del " + numero + ":");

  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    alert(numero + " x " + i + " = " + resultado);
  }
}

function promedioParesImpares() {
  let n = Number(prompt("Ingrese la cantidad de números:"));
  let sumaPares = 0;
  let sumaImpares = 0;
  let contPares = 0;
  let contImpares = 0;

  for (let i = 1; i <= n; i++) {
    let numero = Number(prompt("Ingrese el número " + i + ":"));

    if (numero % 2 == 0) {
      sumaPares = sumaPares + numero;
      contPares = contPares + 1;
    } else {
      sumaImpares = sumaImpares + numero;
      contImpares = contImpares + 1;
    }
  }

  if (contPares > 0) {
    alert("Promedio de pares: " + (sumaPares / contPares).toFixed(2));
  } else {
    alert("No hay números pares.");
  }

  if (contImpares > 0) {
    alert("Promedio de impares: " + (sumaImpares / contImpares).toFixed(2));
  } else {
    alert("No hay números impares.");
  }
}

// BLOQUE 4
function promedioMayores70() {
  let calificaciones = [65, 80, 90, 50, 75];
  let suma = 0;
  let contador = 0;

  for (let i = 0; i < calificaciones.length; i++) {
    if (calificaciones[i] >= 70) {
      suma = suma + calificaciones[i];
      contador = contador + 1;
    }
  }

  if (contador > 0) {
    let promedio = suma / contador;
    alert("Promedio de calificaciones ≥ 70: " + promedio.toFixed(2));
  } else {
    alert("No hay calificaciones mayores o iguales a 70.");
  }
}


function contarNegativos() {
  let numeros = [3, -5, 0, 7, -1, -8];
  let contador = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 0) {
      contador = contador + 1;
    }
  }

  alert("Cantidad de números negativos: " + contador);
}

function promedioEdades() {
  let edades = [17, 20, 35, 15, 18];
  let sumaMayores = 0;
  let sumaMenores = 0;
  let contMayores = 0;
  let contMenores = 0;

  for (let i = 0; i < edades.length; i++) {
    if (edades[i] >= 18) {
      sumaMayores = sumaMayores + edades[i];
      contMayores = contMayores + 1;
    } else {
      sumaMenores = sumaMenores + edades[i];
      contMenores = contMenores + 1;
    }
  }

  let promMayores = sumaMayores / contMayores;
  let promMenores = sumaMenores / contMenores;

  alert("Promedio de mayores de edad: " + promMayores.toFixed(2));
  alert("Promedio de menores de edad: " + promMenores.toFixed(2));
}

function tablasMultiplicar() {
  let numeros = [3, 5]; // arreglo con los números
  for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    let resultado = "";

    for (let j = 1; j <= 10; j++) {
      resultado = resultado + (numero * j) + ", ";
    }

    alert("Tabla del " + numero + ":\n" + resultado);
  }
}

function promedioParesImpares() {
  let numeros = [2, 5, 8, 9, 4, 7];
  let sumaPares = 0;
  let sumaImpares = 0;
  let contPares = 0;
  let contImpares = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      sumaPares = sumaPares + numeros[i];
      contPares = contPares + 1;
    } else {
      sumaImpares = sumaImpares + numeros[i];
      contImpares = contImpares + 1;
    }
  }

  let promedioPares = sumaPares / contPares;
  let promedioImpares = sumaImpares / contImpares;

  alert("Promedio de pares: " + promedioPares.toFixed(2));
  alert("Promedio de impares: " + promedioImpares.toFixed(2));
}
debugger 
//variables();
//condicionales();
//contcaracteres();
//contapariciones();
//invertirproducto();
//compararciudades();
//obtenerIniciales();
//contarCaracteres();
//contarvocales();
//invertirProductos();
//ciudadMasLarga();
//inicialesCargos();
//promedio();
//contarnegativos();
//promedioedades();
//tablaMultiplicar();
//promedioParesImpares(); 
//promedioMayores70();
//contarNegativos();
//promedioEdades();
//tablasMultiplicar();
promedioParesImpares();