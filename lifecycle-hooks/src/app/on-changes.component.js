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
/* tslint:disable:forin */
var core_1 = require("@angular/core");
var Hero = (function () {
    function Hero(name) {
        this.name = name;
    }
    return Hero;
}());
var OnChangesComponent = (function () {
    function OnChangesComponent() {
        this.changeLog = [];
    }
    OnChangesComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            var chng = changes[propName];
            var cur = JSON.stringify(chng.currentValue);
            var prev = JSON.stringify(chng.previousValue);
            this.changeLog.push(propName + ": currentValue = " + cur + ", previousValue = " + prev);
        }
    };
    OnChangesComponent.prototype.reset = function () { this.changeLog.length = 0; };
    return OnChangesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Hero)
], OnChangesComponent.prototype, "hero", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], OnChangesComponent.prototype, "power", void 0);
OnChangesComponent = __decorate([
    core_1.Component({
        selector: 'on-changes',
        template: "\n  <div class=\"hero\">\n    <p>{{hero.name}} can {{power}}</p>\n\n    <h4>-- Change Log --</h4>\n    <div *ngFor=\"let chg of changeLog\">{{chg}}</div>\n  </div>\n  ",
        styles: [
            '.hero {background: LightYellow; padding: 8px; margin-top: 8px}',
            'p {background: Yellow; padding: 8px; margin-top: 8px}'
        ]
    })
], OnChangesComponent);
exports.OnChangesComponent = OnChangesComponent;
/***************************************/
var OnChangesParentComponent = (function () {
    function OnChangesParentComponent() {
        this.title = 'OnChanges';
        this.reset();
    }
    OnChangesParentComponent.prototype.reset = function () {
        // new Hero object every time; triggers onChanges
        this.hero = new Hero('Windstorm');
        // setting power only triggers onChanges if this value is different
        this.power = 'sing';
        if (this.childView) {
            this.childView.reset();
        }
    };
    return OnChangesParentComponent;
}());
__decorate([
    core_1.ViewChild(OnChangesComponent),
    __metadata("design:type", OnChangesComponent)
], OnChangesParentComponent.prototype, "childView", void 0);
OnChangesParentComponent = __decorate([
    core_1.Component({
        selector: 'on-changes-parent',
        templateUrl: './on-changes-parent.component.html',
        styles: ['.parent {background: Lavender;}']
    }),
    __metadata("design:paramtypes", [])
], OnChangesParentComponent);
exports.OnChangesParentComponent = OnChangesParentComponent;
//# sourceMappingURL=on-changes.component.js.map