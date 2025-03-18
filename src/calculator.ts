import { LogMethod } from "./logMethod";

class Calculator {
    @LogMethod
    add(a: number, b: number): number {
        return a + b;
    }

    @LogMethod
    multiply(a: number, b: number): number {
        return a * b;
    }
}


const calc = new Calculator();
console.log(calc.add(3, 5));      
console.log(calc.multiply(4, 6)); 
