import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BCmpComponent } from './b-cmp.component';

describe('BCmpComponent', () => {
    let component: BCmpComponent;
    let fixture: ComponentFixture<BCmpComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BCmpComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BCmpComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
