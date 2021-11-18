//Diferencias entre usar foreach y maps.
const numeros = [1, 2, 4, 8, 7];

//Con el foreach se obtiene solo la clave.
//El foreach solo sirve para recorrer un array pero no para manipular ni obtener los datos.
const resulForeach = numeros.forEach(x => x * 5)
console.log(resulForeach);

//Con el map se obtiene clave y valor.
//El maps sirve tanto para recorrer un array como manipular y obtener datos de los items.
const resultMap = numeros.map(z => z * 5)
console.log(resultMap);


//Verificamos cuanto tarda un array si lo recorremos con un foreach o un map
const timeResult = Array(20000).fill(5);

//Si el array lo recorremos con foreach tarda menos. 
console.time("foreach()");
const timeResultForeach = timeResult.forEach(x => x * 5)
console.timeEnd("foreach()");

//Si el array lo recorremos con maps tarda mas. 
console.time("map()");
const timeResultMap = timeResult.map(x => x * 5)
console.timeEnd("map()");
