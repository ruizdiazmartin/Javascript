let tareaAsincronica = () => {
	setTimeout(function(){
		console.log("Proceso asincronico terminado");
	}, 2000)
};

tareaAsincronica();
console.log("Codigo secuencial");