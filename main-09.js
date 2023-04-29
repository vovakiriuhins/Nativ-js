

function foo() {
    const a = () => {
        console.log("hey");
    };
    return a
}

// foo()
const bar = foo()
bar();

