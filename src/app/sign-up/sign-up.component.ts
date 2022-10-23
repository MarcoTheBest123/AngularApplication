import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

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
