import { Component, VERSION, ChangeDetectorRef } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
        <h1>Hello {{name}}</h1>
        <span adir>A directive changes color to green</span>
        <a-comp></a-comp>
        <div ninja></div>
        <button (click)="toggleDiv()">Toggle that div!</button>
        <div *myNgIf="show; let tplbla=bla; let impls">Div with my ngIf directive! {{tplbla}} and {{impls}}</div>

        <ul *myNgFor="let item of myList">
            <li>{{item.a}}</li>
        </ul>
    `,
    styles: ['']
})
export class AppComponent {
    name = `Angular! v${VERSION.full}`;
    show = true;
    toggleDiv() {
        this.show = !this.show;
    }
    constructor(cd: ChangeDetectorRef) {
        //cd.detectChanges(); // manually start change detection
        setTimeout(() => {
            this.myList.push({a: 4});
        }, 3000);
        setTimeout(() => {
            this.myList.splice(2, 1);
        }, 5000);
    }

    myList = [
        {a: 1},
        {a: 2},
        {a: 3}
    ];
}
