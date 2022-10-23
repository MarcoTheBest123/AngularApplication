import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit, DoCheck {

  loginForm: FormGroup

  constructor(private auth: AuthService) {
    this.loginForm = new FormGroup({
      "email": new FormControl("", [Validators.required, Validators.email]),
      "password": new FormControl("", Validators.required)
    })
  }

  ngOnInit(): void {
  }

  logged(){
    this.auth.login()
  }

  ngDoCheck(): void {
    console.log("loginForm", this.loginForm);
  }

  onSubmit(){
    console.log(this.loginForm);

  }

}
