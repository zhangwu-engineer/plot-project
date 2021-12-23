import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

//declare var $: any;

@Component({
  selector: "app-auth-layout",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthLayoutComponent implements OnInit {

  constructor(public router: Router) {}
 
  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
