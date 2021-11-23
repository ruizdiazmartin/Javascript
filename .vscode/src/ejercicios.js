
let simbolo1 = Symbol('MARTIN');
let simbolo2 = Symbol('MARTIN');

let nombre1 = 'MARTIN';
let nombre2 = 'MARTIN';

let numero1 = '1';
let numero2 = 1;

if(nombre1 == nombre2)
{
	console.log('Son iguales');
};

if(nombre1 === nombre2)
{
	console.log('Son iguales tambien');
};

if(Object.is(nombre1, nombre2))
{
	console.log('Son realmente iguales');
};

console.log(Object.is(simbolo1, simbolo2));

console.log('=========');

console.log( Number == NaN);
console.log( NaN === Number.NaN);
console.log(Object.is(Number.NaN, NaN));

console.log('=========');

console.log( +0 == -0);
console.log( +0 === -0);
console.log(Object.is(+0, -0));



