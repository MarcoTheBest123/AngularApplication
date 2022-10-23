import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../cart.service';
import { Prodotto } from '../dati/product.data';
import { ProductServiceService } from '../product-service.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  prodotto?: Prodotto
  subscription?: Subscription

  prodottiSimili?: Prodotto[]

  colors: string[] = [
    '#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'
  ];

  selectedColor = this.colors[0];

  constructor(private route: ActivatedRoute,
              private productService: ProductServiceService,
              private router: Router,
              private cartService: CartService) {

    this.subscription = route.params.subscribe(params => {
      const { nome } = params
      this.prodotto = productService.cercaProdotto(nome)
    })

    this.prodottiSimili = productService.cercaProdSimili(this.prodotto?.categoria as string)

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  addToCart(){
    this.cartService.addToCart(this.prodotto!)
    window.alert("This product has been added to your cart!")
  }

}
