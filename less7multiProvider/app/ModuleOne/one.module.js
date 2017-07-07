"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var a_component_1 = require("./a.component");
var ModuleOne = (function () {
    function ModuleOne() {
    }
    ModuleOne = __decorate([
        core_1.NgModule({
            declarations: [
                a_component_1.AComponent
            ],
            imports: [
                common_1.CommonModule
            ],
            exports: [
                a_component_1.AComponent
            ],
            providers: [
                { provide: 'common-token', useValue: 'frome module one', multi: true }
            ]
        })
    ], ModuleOne);
    return ModuleOne;
}());
exports.ModuleOne = ModuleOne;
//# sourceMappingURL=one.module.js.map