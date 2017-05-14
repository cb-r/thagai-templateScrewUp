import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public loginVisible:boolean=true;
 public emailVisble:boolean=false;
 public forgotPasswordText:string="Forgot Password?"
  constructor() { }

  ngOnInit() {
  }

 public onForgotClick(value:any){
   this.emailVisble=true;
   this.loginVisible=false;
   this.forgotPasswordText="Send Password to my email"
   console.log(value)
 }
}
