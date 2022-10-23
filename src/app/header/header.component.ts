import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ricerca: string = ""
  subscription?: Subscription
  LoggedIn: boolean

  constructor(private auth: AuthService) {
    this.LoggedIn = auth.isLogged
  }

  ngOnInit(): void {
  }

}
