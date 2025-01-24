import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squareNumber'
})
export class SquareNumberPipe implements PipeTransform {

  transform(value: number,power:number): unknown {
    return  Math.pow(value, power);
  }

  



}
