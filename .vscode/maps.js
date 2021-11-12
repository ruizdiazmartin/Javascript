//Mapas y sus metodos.
let mapa = new Map();

//Agregar elementos al map
mapa.set("Nombre", "Martin");
mapa.set("Edad", 41);

//Imprimo las propiedades que tiene mapa y vemos la longitud.
console.log(mapa, mapa.size);

//Para obtener la propiedad que deseo realizamos lo siguiente.
console.log(mapa.get("Nombre"));
console.log(mapa.get("Edad"));

//Verificamos si la propiedad exixte.
console.log(mapa.has("Nombre"));
console.log(mapa.has("Edad"));
console.log(mapa.has("Apellido"));

//Eliminar un elemento del map.
mapa.delete("Edad");
console.log(mapa.has("Edad"));
console.log(mapa.get("Edad"));

//Para limpiar todo el map hago lo siguiente.
mapa.clear();
console.log(mapa);

//Inicilizacion un map
//Siempre hay que mandar los paramentros array dentro de un array contedor.
let mapas = new Map([["nombre", "Martin"], ["edad", 41]]);
console.log(mapas);


//Ciclo For Of, especializado para las colecciones.
let num = ["30", "20", "54", "500"];

//For tradicional
for (let i = 0; i < num.length; i++) {
	console.log(num[i]);
}

//Ciclo for in que tambien existia y obtengo el mismo resultado que el ciclo for tradicional.
for (let nu in num) {
	console.log(num[nu]);
};

//Al declararlo como let lo limito a que solo recida dentro del ciclo.
for (let resul of num) {
	console.log(resul);
};

//Podemos recorrer un array de objetos tambien con el ciclo for of.
let people = [
	{ nombre: "Martin", edad: "41" },
	{ nombre: "Eduardo", edad: "14" },
	{ nombre: "Dylan", edad: "34" },
	{ nombre: "Jose", edad: "25" }
];

for (let pe of people) {
	console.log(pe.nombre, pe.edad);
};

//Podemos recorrer un Set de propiedades tambien con el ciclo for of.
let peopleSet = new Set();

peopleSet.add("pepe");
peopleSet.add("papu");
peopleSet.add("pipo");

for (let per of peopleSet) {
	console.log(per);
};


//Podemos recorrer un Set de objeto tambien con el ciclo for of.
let peopleSets = new Set();

peopleSets.add({ nombre: "Martin", edad: "21" });
peopleSets.add({ nombre: "Edu", edad: "11" });
peopleSets.add({ nombre: "Dylan", edad: "31" });

for (let pe of peopleSets) {
	console.log(pe.nombre, pe.edad);
};

//Podemos recorrer un Map de objeto tambien con el ciclo for of.
let peopleMap = new Map([["nombre", "Carlitos"], ["edad", 12]]);

for (let peMap of peopleMap) {
	console.log(peMap);
};


