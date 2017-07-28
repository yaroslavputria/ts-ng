import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
declare var Promise: any;
@Injectable()
export class MessageResolver implements Resolve<any> {
    constructor() {
        debugger;
    }

    resolve(route: ActivatedRouteSnapshot) {
        return Promise.resolve('some data');
    }
}
