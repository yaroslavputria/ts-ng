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
//////////////////
var ChildViewComponent = (function () {
    function ChildViewComponent() {
        this.hero = 'Magneta';
    }
    return ChildViewComponent;
}());
ChildViewComponent = __decorate([
    core_1.Component({
        selector: 'my-child-view',
        template: '<input [(ngModel)]="hero">'
    })
], ChildViewComponent);
exports.ChildViewComponent = ChildViewComponent;
//////////////////////
var AfterViewComponent = (function () {
    function AfterViewComponent(logger) {
        this.logger = logger;
        this.prevHero = '';
        this.comment = '';
        this.logIt('AfterView constructor');
    }
    AfterViewComponent.prototype.ngAfterViewInit = function () {
        // viewChild is set after the view has been initialized
        this.logIt('AfterViewInit');
        this.doSomething();
    };
    AfterViewComponent.prototype.ngAfterViewChecked = function () {
        // viewChild is updated after the view has been checked
        if (this.prevHero === this.viewChild.hero) {
            this.logIt('AfterViewChecked (no change)');
        }
        else {
            this.prevHero = this.viewChild.hero;
            this.logIt('AfterViewChecked');
            this.doSomething();
        }
    };
    // This surrogate for real business logic sets the `comment`
    AfterViewComponent.prototype.doSomething = function () {
        var _this = this;
        var c = this.viewChild.hero.length > 10 ? "That's a long name" : '';
        if (c !== this.comment) {
            // Wait a tick because the component's view has already been checked
            this.logger.tick_then(function () { return _this.comment = c; });
        }
    };
    AfterViewComponent.prototype.logIt = function (method) {
        var child = this.viewChild;
        var message = method + ": " + (child ? child.hero : 'no') + " child view";
        this.logger.log(message);
    };
    return AfterViewComponent;
}());
__decorate([
    core_1.ViewChild(ChildViewComponent),
    __metadata("design:type", ChildViewComponent)
], AfterViewComponent.prototype, "viewChild", void 0);
AfterViewComponent = __decorate([
    core_1.Component({
        selector: 'after-view',
        template: "\n    <div>-- child view begins --</div>\n      <my-child-view></my-child-view>\n    <div>-- child view ends --</div>"
            + "\n    <p *ngIf=\"comment\" class=\"comment\">\n      {{comment}}\n    </p>\n  "
    }),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], AfterViewComponent);
exports.AfterViewComponent = AfterViewComponent;
//////////////
var AfterViewParentComponent = (function () {
    function AfterViewParentComponent(logger) {
        this.logger = logger;
        this.show = true;
        this.logs = logger.logs;
    }
    AfterViewParentComponent.prototype.reset = function () {
        var _this = this;
        this.logs.length = 0;
        // quickly remove and reload AfterViewComponent which recreates it
        this.show = false;
        this.logger.tick_then(function () { return _this.show = true; });
    };
    return AfterViewParentComponent;
}());
AfterViewParentComponent = __decorate([
    core_1.Component({
        selector: 'after-view-parent',
        template: "\n  <div class=\"parent\">\n    <h2>AfterView</h2>\n\n    <after-view  *ngIf=\"show\"></after-view>\n\n    <h4>-- AfterView Logs --</h4>\n    <p><button (click)=\"reset()\">Reset</button></p>\n    <div *ngFor=\"let msg of logs\">{{msg}}</div>\n  </div>\n  ",
        styles: ['.parent {background: burlywood}'],
        providers: [logger_service_1.LoggerService]
    }),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], AfterViewParentComponent);
exports.AfterViewParentComponent = AfterViewParentComponent;
//# sourceMappingURL=after-view.component.js.map