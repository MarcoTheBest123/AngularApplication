import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Prodotto } from '../dati/product.data';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  items: Prodotto[] = []
  total: number

  checkOutForm: FormGroup

  constructor(private cartService: CartService,
              private router: Router) {
    this.total = this.items.reduce((accumulator, obj) =>{
      return accumulator + obj.prezzo
    }, 0)

    this.checkOutForm = new FormGroup({
      "firstname": new FormControl("", Validators.required),
      "lastname": new FormControl("", Validators.required),
      "username": new FormControl("", Validators.required),
      "email": new FormControl("", Validators.email),
      "address": new FormControl("", Validators.required),
      "country": new FormControl("Chose...", Validators.required),
      "cc-name": new FormControl("", Validators.required),
      "cc-number": new FormControl("", [Validators.required, Validators.min(1111111111111111), Validators.max(9999999999999999)]),
      "cc-expiration": new FormControl("", Validators.required),
      "cc-cvv": new FormControl("", [Validators.required, Validators.min(111), Validators.max(999)])
    })
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems()
  }

  checkout(){
    this.cartService.clearCart()
    window.alert("Your order has been registered")
    this.router.navigate(["/"])
  }

}
