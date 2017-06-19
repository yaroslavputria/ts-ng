import { Component } from "@angular/core"

@Component({
    selector: 'app-cmp',
    template: '<h1>{{name}} is here!</h1>'
})
export class AppCmp {
    name = 'Angular';
}