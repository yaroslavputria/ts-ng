import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GithubService } from '../../services/github.service';

@Component({
    selector: 'github-users-info',
    templateUrl: './github-users-info.component.html',
    styles: [``]
})
export class GithubUsersInfoCmp implements OnInit {
    repos;
    userName: string = 'yaroslavputria';
    constructor(private location: Location, private githubService: GithubService) {

    }
    updateRepos() {
        this.githubService.getReposListPromise(this.userName)
            .then(repos => this.repos = repos);
    }
    ngOnInit() {
        this.updateRepos();
    }
    back(): void {
        this.location.back();
    }

}
