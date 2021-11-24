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


