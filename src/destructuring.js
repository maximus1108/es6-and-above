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

}