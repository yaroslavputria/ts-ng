import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ActivatedRouteSnapshot, ActivatedRouterState } from '@angular/router';

@Component({
    selector: 'task-details-cmp',
    template: `<div class="task-details">I am TaskDetailsComponent <span class="param-id">{{id}}</span></div>`,
    styles: [`
        .task-details {
            height: 100px;
            width: 150px;
            border: 1px solid red;
        }
        .param-id {
            color: red;
            font-size: 35px;
        }
    `]
})
export class TaskDetailsComponent implements OnInit {
    snapshot: ActivatedRouteSnapshot;
    constructor(private route: ActivatedRoute) {
        this.snapshot = route.snapshot;
    }

    id;

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.id = params['id'];
        });
    }

    /*
    interface ActivatedRoute {
      snapshot: ActivatedRouteSnapshot

      url: Observable<UrlSegment[]>
      params: Observable<Params>
      queryParams: Observable<Params>
      data: Observable<Data>
      routeConfig: Route

      root: ActivatedRoute
      parent: ActivatedRoute
      firstChild: ActivatedRoute
      children: ActivatedRoute[]
    }
    */

}