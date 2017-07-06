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
var SpyParentComponent = (function () {
    function SpyParentComponent(logger) {
        this.logger = logger;
        this.newName = 'Herbie';
        this.heroes = ['Windstorm', 'Magneta'];
        this.spyLog = logger.logs;
    }
    SpyParentComponent.prototype.addHero = function () {
        if (this.newName.trim()) {
            this.heroes.push(this.newName.trim());
            this.newName = '';
            this.logger.tick();
        }
    };
    SpyParentComponent.prototype.removeHero = function (hero) {
        this.heroes.splice(this.heroes.indexOf(hero), 1);
        this.logger.tick();
    };
    SpyParentComponent.prototype.reset = function () {
        this.logger.log('-- reset --');
        this.heroes.length = 0;
        this.logger.tick();
    };
    return SpyParentComponent;
}());
SpyParentComponent = __decorate([
    core_1.Component({
        selector: 'spy-parent',
        templateUrl: './spy.component.html',
        styles: [
            '.parent {background: khaki;}',
            '.heroes {background: LightYellow; padding: 0 8px}'
        ],
        providers: [logger_service_1.LoggerService]
    }),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], SpyParentComponent);
exports.SpyParentComponent = SpyParentComponent;
//# sourceMappingURL=spy.component.js.map