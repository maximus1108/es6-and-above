document.write(`<h1>Block Scope</h1>`);

let topscope = "hi world"
{
    let blockscoped = "hello world";
    document.write(`var 'blockscoped' = '${blockscoped}' - can only be referenced inside block. <br>`);

    document.write(`var 'topscope' = '${topscope}' - scope still lexical. <br><br>`);
}

{

    const iFuncs = [], jFuncs = [];

    for(let i = 0; i < 5; i++){
        iFuncs.push(() => i)
    }

    for(var j = 0; j < 5; j++){
        jFuncs.push(() => j)
    }

    document.write(`When variable is declared with 'let' in the header of a loop, a new instance is created for each interation. Thus ' iFuncs[3]()' = ${iFuncs[3]()}<br>`);    
    document.write(`not like when varaible is declared with 'var' - 'jFuncs[3]()' = ${jFuncs[3]()}<br><br>`);

}

{
    //const variables must be declared with a value, they will not assume undefined
    const constant = undefined;
}

{

    //functions are block scoped as of es6
    function foo () {
        console.log("hello earth")
    }
    
    foo();
}
// foo will now be accessible here
// foo()

