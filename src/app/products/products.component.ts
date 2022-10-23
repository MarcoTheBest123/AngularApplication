import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../dati/product.data';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  prodotti?: Prodotto[] = []
  ricerca: string = ""


  constructor(private productService: ProductServiceService) {
    this.prodotti = this.productService.prodotti


  }

  ngOnInit(): void {
  }

}


