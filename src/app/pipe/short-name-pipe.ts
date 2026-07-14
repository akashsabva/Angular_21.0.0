import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortName',
})
export class ShortNamePipe implements PipeTransform {

  transform(bigName: string): string {
    const parts = bigName.split(" ");
    
    if(parts.length < 2) return bigName;
    
    const fName = parts[0].charAt(0).toUpperCase();
    const lName = parts[1];
    
    return `${fName}. ${lName}`;
  }

}
