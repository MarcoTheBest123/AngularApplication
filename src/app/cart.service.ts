import { Injectable } from '@angular/core';
import { Prodotto } from './dati/product.data';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Prodotto[] = []

  constructor() { }

  addToCart(product: Prodotto){
    this.items.push(product)
  }

  getItems(){
    return this.items
  }

  clearCart(){
    this.items = []
    return this.items
  }

}
