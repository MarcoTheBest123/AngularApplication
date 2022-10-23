import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = false

  constructor(private router: Router) { }

  login(){
    this.isLogged = true
    this.router.navigate(["/"])
  }

  logout(){
    this.isLogged = false
  }

  isAutenticated(){
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLogged)
      }, 1000)
    })

    return promise
  }

}
