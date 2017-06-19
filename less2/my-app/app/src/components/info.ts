import {Component} from "@angular/core"

@Component({
    selector: 'info-cmp',
    template: '<h1>{{name}} is here!</h1>'
})
export class InfoCmp {
    name = 'new cmp ';
}