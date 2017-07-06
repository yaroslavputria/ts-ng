"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var PeekABoo = (function () {
    function PeekABoo(logger) {
        this.logger = logger;
    }
    // implement OnInit's `ngOnInit` method
    PeekABoo.prototype.ngOnInit = function () { this.logIt("OnInit"); };
    PeekABoo.prototype.logIt = function (msg) {
        this.logger.log("#" + nextId++ + " " + msg);
    };
    return PeekABoo;
}());
exports.PeekABoo = PeekABoo;
var PeekABooComponent = (function (_super) {
    __extends(PeekABooComponent, _super);
    function PeekABooComponent(logger) {
        var _this = _super.call(this, logger) || this;
        _this.verb = 'initialized';
        var is = _this.name ? 'is' : 'is not';
        _this.logIt("name " + is + " known at construction");
        return _this;
    }
    // only called for/if there is an @input variable set by parent.
    PeekABooComponent.prototype.ngOnChanges = function (changes) {
        var changesMsgs = [];
        for (var propName in changes) {
            if (propName === 'name') {
                var name_1 = changes['name'].currentValue;
                changesMsgs.push("name " + this.verb + " to \"" + name_1 + "\"");
            }
            else {
                changesMsgs.push(propName + ' ' + this.verb);
            }
        }
        this.logIt("OnChanges: " + changesMsgs.join('; '));
        this.verb = 'changed'; // next time it will be a change
    };
    // Beware! Called frequently!
    // Called in every change detection cycle anywhere on the page
    PeekABooComponent.prototype.ngDoCheck = function () { this.logIt("DoCheck"); };
    PeekABooComponent.prototype.ngAfterContentInit = function () { this.logIt("AfterContentInit"); };
    // Beware! Called frequently!
    // Called in every change detection cycle anywhere on the page
    PeekABooComponent.prototype.ngAfterContentChecked = function () { this.logIt("AfterContentChecked"); };
    PeekABooComponent.prototype.ngAfterViewInit = function () { this.logIt("AfterViewInit"); };
    // Beware! Called frequently!
    // Called in every change detection cycle anywhere on the page
    PeekABooComponent.prototype.ngAfterViewChecked = function () { this.logIt("AfterViewChecked"); };
    PeekABooComponent.prototype.ngOnDestroy = function () { this.logIt("OnDestroy"); };
    return PeekABooComponent;
}(PeekABoo));
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PeekABooComponent.prototype, "name", void 0);
PeekABooComponent = __decorate([
    core_1.Component({
        selector: 'peek-a-boo',
        template: '<p>Now you see my hero, {{name}}</p>',
        styles: ['p {background: LightYellow; padding: 8px}']
    })
    // Don't HAVE to mention the Lifecycle Hook interfaces
    // unless we want typing and tool support.
    ,
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], PeekABooComponent);
exports.PeekABooComponent = PeekABooComponent;
//# sourceMappingURL=peek-a-boo.component.js.map