"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rabbit = (function () {
    function Rabbit(name) {
        this.name = name;
    }
    Rabbit.prototype.walk = function () {
        console.log(this.name + ' is jumping!');
    };
    return Rabbit;
}());
exports.Rabbit = Rabbit;
