import { Component, OnInit } from '@angular/core';
import { GithubProfileService } from '../services/github-profile.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import { switchMap } from 'rxjs/operators/switchMap';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
      private route: ActivatedRoute,
      private service: GithubProfileService) { }

  ngOnInit() {
    Observable.combineLatest(
        this.route.paramMap,
        this.route.queryParamMap
    ).pipe(
        switchMap(combined => {
          const id = combined[0].get('id');
          const page = combined[1].get('page');
          console.log(id, page);

          return this.service.getAll<any[]>();
        })
    )
        .subscribe(followers => {
          this.followers = followers;
    });
  }

}
