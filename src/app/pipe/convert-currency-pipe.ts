import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertCurrency',
})
export class ConvertCurrencyPipe implements PipeTransform {

  transform(amount: number, rate: number): number {
    
    return amount*rate;
  }

}
