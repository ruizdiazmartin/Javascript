//Todo lo que tenemos saber sobre map, filter y reduce

// 1- No podemos ejecutar funciones asincroniocas ni callback, todo es sincronico en map, filter y reduce.
// 2- Usar map cuando quieras transformar todos los elementos de un array y obtener un nuevo array
// 3- Usar filter cuando quiero filtar por una condicion a un nuevo array.
// 4- Usar reduce cuando quiero quiero obtener un unico valor a partir de un array.


// Ejemplo usando map, filter y reduce combinados.
//Array original
const numeros = [1, 2, 10, 4];

//Una buena practica es nunca modificar el array original.
//Con un map recorro el array original para luego obtener lo que deseo.
 const namber = numeros.map((numero) => {
	return numero * 2;
});
console.log(namber);

//Array de productos
const productos = [
	{id: 1, nombre: "Martin", precio: 1500},
	{id: 5, nombre: "Eduardo", precio: 1000},
	{id: 3, nombre: "Dylan", precio: 2500}
];

//Obtengo los productos con descuento mediante un map.
const prodDescuento  = productos.map(producto => {
	if(producto.precio < 1050) return producto;

	//Del array original tomo la propiedad que deseo manipular.
	return {
		...producto,
		precio: producto.precio * 0.9
	};
});
console.log(prodDescuento);

//Obtengo los ids de los productos tambien mediante un map.
const idProductos = productos.map(prod => prod.id)
console.log(idProductos);


//Aplicamos un filter para saber si un producto es barato o no.
const esBarato = prod => prod.precio < 1100;
const esCaro = prod => !esBarato(prod)

const prodBarato = productos.filter(esBarato);
const prodCaro = productos.filter(esCaro);

console.log(prodBarato);
console.log(prodCaro);

//Filter tambien sirve para sacar elementos repetidos de un array.
const numerosRepetios = [1, 2, 10, 3, 2, 10];

const numerosUnicos = numerosRepetios.filter((numero, posicion, numeros) => {
	return posicion === numeros.indexOf(numero);
});

console.log(numerosUnicos);

 
//Reduce o acumular
const numeroReduce = [5, 1, 3, 8, 10];

const acumulador  = (acumular, numero) => acumular + numero;
const total = numeroReduce.reduce(acumulador, 0);

console.log(total);

//Tambien podemos combinar funciones en la y obtener lo que deseamos.
//En el siguiente ejemplo vemos como combinamos filter y map. 
const precioTotalProdBaratos = productos.filter(esBarato).map(prod => prod.id);
console.log(precioTotalProdBaratos);

const precioTotalProdCaros = productos.filter(esCaro).map(pro => pro.nombre);
console.log(precioTotalProdCaros);