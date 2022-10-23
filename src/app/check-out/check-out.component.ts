import { Component, OnInit } from '@angular/core';
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

  constructor(private cartService: CartService,
              private router: Router) {
    this.total = this.items.reduce((accumulator, obj) =>{
      return accumulator + obj.prezzo
    }, 0)
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
