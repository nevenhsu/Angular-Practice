import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap
        .subscribe( params => {
          const username = params.get('username');
          });
  }

  submit() {
    this.router.navigate(['followers'],{
      queryParams: {
        page: 2,
        order: 'newest'
      }
    });
  }

}
