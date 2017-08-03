var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const generateUniqId1 = (function () {
    let id = 0;
    function gen() {
        return id++;
    }
    return gen;
})();
function* idMaker() {
    let index = 0;
    while (true)
        yield index++;
}
const generateUniqId = (function () {
    let gen = idMaker();
    return function () {
        return gen.next().value;
    };
})();
class Bank {
    constructor(bankName, capital, customerBalanceLimit) {
        this.bankName = bankName;
        this.capital = capital;
        this.customers = [];
        //this.bankCapital = capital;// there is no need, because in constructor there is accessibility modifier 'readonly'
        //this.bankName = bankName;there is no need, because in constructor there is accessibility modifier 'public'
        this.customerBalanceLimit = customerBalanceLimit; //there is NO accessibility modifier 'public' in constructor - so we need it :)
        // setTimeout(() => {
        // }, 1000);
        this._greetedPerson = 'nobody';
        if (Bank.commonLimit > this.capital)
            throw new Error('You cant create bank with so low balance!');
    }
    get greetedPerson() {
        return this._greetedPerson;
    }
    set greetedPerson(p) {
        this._greetedPerson = p;
    }
    showCapital() { console.log(this.capital); }
    addCustomer(c) { this.customers.push(c); }
    removeCustomerById(id) {
        let arrId = this.customers.findIndex(c => c.id === id);
        if (arrId !== -1)
            this.customers.splice(arrId, 1);
    }
    ;
    getCustomerById(id) {
        let c = this.customers.find(c => c.id === id);
        return (c === -1) ? undefined : c;
    }
    becomeCustomer(posibleCustomer) {
        if (posibleCustomer.balance >= this.customerBalanceLimit)
            this.addCustomer(posibleCustomer);
    }
}
Bank.commonLimit = 10000;
class Customer {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
        this.id = generateUniqId();
    }
    talk() {
        console.log(this.name + ' says \'Hello, World\'!');
    }
}
class SuperCustomer extends Customer {
    constructor(name, balance) {
        super(name, balance);
    }
    talk() {
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
}
catch (e) {
    console.log(e.message); //->You cant create bank with so low balance!
}
const vasilii = new Customer('Вася', 950);
ukrSibBank.greetedPerson = vasilii.name; //setter
console.log(ukrSibBank.greetedPerson); //getter
//vasilii.id = 4; //error (id - readonly prop)
//ukrSibBank.bankName = 'ddd';// the same error
//========================================//
class AliveThing {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this.name);
    }
}
class Worm extends AliveThing {
    constructor(i) {
        super(i);
    }
    move() {
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
let isDone = false;
//            Number
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
//            String
let color = "blue";
//            Array
let arr1 = [1, 2, 4];
let arr2 = [1, 2, 3];
//            Tuple
let tuple = ['string', 228];
//            Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
let colorName = Color[2];
let c = Color.Green;
console.log(colorName, c);
//            Any
let anything = 5;
anything = 'now I am string';
//            Void
let lol = null;
lol = undefined;
function lolFunc(r) {
    console.log(r);
}
//            Null and Undefined
let u = undefined;
let n = null;
//            Never
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) {
    }
}
//            Type assertions (“trust me, I know what I’m doing”)
let someValue1 = "this is a string";
let strLength1 = someValue1.length;
let someValue = "this is a string";
let strLength = someValue.length;
//            Generics
function identity(arg) {
    return arg;
}
let output = identity("myString"); // type of output will be 'string'
let output1 = identity("myString"); // type of output will be 'string'
function loggingIdentity(arg) {
    //console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
function loggingIdentity1(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
function loggingIdentity2(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
function getProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a"); // okay
//getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
// Defining object/function type when creating an object
let f = function () { };
// Using type assertion
function f1() { }
;
let fn1 = f;
let fn = f;
///////////decorators///////////
function timeout(milliseconds = 0) {
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            setTimeout(() => {
                originalMethod.apply(this, args);
            }, milliseconds);
        };
        return descriptor;
    };
}
class DemoComponent {
    constructor() { }
    demoMethod() {
        // Цей код запуститься на наступний тік
    }
    demoMethod2() {
        // А цей через дві секунди
    }
}
__decorate([
    timeout()
], DemoComponent.prototype, "demoMethod", null);
__decorate([
    timeout(2000)
], DemoComponent.prototype, "demoMethod2", null);
new DemoComponent().demoMethod();
function f23() {
    console.log("f23(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("f23(): called");
        console.dir(target, propertyKey, descriptor);
    };
}
function g23() {
    console.log("g23(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("g23(): called");
        console.dir(target, propertyKey, descriptor);
    };
}
class C {
    method() { }
}
__decorate([
    f23(),
    g23()
], C.prototype, "method", null);
//Class Decorators
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
let Greeter = class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
};
Greeter = __decorate([
    sealed
], Greeter);
//Method Decorators
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Greeters {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
__decorate([
    enumerable(false)
], Greeters.prototype, "greet", null);
//Accessor Decorators
function configurable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.configurable = value;
    };
}
class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() { return this._x; }
    get y() { return this._y; }
}
__decorate([
    configurable(false)
], Point.prototype, "x", null);
__decorate([
    configurable(false)
], Point.prototype, "y", null);
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
