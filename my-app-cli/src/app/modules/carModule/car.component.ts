import { Component, Inject, SkipSelf, Self, Optional, forwardRef } from '@angular/core';

import { CarService } from './car.service';

import { Engine } from './engine.service';
import { Tires } from './tires.service';
import { Doors } from './doors.service';

import { engineStringToken } from './car.service';
import { TIRES_TOKEN } from './car.service';

@Component({
    selector: 'car-cmp',
    template: `
        <div>It's came from CarModule to show "Dependency Injection" (see console logs)</div>
        <bla-cmp></bla-cmp>
    `
})
export class CarComponent {
    //tsconfig.json: "emitDecoratorMetadata": true
    constructor(@Inject(CarService) carService) {//we pass token in @Inject() to get provider
    //constructor(carService: CarService) {//

    // @Self, @Optional, @SkipSelf, @Host : constructor (@Optional() @SkipSelf() parentModule: CoreModule) {

        const injector = carService.injector;
        //injector.get - returns created instanse of class not class
        const engine = injector.get(engineStringToken);//we pass token in custom function
        const tires = injector.get(TIRES_TOKEN);
        const doors = injector.get(Doors);

        console.log(engine.name);
        console.log(tires.name);
        console.log(doors.name);

        //======================

        const fromTmpTokenUseValue = injector.get('tmpToken');
        console.log(fromTmpTokenUseValue.bla);

        const fromTmpTokenUseFactory = injector.get('byFactory');
        console.log(fromTmpTokenUseFactory);

        const fromUseExistingDoors = injector.get('useExistingDoors');
        console.log(fromUseExistingDoors === doors);//true

        const fromMultiProvider = injector.get('multiProvider');
        fromMultiProvider.forEach(instance => console.log(instance));//1 2
    }
}

@Component({
    selector: 'bla-cmp',
    template: '<div></div>',
    providers: [
        { provide: 'a', useValue: 'a provider from bla-cmp' },
        { provide: forwardRef(() => 'b'), useValue: 'b provider with "forwardRef" from bla-cmp' }//callback in forwardRef returns token which will be created after registring this provider (there is string token just for example)
    ],
    viewProviders: [
        { provide: 'c', useValue: 'there is no access from content children components' }//encapsulated from content children
    ]
})
export class BlaCmp {
    constructor(@Optional() @SkipSelf() @Inject('a') pA, @Inject('b') pB) {
        console.log(pA);//from root
        console.log(pB);
    }
}

// instances that we can injected in component:
//     - Injector
//     - Compiler
//     - Renderer
//     - ElementRef
//     - ViewContainer
//     - TemplateRef
//     - parent component (AppComponent for example)
//     - changeDetectorRef
//     - ApplicationRef
//     - Document
//     ...

// (1:49:16 - 1:52:21)

// 1. 3 modules: AppModule and 2 custom
// 2. In every module register some items (objects) by the common token (multi: true)
// 3. There are cmps in both modules
// 4. Both components register this items and show them by ngFor in template
// 5. In one component register the same items
// } catch (e) {

// }
