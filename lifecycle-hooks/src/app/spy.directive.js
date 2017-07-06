"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var logger_service_1 = require("./logger.service");
var nextId = 1;
// Spy on any element to which it is applied.
// Usage: <div mySpy>...</div>
var SpyDirective = (function () {
    function SpyDirective(logger) {
        this.logger = logger;
    }
    SpyDirective.prototype.ngOnInit = function () { this.logIt("onInit"); };
    SpyDirective.prototype.ngOnDestroy = function () { this.logIt("onDestroy"); };
    SpyDirective.prototype.logIt = function (msg) {
        this.logger.log("Spy #" + nextId++ + " " + msg);
    };
    return SpyDirective;
}());
SpyDirective = __decorate([
    core_1.Directive({ selector: '[mySpy]' }),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], SpyDirective);
exports.SpyDirective = SpyDirective;
//# sourceMappingURL=spy.directive.js.map