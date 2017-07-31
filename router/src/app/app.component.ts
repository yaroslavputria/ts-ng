import { Component, VERSION, ChangeDetectorRef, Renderer2 } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
        <h1>Hello {{name}}</h1>
        <span adir>A directive changes color to green</span>
        <a-comp></a-comp>
        <div ninja></div>
        <button (click)="toggleDiv()">Toggle that div!</button>
        <div *myNgIf="show; let tplbla=bla; let impls">Div with my ngIf directive! {{tplbla}} and {{impls}}</div>
        
        <div *ngIf="showDoubleDiv" class="double-div">
            <double-div [divInnerElements]="els"></double-div>
        </div>
        
        <ul>
            <b>List rendered by my custom ngFor:</b>
            <li *myNgFor="let item of myList">{{item.a}}</li>
        </ul>
    `,
    styles: ['.double-div {border: 1px solid green}']
})
export class AppComponent {
    name = `Angular! v${VERSION.full}`;
    show = true;
    showDoubleDiv = true;
    toggleDiv() {
        this.show = !this.show;
    }
    constructor(cd: ChangeDetectorRef, private re: Renderer2) {
        //cd.detectChanges(); // manually start change detection
        setTimeout(() => {
            this.myList.push({a: 4});
        }, 3000);
        setTimeout(() => {
            this.myList.splice(2, 1);
        }, 5000);
        setTimeout(() => {
            this.showDoubleDiv = false;
        }, 5000)
    }

    myList = [
        {a: 1},
        {a: 2},
        {a: 3}
    ];
    els = [this.re.createElement('span', 'for first div'), this.re.createElement('span', 'for second div')]; // but how to pass it in tag directive as Input or in another way
}
