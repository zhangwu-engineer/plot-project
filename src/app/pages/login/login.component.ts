import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(public router: Router) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  login() {
    this.router.navigate(["/scenarios"]);
  }

}
