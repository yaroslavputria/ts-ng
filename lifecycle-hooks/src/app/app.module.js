"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var after_content_component_1 = require("./after-content.component");
var after_view_component_1 = require("./after-view.component");
var counter_component_1 = require("./counter.component");
var do_check_component_1 = require("./do-check.component");
var on_changes_component_1 = require("./on-changes.component");
var peek_a_boo_parent_component_1 = require("./peek-a-boo-parent.component");
var peek_a_boo_component_1 = require("./peek-a-boo.component");
var spy_component_1 = require("./spy.component");
var spy_directive_1 = require("./spy.directive");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            after_content_component_1.AfterContentParentComponent,
            after_content_component_1.AfterContentComponent,
            after_content_component_1.ChildComponent,
            after_view_component_1.AfterViewParentComponent,
            after_view_component_1.AfterViewComponent,
            after_view_component_1.ChildViewComponent,
            counter_component_1.CounterParentComponent,
            counter_component_1.MyCounterComponent,
            do_check_component_1.DoCheckParentComponent,
            do_check_component_1.DoCheckComponent,
            on_changes_component_1.OnChangesParentComponent,
            on_changes_component_1.OnChangesComponent,
            peek_a_boo_parent_component_1.PeekABooParentComponent,
            peek_a_boo_component_1.PeekABooComponent,
            spy_component_1.SpyParentComponent,
            spy_directive_1.SpyDirective
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map