import { Resolve, ActivatedRouteSnapshot, RouteStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class MessageResolver implements Resolve {
    constructor() {
        debugger;
    }

    resolve(route: ActivatedRouteSnapshot, state: RouteStateSnapshot) {
        return Promise.resolve('some data');
    }
}
