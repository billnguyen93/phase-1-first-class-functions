function receivesAFunction(spy) {
    spy();
}


function returnsANamedFunction() {
    return function fn() {
        console.log('returns a named function');
    }
}

const fn = returnsAnAnonymousFunction();
function returnsAnAnonymousFunction() {
    return () => console.log('returns an anonymous function')
}