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
var ChildComponent = (function () {
    function ChildComponent() {
        this.hero = 'Magneta';
    }
    return ChildComponent;
}());
ChildComponent = __decorate([
    core_1.Component({
        selector: 'my-child',
        template: '<input [(ngModel)]="hero">'
    })
], ChildComponent);
exports.ChildComponent = ChildComponent;
//////////////////////
var AfterContentComponent = (function () {
    function AfterContentComponent(logger) {
        this.logger = logger;
        this.prevHero = '';
        this.comment = '';
        this.logIt('AfterContent constructor');
    }
    AfterContentComponent.prototype.ngAfterContentInit = function () {
        // contentChild is set after the content has been initialized
        this.logIt('AfterContentInit');
        this.doSomething();
    };
    AfterContentComponent.prototype.ngAfterContentChecked = function () {
        // contentChild is updated after the content has been checked
        if (this.prevHero === this.contentChild.hero) {
            this.logIt('AfterContentChecked (no change)');
        }
        else {
            this.prevHero = this.contentChild.hero;
            this.logIt('AfterContentChecked');
            this.doSomething();
        }
    };
    // This surrogate for real business logic sets the `comment`
    AfterContentComponent.prototype.doSomething = function () {
        this.comment = this.contentChild.hero.length > 10 ? "That's a long name" : '';
    };
    AfterContentComponent.prototype.logIt = function (method) {
        var child = this.contentChild;
        var message = method + ": " + (child ? child.hero : 'no') + " child content";
        this.logger.log(message);
    };
    return AfterContentComponent;
}());
__decorate([
    core_1.ContentChild(ChildComponent),
    __metadata("design:type", ChildComponent)
], AfterContentComponent.prototype, "contentChild", void 0);
AfterContentComponent = __decorate([
    core_1.Component({
        selector: 'after-content',
        template: "\n    <div>-- projected content begins --</div>\n      <ng-content></ng-content>\n    <div>-- projected content ends --</div>"
            + "\n    <p *ngIf=\"comment\" class=\"comment\">\n      {{comment}}\n    </p>\n  "
    }),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], AfterContentComponent);
exports.AfterContentComponent = AfterContentComponent;
//////////////
var AfterContentParentComponent = (function () {
    function AfterContentParentComponent(logger) {
        this.logger = logger;
        this.show = true;
        this.logs = logger.logs;
    }
    AfterContentParentComponent.prototype.reset = function () {
        var _this = this;
        this.logs.length = 0;
        // quickly remove and reload AfterContentComponent which recreates it
        this.show = false;
        this.logger.tick_then(function () { return _this.show = true; });
    };
    return AfterContentParentComponent;
}());
AfterContentParentComponent = __decorate([
    core_1.Component({
        selector: 'after-content-parent',
        template: "\n  <div class=\"parent\">\n    <h2>AfterContent</h2>\n\n    <div *ngIf=\"show\">" +
            "<after-content>\n        <my-child></my-child>\n      </after-content>"
            + "</div>\n\n    <h4>-- AfterContent Logs --</h4>\n    <p><button (click)=\"reset()\">Reset</button></p>\n    <div *ngFor=\"let msg of logs\">{{msg}}</div>\n  </div>\n  ",
        styles: ['.parent {background: burlywood}'],
        providers: [logger_service_1.LoggerService]
    }),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], AfterContentParentComponent);
exports.AfterContentParentComponent = AfterContentParentComponent;
//# sourceMappingURL=after-content.component.js.map