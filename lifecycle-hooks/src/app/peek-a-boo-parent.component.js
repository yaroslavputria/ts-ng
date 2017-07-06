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
var PeekABooParentComponent = (function () {
    function PeekABooParentComponent(logger) {
        this.hasChild = false;
        this.heroName = 'Windstorm';
        this.logger = logger;
        this.hookLog = logger.logs;
    }
    PeekABooParentComponent.prototype.toggleChild = function () {
        this.hasChild = !this.hasChild;
        if (this.hasChild) {
            this.heroName = 'Windstorm';
            this.logger.clear(); // clear log on create
        }
        this.logger.tick();
    };
    PeekABooParentComponent.prototype.updateHero = function () {
        this.heroName += '!';
        this.logger.tick();
    };
    return PeekABooParentComponent;
}());
PeekABooParentComponent = __decorate([
    core_1.Component({
        selector: 'peek-a-boo-parent',
        template: "\n  <div class=\"parent\">\n    <h2>Peek-A-Boo</h2>\n\n    <button (click)=\"toggleChild()\">\n      {{hasChild ? 'Destroy' : 'Create'}} PeekABooComponent\n    </button>\n    <button (click)=\"updateHero()\" [hidden]=\"!hasChild\">Update Hero</button>\n\n    <peek-a-boo *ngIf=\"hasChild\" [name]=\"heroName\">\n    </peek-a-boo>\n\n    <h4>-- Lifecycle Hook Log --</h4>\n    <div *ngFor=\"let msg of hookLog\">{{msg}}</div>\n  </div>\n  ",
        styles: ['.parent {background: moccasin}'],
        providers: [logger_service_1.LoggerService]
    }),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], PeekABooParentComponent);
exports.PeekABooParentComponent = PeekABooParentComponent;
//# sourceMappingURL=peek-a-boo-parent.component.js.map