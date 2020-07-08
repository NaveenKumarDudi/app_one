import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  signin: boolean = true;
  signup: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // On url traverse
    if (this.activatedRoute?.routeConfig?.path === 'signin') {
      this.signin = true;
      this.signup = false;
    } else {
      this.signin = false;
      this.signup = true;
    }
  }

  toggleBlock(name: string) {
    if (name === 'signin') {
      this.signin = true;
      this.signup = false;
    } else {
      this.signin = false;
      this.signup = true;
    }
  }

}
