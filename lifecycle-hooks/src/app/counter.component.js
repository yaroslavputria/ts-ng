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
var MyCounterComponent = (function () {
    function MyCounterComponent() {
        this.changeLog = [];
    }
    MyCounterComponent.prototype.ngOnChanges = function (changes) {
        // Empty the changeLog whenever counter goes to zero
        // hint: this is a way to respond programmatically to external value changes.
        if (this.counter === 0) {
            this.changeLog.length = 0;
        }
        // A change to `counter` is the only change we care about
        var chng = changes['counter'];
        var cur = chng.currentValue;
        var prev = JSON.stringify(chng.previousValue); // first time is {}; after is integer
        this.changeLog.push("counter: currentValue = " + cur + ", previousValue = " + prev);
    };
    return MyCounterComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MyCounterComponent.prototype, "counter", void 0);
MyCounterComponent = __decorate([
    core_1.Component({
        selector: 'my-counter',
        template: "\n  <div class=\"counter\">\n    Counter = {{counter}}\n\n    <h5>-- Counter Change Log --</h5>\n    <div *ngFor=\"let chg of changeLog\" mySpy>{{chg}}</div>\n  </div>\n  ",
        styles: ['.counter {background: LightYellow; padding: 8px; margin-top: 8px}']
    })
], MyCounterComponent);
exports.MyCounterComponent = MyCounterComponent;
/***************************************/
var CounterParentComponent = (function () {
    function CounterParentComponent(logger) {
        this.spyLog = [];
        this.logger = logger;
        this.spyLog = logger.logs;
        this.reset();
    }
    CounterParentComponent.prototype.updateCounter = function () {
        this.value += 1;
        this.logger.tick();
    };
    CounterParentComponent.prototype.reset = function () {
        this.logger.log('-- reset --');
        this.value = 0;
        this.logger.tick();
    };
    return CounterParentComponent;
}());
CounterParentComponent = __decorate([
    core_1.Component({
        selector: 'counter-parent',
        template: "\n   <div class=\"parent\">\n    <h2>Counter Spy</h2>\n\n    <button (click)=\"updateCounter()\">Update counter</button>\n    <button (click)=\"reset()\">Reset Counter</button>\n\n    <my-counter [counter]=\"value\"></my-counter>\n\n    <h4>-- Spy Lifecycle Hook Log --</h4>\n    <div *ngFor=\"let msg of spyLog\">{{msg}}</div>\n   </div>\n  ",
        styles: ['.parent {background: gold;}'],
        providers: [logger_service_1.LoggerService]
    }),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], CounterParentComponent);
exports.CounterParentComponent = CounterParentComponent;
//# sourceMappingURL=counter.component.js.map