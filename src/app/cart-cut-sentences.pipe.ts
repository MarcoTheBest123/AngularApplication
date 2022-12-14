import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cartCutSentences'
})
export class CartCutSentencesPipe implements PipeTransform {

  transform(value: string, limite: number = 100): string {
    if(value.length > limite){
      return value.substring(0, limite)
    }
    return value;
  }

}
