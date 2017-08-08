import { Component } from '@angular/core';

class Hero {
    constructor(
        public id: number,
        public name: string,
        public power: string,
        public alterEgo?: string
    ) {  }
}

@Component({
    selector: 'forms-cmp',
    template: `
        <div class="bordered">
            <input #box
                (keyup.enter)="update(box.value)"
                (blur)="update(box.value)">
            <p>{{value}}</p>

            <div class="container">
                <div [hidden]="submitted">
                    <h1>Hero Form</h1>
                    <form (ngSubmit)="onSubmit()" #heroForm="ngForm">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name"
                                required
                                [(ngModel)]="model.name" name="name"
                                #name="ngModel">
                            <div [hidden]="name.valid || name.pristine"
                                class="alert alert-danger">
                                Name is required
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="alterEgo">Alter Ego</label>
                            <input type="text" class="form-control" id="alterEgo"
                                [(ngModel)]="model.alterEgo" name="alterEgo">
                        </div>

                    <div class="form-group">
                        <label for="power">Hero Power</label>
                        <select class="form-control" id="power"
                                required
                                [(ngModel)]="model.power" name="power"
                                #power="ngModel">
                            <option *ngFor="let pow of powers" [value]="pow">{{pow}}</option>
                        </select>
                        <div [hidden]="power.valid || power.pristine" class="alert alert-danger">
                            Power is required
                        </div>
                    </div>

                    <button type="submit" class="btn btn-success" [disabled]="!heroForm.form.valid">Submit</button>
                    <button type="button" class="btn btn-default" (click)="newHero(); heroForm.reset()">New Hero</button>
                </form>
                </div>

                <div [hidden]="!submitted">
                    <h2>You submitted the following:</h2>
                    <div class="row">
                        <div class="col-xs-3">Name</div>
                        <div class="col-xs-9  pull-left">{{ model.name }}</div>
                    </div>
                    <div class="row">
                        <div class="col-xs-3">Alter Ego</div>
                        <div class="col-xs-9 pull-left">{{ model.alterEgo }}</div>
                    </div>
                    <div class="row">
                        <div class="col-xs-3">Power</div>
                        <div class="col-xs-9 pull-left">{{ model.power }}</div>
                    </div>
                    <br>
                    <button class="btn btn-primary" (click)="submitted=false">Edit</button>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./css/bootstrap.min.css']
})
export class FormsComponent {
    value = '';
    update(v) { this.value = v; }
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];

    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() { this.submitted = true; }

    newHero() {
        this.model = new Hero(42, '', '');
    }
}
