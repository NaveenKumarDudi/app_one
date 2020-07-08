import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  signin: boolean = true;
  signup: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {

    // IF user is authenticated redirect to home
    this.userService.getIsAuthenticated().subscribe(
      (data) => {
        if (data) {
          this.router.navigate(['']);
        }
      }
    )

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
