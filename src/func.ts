let greet: Function = () => {
    console.log("Hello user");
}

const add = (a: number, b: number, c?: number | string, d: number = 5):void => {
    console.log(a + b);
    console.log("Value of C ", c)
    console.log("Value of D ", d)
}

greet()
add(4, 4)

const minus = (a: number, b:number) => {
    return a - b;
}

let res = minus(4, 2)
console.log("res", res)