//1)
//Al declararla var es gobal la variable i, y tiene alcance mas alla del ciclo for
for(var i=0; i<=10; i++){

}
	
console.log(i)

//Al declararla let no es gobal la variable i, y tiene alcance solo dentro del ciclo for
for(let i=0; i<=10; i++){

}
	
console.log(i)


//2)
var funciones = [];

for(let i=0; i <10; i++){

	funciones.push(function(){console.log(i);});
	// function push(
	// 	(function(valor){
	// 		return function(){
	// 			console.log(valor);
	// 		}
	// 	})(i)
	// );
}

 funciones.forEach(function(func){
	func();
 });