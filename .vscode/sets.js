//Creando sets, agregando items, y buscando elementos
//Los sets puden ser, booleanos, objetos, arrays, ect...

//Creo un set
let items = new Set();

//Agrego elementos al set.
items.add(1);
items.add(2);
items.add(3);

//Ignora este elemento porque ya existe y no permite repetir elementos.
items.add(3);

//Este elemento me deja agregar ya es el mismo valor pero de otro tipo.
items.add("3");

//Es para ver cuantos elementos tiene el set
console.log(items.size);

console.log(items);

//Set de aarray
let item = new Set([1,2,3,3,3,3,3,3]);

console.log(items.size);
console.log(item);

//Es para saber si existe un elemento en el set
console.log(item.has(2));

//Removiendo valores
item.delete(2);
console.log(item);

// limpia todo el set de datos.
item.clear();

//Convertir set de datos a array.
let numeros = [1,2,3,4,5,7,9,12];

let setNumeros = new Set(numeros);
console.log(numeros);


//Eliminar duplicados invocando a una funcion.
let numerosArray = [1,2,3,4,5,7,9,3,2];

let arrayNumeros = eliminarDuplicados(numerosArray);

console.log(arrayNumeros);

function eliminarDuplicados(items){
	//Con esta linea elimino duplicados.
	return [...new Set(items)];
};