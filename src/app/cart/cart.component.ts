import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Prodotto } from '../dati/product.data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Prodotto[] = []

  constructor(private cartService: CartService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.products = this.cartService.getItems()
    console.log("Products" + this.products);

  }

  goToCheckout(){
    this.router.navigate(["/checkout"])
  }

  clear(){
    this.cartService.clearCart();
    this.products = this.cartService.getItems();
  }

}
