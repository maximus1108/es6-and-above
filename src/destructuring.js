document.write("<br><h1>Destructuring</h1>")

{
    function bar() {
		return {
			x: 4,
			y: 5,
			z: 6
		};
	}

	let { x, y, z } = bar();
	let { x: a, y:b, z: c } = bar();

	console.log(a, b, c)
	console.log(x, y, z);

	document.write(`objects can be destructured to different reference names - a = ${a}; b = ${b}; c = ${c};<br>`)


}

{
	function bar() {
		return {
			e: 4,
			f: 5,
			g: 6
		};
	}
	
	function foo() {
		return [1, 2, 3];
	}

	let e, f, g, h , i , j;

	({ e, f, g } = bar()); //wrapped in brackets as curleys will be considered as a block

	[h, i, j] = foo();
	
	console.log(e,f,g);
	console.log(h,i,j);

	document.write(`variables can be declared before destructing<br>`)
	
} 

{
	function bar() {
		return {
			e: 4,
			f: 5,
			g: 6
		};
	}
	
	function foo() {
		return [1, 2, 3];
	}

	const o = {}, arr = [];

	[o.a, o.b, o.c] = foo();
	({e: o.x, f: o.y, g: o.z } = bar()); //wrapped in brackets as curleys will be considered as a block

	[arr[0], arr[1], arr[2]] = foo();
	( { e: arr[3], f: arr[4], g: arr[5] } = bar() );

	const prop = "name", letter = "g", obj = {};
	


	( { f: obj[prop], [letter]: obj[letter]  } = bar() )

	console.log(o, arr, obj);

	document.write(`variables previously declared can be objects or arrays which destructuring can be assigned to - ${arr}`)
	document.write(`when destructuring, values can be assigned to an object property evaluated with [ "propname" ] brackets like usual assigment <br>`)

}
{
	
	//example using destructuring to reorder array	
	const a1 = [1, 2, 3], a2 = [];

	[ a2[2], a2[1], a2[0]] = a1;

	document.write(`destructuring can be used to reorder array into another - a1 = ${a1}, a2 = ${a2}<br>`)

}

{
	let x = 5, y = 10;

	[y, x] = [x, y];

	document.write(`it can be used to swap variable values - x = ${x}, y = ${y}`)

}

{
	//nested destructuring

	const obj = {
			a: [1, 2],
			b: {
				c: "name",
				d: "age"
			}	
		}
	const test = {}

	const { 
		  a: [ y, z ],
		  a, // when used like this the descructred var name must match obect prop name, e.g 'a' = 'a'
		  b: { c: h,  d:j },
		  b	 // when used like this the descructred var name must match obect prop name, e.g 'b' = 'b'
		} = obj;

		console.log(obj, a, y, z, b, h, j);

}

{

	//when including additional assignment, the original obj/array is always carried across and not one of the destructured values, e.g

	const obj = {
		a: 1,
		b: 2,
		c: 3
	};
	
	let w, x, y, z;

	w = { a: x, b: y, c: z } = obj

	//so we can chain assignments too

	const obj2 = {
		e: 8,
		f: 9,
		g: 10,
		h: 11
	};
	
	let l, m, n, o;

	( { e: l } = { f: m, g: n, h: o } = obj2 ); //wrapped in brackets as curleys will be considered as a block

	console.log(l, m, n, o)

}

{
	//we do not have to desture the whole obj/array

	let a, b, x, y;

	[ , , a, b ] = [1, 2, 3 ,4];

	console.log(a,b); 

	( {f: x , g: y} = { e: 10, f: 20, g: 30, h: 40} ); //wrapped in brackets as curleys will be considered as a block

	console.log(x,y); 

}

{

	//when destructuring, remain values can be gathered and assigned to a variable, like so...
	const arr = [1, 2, 3, 4];

	const [a, ...b ] = arr;

	console.log(arr, "=", a, b);
	
	// -------------------
	// support of this feature with objects is not ES6 spec but is included in a newer spec
	const obj = {
		x: 1,
		y: 2,
		z: 3
	};
	
	const { x, ...y} = obj;

	console.log(obj, "=", x, y);
	//-------------------

}

{

	//we can used default assignments when destructing, so if a returned value is not defined this value will be used

	const arr = [1, 2, 3, 4];

	const [ a, b, c, d, e = "default val"] = arr;

	console.log(a, b, c, d, e)

	const obj = {
		x: 5,
		y: 6,
		z: 7
	};

	const { w: k = "fallback", x: l, y: m, z:n } = obj;

	console.log(k, l, m, n)

}

{
	//nested destructuring

	const arr = [1, 2, [3, 4, 5], 6];

	const [ a, b, [c, d, e], f] = arr;

	// can be use full for acessing namespaces 

	const App = {
		model: {
			User: {
				sayName () {
					console.log("max")
				}
			}
		}
	}

  const { model: { User } } = App;

  User.sayName();

}

{

	//destructuring parameters

	//array
	const f = ([a, b, c]) => console.log(a, b, c); 
	
	f([1,2,3]);

	//obj 
	const func = ({x, y, z}) => console.log(x, y, z);
	
	func({x: 4, y:5, z: 6});

	func({z: 7}); // useful with optional params

	
	// works well with other features

	const foo = ({e, f, g = 100}, [h, i, j, ...k], ...rest) => console.log(e, f, g, h, i, j, k, rest)

	foo({e: 10, f: 20}, [11, 22, 33, 44, 55, 66], 50, 60 ,70)

	///
	function bar({ x = 10 } = {}, { y } = { y: 10 }) {
		console.log( x, y );
	}

	bar();
	bar({}, {})
	bar({x: 30}, {})
	bar({x: 30}, {y: 90})

	bar({c: 112}, {c: 40})
	

}