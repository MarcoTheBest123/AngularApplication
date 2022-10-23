import { Pipe, PipeTransform } from '@angular/core';
import { Prodotto } from './dati/product.data';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(array: Prodotto[], valore: string, chiave: string): Prodotto[] {
    if(valore === "") return array

    console.log(array);

    console.log();


    return array.filter(p => p.nome.toLowerCase().indexOf(valore.toLowerCase()) != -1)

  }

}
