document.write(`<h1>Spread Operator</h1>`);

{
    function foo(x,y,z) {
        document.write(`spread interable out as arguments - ${x} ${y} ${z} <br>`)
    }
    
    foo( ...[1,2,3] );

}

{
    let a = ["hello", "hi", "howdy"], b = ["bye", "ciao", "night"];

    document.write(`concat two arrays - ${[...a, ...b]} <br>`);

    a = {name: "max", age: 27}, b = { location: "UK", destination: "Mars"  }

    console.log({...a, ...b})
    
}
