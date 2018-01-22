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
	document.write(`when destructuring, values can be assigned to an object property evaluated with [ "propname" ] brackets like usual assigment `)

}