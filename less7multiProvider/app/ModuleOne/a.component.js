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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AComponent = (function () {
    function AComponent(items) {
        this.items = items;
    }
    AComponent = __decorate([
        core_1.Component({
            selector: 'a-cmp-one',
            template: "\n        <div style=\"border: 1px solid blue;\">\n            <div>I am A Component module One</div>\n            <ul>\n                <li *ngFor=\"let item of items\">{{item}}</li>\n            </ul>\n        </div>\n    ",
            providers: [
                { provide: 'common-token', useValue: "from module one component \"a-cmp-one\", and it rewrote multi-provider", multi: true } //provider in component can't be "multi", it always rewrites provider
            ]
        }),
        __param(0, core_1.Inject('common-token')),
        __metadata("design:paramtypes", [Object])
    ], AComponent);
    return AComponent;
}());
exports.AComponent = AComponent;
//# sourceMappingURL=a.component.js.map