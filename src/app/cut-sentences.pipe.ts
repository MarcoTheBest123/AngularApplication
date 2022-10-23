import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutSentences'
})
export class CutSentencesPipe implements PipeTransform {

  transform(value: string, limite: number = 190): string {
    if(value.length > limite){
      return value.substring(0, limite)
    }
    return value;
  }

}
