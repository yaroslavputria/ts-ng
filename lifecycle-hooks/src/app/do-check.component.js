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
var DoCheckComponent = (function () {
    function DoCheckComponent() {
        this.changeDetected = false;
        this.changeLog = [];
        this.oldHeroName = '';
        this.oldPower = '';
        this.oldLogLength = 0;
        this.noChangeCount = 0;
    }
    DoCheckComponent.prototype.ngDoCheck = function () {
        if (this.hero.name !== this.oldHeroName) {
            this.changeDetected = true;
            this.changeLog.push("DoCheck: Hero name changed to \"" + this.hero.name + "\" from \"" + this.oldHeroName + "\"");
            this.oldHeroName = this.hero.name;
        }
        if (this.power !== this.oldPower) {
            this.changeDetected = true;
            this.changeLog.push("DoCheck: Power changed to \"" + this.power + "\" from \"" + this.oldPower + "\"");
            this.oldPower = this.power;
        }
        if (this.changeDetected) {
            this.noChangeCount = 0;
        }
        else {
            // log that hook was called when there was no relevant change.
            var count = this.noChangeCount += 1;
            var noChangeMsg = "DoCheck called " + count + "x when no change to hero or power";
            if (count === 1) {
                // add new "no change" message
                this.changeLog.push(noChangeMsg);
            }
            else {
                // update last "no change" message
                this.changeLog[this.changeLog.length - 1] = noChangeMsg;
            }
        }
        this.changeDetected = false;
    };
    DoCheckComponent.prototype.reset = function () {
        this.changeDetected = true;
        this.changeLog.length = 0;
    };
    return DoCheckComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Hero)
], DoCheckComponent.prototype, "hero", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DoCheckComponent.prototype, "power", void 0);
DoCheckComponent = __decorate([
    core_1.Component({
        selector: 'do-check',
        template: "\n  <div class=\"hero\">\n    <p>{{hero.name}} can {{power}}</p>\n\n    <h4>-- Change Log --</h4>\n    <div *ngFor=\"let chg of changeLog\">{{chg}}</div>\n  </div>\n  ",
        styles: [
            '.hero {background: LightYellow; padding: 8px; margin-top: 8px}',
            'p {background: Yellow; padding: 8px; margin-top: 8px}'
        ]
    })
], DoCheckComponent);
exports.DoCheckComponent = DoCheckComponent;
/***************************************/
var DoCheckParentComponent = (function () {
    function DoCheckParentComponent() {
        this.title = 'DoCheck';
        this.reset();
    }
    DoCheckParentComponent.prototype.reset = function () {
        this.hero = new Hero('Windstorm');
        this.power = 'sing';
        if (this.childView) {
            this.childView.reset();
        }
    };
    return DoCheckParentComponent;
}());
__decorate([
    core_1.ViewChild(DoCheckComponent),
    __metadata("design:type", DoCheckComponent)
], DoCheckParentComponent.prototype, "childView", void 0);
DoCheckParentComponent = __decorate([
    core_1.Component({
        selector: 'do-check-parent',
        templateUrl: './do-check-parent.component.html',
        styles: ['.parent {background: Lavender}']
    }),
    __metadata("design:paramtypes", [])
], DoCheckParentComponent);
exports.DoCheckParentComponent = DoCheckParentComponent;
//# sourceMappingURL=do-check.component.js.map