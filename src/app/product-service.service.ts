import { Injectable } from '@angular/core';
import { Prodotto } from './dati/product.data';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  prodotti: Prodotto[] = [
    {codice:"001", nome:"Coffee Mug", categoria:"cup", descrizione:"With its clean lines and glossed glaze this ceramic mug is the perfect choice for displaying your brand. This type of gift is used frequently throughout the day and thus ensures maximum exposure.", foto:"../assets/images/cupImage.png", quantita: 12, colori: ['#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'], object: "../assets/cupL.glb", prezzo:34.99},
    {codice:"002", nome:"Coffee Cup", categoria:"cup", descrizione:"With its clean lines and glossed glaze this ceramic mug is the perfect choice for displaying your brand. This type of gift is used frequently throughout the day and thus ensures maximum exposure.", foto:"../assets/images/smallCupImage.png", quantita: 8, colori: ['#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'], object: "../assets/cupS.glb", prezzo:24.49},
    {codice:"003", nome:"Lenovo Laptop", categoria:"laptop", descrizione:"With its clean lines and glossed glaze this ceramic mug is the perfect choice for displaying your brand. This type of gift is used frequently throughout the day and thus ensures maximum exposure.", foto:"../assets/images/portatile.png", quantita: 7, colori: ['#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'], object: "../assets/laptop.glb", prezzo:1250.49},
    {codice:"004", nome:"Huawei Cover", categoria:"cover", descrizione:"With its clean lines and glossed glaze this ceramic mug is the perfect choice for displaying your brand. This type of gift is used frequently throughout the day and thus ensures maximum exposure.", foto:"../assets/images/huaweiCover.png", quantita: 10, colori: ['#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'], object: "../assets/huaweiCover.glb", prezzo:44.49},
    {codice:"001", nome:"Coffee Mug", categoria:"cup", descrizione:"With its clean lines and glossed glaze this ceramic mug is the perfect choice for displaying your brand. This type of gift is used frequently throughout the day and thus ensures maximum exposure.", foto:"../assets/images/cupImage.png", quantita: 12, colori: ['#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'], object: "../assets/cupL.glb", prezzo:34.99},
    {codice:"002", nome:"Coffee Cup", categoria:"cup", descrizione:"With its clean lines and glossed glaze this ceramic mug is the perfect choice for displaying your brand. This type of gift is used frequently throughout the day and thus ensures maximum exposure.", foto:"../assets/images/smallCupImage.png", quantita: 8, colori: ['#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'], object: "../assets/cupS.glb", prezzo:24.49},
    {codice:"003", nome:"Lenovo Laptop", categoria:"laptop", descrizione:"With its clean lines and glossed glaze this ceramic mug is the perfect choice for displaying your brand. This type of gift is used frequently throughout the day and thus ensures maximum exposure.", foto:"../assets/images/portatile.png", quantita: 7, colori: ['#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'], object: "../assets/laptop.glb", prezzo:1250.49},
    {codice:"004", nome:"Huawei Cover", categoria:"cover", descrizione:"With its clean lines and glossed glaze this ceramic mug is the perfect choice for displaying your brand. This type of gift is used frequently throughout the day and thus ensures maximum exposure.", foto:"../assets/images/huaweiCover.png", quantita: 10, colori: ['#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'], object: "../assets/huaweiCover.glb", prezzo:44.49},
    {codice:"001", nome:"Coffee Mug", categoria:"cup", descrizione:"With its clean lines and glossed glaze this ceramic mug is the perfect choice for displaying your brand. This type of gift is used frequently throughout the day and thus ensures maximum exposure.", foto:"../assets/images/cupImage.png", quantita: 12, colori: ['#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'], object: "../assets/cupL.glb", prezzo:34.99},
    {codice:"002", nome:"Coffee Cup", categoria:"cup", descrizione:"With its clean lines and glossed glaze this ceramic mug is the perfect choice for displaying your brand. This type of gift is used frequently throughout the day and thus ensures maximum exposure.", foto:"../assets/images/smallCupImage.png", quantita: 8, colori: ['#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'], object: "../assets/cupS.glb", prezzo:24.49},
    {codice:"003", nome:"Lenovo Laptop", categoria:"laptop", descrizione:"With its clean lines and glossed glaze this ceramic mug is the perfect choice for displaying your brand. This type of gift is used frequently throughout the day and thus ensures maximum exposure.", foto:"../assets/images/portatile.png", quantita: 7, colori: ['#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'], object: "../assets/laptop.glb", prezzo:1250.49},
    {codice:"004", nome:"Huawei Cover", categoria:"cover", descrizione:"With its clean lines and glossed glaze this ceramic mug is the perfect choice for displaying your brand. This type of gift is used frequently throughout the day and thus ensures maximum exposure.", foto:"../assets/images/huaweiCover.png", quantita: 10, colori: ['#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'], object: "../assets/huaweiCover.glb", prezzo:44.49},

  ]

  constructor() { }

  cercaProdotto(nome: string){
    return this.prodotti.find(p => p.nome === nome)
  }

  cercaProdSimili(categoria: string){
    return this.prodotti.filter(p => p.categoria === categoria)
  }

}
