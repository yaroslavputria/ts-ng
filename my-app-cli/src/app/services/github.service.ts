import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const rootEndpoint = 'https://api.github.com';

@Injectable()
export class GithubService {
    constructor(private http: Http) {}
    private headers = new Headers({'Content-Type': 'application/json'});//just for example
    getReposListPromise(user: string): Promise<any[]> {
        return this.http.get(`${rootEndpoint}/users/${user}/repos`)
            .toPromise()
            .then(res => res.json())
            .catch(err => {
                console.dir(err);
                return Promise.resolve([]);
            });
    }
    // create(name: string): Promise<Hero> {
    //     return this.http
    //         .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
    //         .toPromise()
    //         .then(res => res.json().data as Hero)
    //         .catch(this.handleError);
    // }

}
