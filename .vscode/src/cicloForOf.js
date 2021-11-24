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


