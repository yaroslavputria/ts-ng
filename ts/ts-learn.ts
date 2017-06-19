const generateUniqId = (function(){
    let id = 0;
    function gen() {
        return id++;
    }
    return gen;
})();

interface CustomerInterface extends Object {
    name: string;
    balance: number;
    readonly id: number;
    age?: number;
    [propName: string]: any;
}

class Bank {
    static commonLimit: number = 10000;
    //public readonly bankName: string;// there is no need, because in constructor there is accessibility modifier 'public'
    public customerBalanceLimit: number;
    private customers: Array<CustomerInterface> = [];
    //private bankCapital: number; //there is in parameter added cunstructor with 'readonly' - it creates 'private' prop
    private _greetedPerson: string;
    constructor(public bankName: string, readonly capital: number, customerBalanceLimit: number) {
        //this.bankCapital = capital;// there is no need, because in constructor there is accessibility modifier 'readonly'
        //this.bankName = bankName;there is no need, because in constructor there is accessibility modifier 'public'
        this.customerBalanceLimit = customerBalanceLimit;//there is NO accessibility modifier 'public' in constructor - so we need it :)
        // setTimeout(() => {

        // }, 1000);
        this._greetedPerson = 'nobody';
        if (Bank.commonLimit > this.capital) throw new Error('You cant create bank with so low balance!');
    }

    get greetedPerson(): string {
        return this._greetedPerson;
    }

    set greetedPerson(p: string) {
        this._greetedPerson = p;
    }

    public showCapital() {console.log(this.capital);}

    public addCustomer(c: CustomerInterface) {this.customers.push(c)}
    public removeCustomerById(id: number) {
        let arrId: number = this.customers.findIndex(c => c.id === id);
        if (arrId !== -1) this.customers.splice(arrId, 1);
    };
    public getCustomerById(id: number) {
        let c: any = this.customers.find(c => c.id === id);
        return (c === -1) ? undefined : c;
    }

    becomeCustomer(posibleCustomer: CustomerInterface) {
        if (posibleCustomer.balance >= this.customerBalanceLimit) this.addCustomer(posibleCustomer);
    }
}

class Customer implements CustomerInterface {
    public name: string;//there is no need to add type, because 'class Customer implements CustomerInteface'
    public balance: number;//  -||-
    public id: number;//  -||-

    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
        this.id = generateUniqId();
    }

    protected talk() {// inherited classes can use its method
        console.log(this.name + ' says \'Hello, World\'!');
    }
}

class SuperCustomer extends Customer {
    constructor(name, balance) {
        super(name, balance);
    }
    public talk() {
        super.talk();
    }
}

const ss = new SuperCustomer('Talker', 0);
ss.talk();

const ukrSibBank = new Bank('УкрСибБанк', 10000000000000, 1000);
ukrSibBank.showCapital();
console.log(ukrSibBank.bankName);

try {
    const fakeBank = new Bank('noname', 100, 1);
} catch(e) {
    console.log(e.message);//->You cant create bank with so low balance!
}

const vasilii = new Customer('Вася', 950);

ukrSibBank.greetedPerson = vasilii.name;//setter
console.log(ukrSibBank.greetedPerson);//getter

//vasilii.id = 4; //error (id - readonly prop)
//ukrSibBank.bankName = 'ddd';// the same error

//========================================//
abstract class AliveThing {
    constructor(protected name: string) {

    }
    showName(): void{
        console.log(this.name);
    }
    abstract move(): void;
}

class Worm extends AliveThing{
    constructor(i) {
        super(i);
    }
    move(): void {
        console.log(this.name + ' is worming!');
    }
}

const myWorm = new Worm('Bob');
myWorm.move();
myWorm.showName();
//========================================//

////////////////////////////////////////////////////

//////////////Types////////////////

//            Boolean

let isDone: boolean = false;

//            Number

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//            String

let color: string = "blue";

//            Array

let arr1: number[] = [1, 2, 4];

let arr2: Array<number> = [1, 2, 3];

//            Tuple

let tuple: [string, number] = ['string', 228];

//            Enum

enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];
let c: Color = Color.Green;
console.log(colorName, c);

//            Any

let anything: any = 5;

anything = 'now I am string';

//            Void

let lol: void = null;
lol = undefined;

function lolFunc(r: string): void {
    console.log(r);
}

//            Null and Undefined

let u: undefined = undefined;
let n: null = null;

//            Never

// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}

//            Type assertions (“trust me, I know what I’m doing”)

let someValue1: any = "this is a string";
let strLength1: number = (<string>someValue1).length;

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

//            Generics

function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");  // type of output will be 'string'

let output1 = identity("myString");  // type of output will be 'string'

function loggingIdentity<T>(arg: T): T {
    //console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}

function loggingIdentity1<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

interface Lengthwise {
    length: number;
}

function loggingIdentity2<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
//getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

////////////Destructuring///////////

// you know it from ES6

/////////////Interfaces////////////

// Defining an interface

interface O {

}

interface FFF {
    // object property
    name: string;
    
    // optional object property
    callable?: boolean;
    
    // readonly object property
    readonly params: number;
    
    // callable type
    (): O;

    // can be used as a function constructor
    new (): O;
    
    // object method
    a(): number;
    
    // indexable type
    //[index: string]: string;
}

// Defining object/function type when creating an object
let f = function() {} as FFF;

// Using type assertion
function f1() {};
let fn1 = f as FFF;
let fn = <FFF>f;

///////////decorators///////////

function timeout(milliseconds: number = 0) {// this is the decorator factory

    return function(target, key, descriptor) {// this is the decorator

        var originalMethod = descriptor.value;

        descriptor.value = function(...args) {

            setTimeout(() => {
                originalMethod.apply(this, args);
             }, milliseconds);

        };

        return descriptor;
    }
}

class DemoComponent {

    constructor() {}

    @timeout()
    demoMethod() {
        // Цей код запуститься на наступний тік
    }

    @timeout(2000)
    demoMethod2() {
        // А цей через дві секунди
    }
}

new DemoComponent().demoMethod();

function f23() {
    console.log("f23(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f23(): called");
        console.dir(target, propertyKey, descriptor);
    }
}

function g23() {
    console.log("g23(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g23(): called");
        console.dir(target, propertyKey, descriptor);
    }
}

class C {
    @f23()
    @g23()
    method() {}
}

//Class Decorators

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

//Method Decorators

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

class Greeters {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}

//Accessor Decorators

function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}

class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() { return this._x; }

    @configurable(false)
    get y() { return this._y; }
}

//Property Decorators

// import "reflect-metadata";

// const formatMetadataKey = Symbol("format");

// function format(formatString: string) {
//     return Reflect.metadata(formatMetadataKey, formatString);
// }

// function getFormat(target: any, propertyKey: string) {
//     return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
// }

// class Greeter23 {
//     @format("Hello, %s")
//     greeting: string;

//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         let formatString = getFormat(this, "greeting");
//         return formatString.replace("%s", this.greeting);
//     }
// }

// //Parameter Decorators

// import "reflect-metadata";

// const requiredMetadataKey = Symbol("required");

// function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
//     let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
//     existingRequiredParameters.push(parameterIndex);
//     Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
// }

// function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
//     let method = descriptor.value;
//     descriptor.value = function () {
//         let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
//         if (requiredParameters) {
//             for (let parameterIndex of requiredParameters) {
//                 if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
//                     throw new Error("Missing required argument.");
//                 }
//             }
//         }

//         return method.apply(this, arguments);
//     }
// }

// class Greeter123 {
//     greeting: string;

//     constructor(message: string) {
//         this.greeting = message;
//     }

//     @validate
//     greet(@required name: string) {
//         return "Hello " + name + ", " + this.greeting;
//     }
// }

