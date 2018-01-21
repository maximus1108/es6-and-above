document.write(`<h1>Default Parameters</h1>`);
{
    const foo = (x = 11, y = 12) => document.write(`dont forget default parameters can be used - x = ${x}; y = ${y};<br>`)

    foo();
}

{
    const foo = (x = 11, y = 12, ...z) => document.write(`useage in conjunction with spread operator  - x = ${x}; y = ${y}; z = ${z};<br><br>`)

    foo(1,2,3,4,5);
}

{
    document.write(`default params can be expressions.<br>`)
    document.write(`parameters can reference preceeding parameters and variables declared prior to invocation.<br>`)
    document.write(`If an argument is passed during invocation, the default expression is ignored<br>`)

    const bar = val => val * 3;
    
    const foo = (a = b * 2, c = bar(b), d = bar(a), e = bar(3)) => {
         document.write(`a = ${a}; c = ${c}; d = ${d}; e = ${e}<br>`)         
 
    }

    const b = 10;
    foo();
    foo(7, undefined, undefined, 8);

}

{
    const bar = () => "hello world from a function/callback as a default parameter";

    const foo = (x = bar) => {
        document.write(`<br>${bar()} <br>`)
    }

    foo();
}