import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'ashetmHistoryDate'
})
export class HistoryDatePipe implements PipeTransform {

  transform(value: Date, ...args: any[]): string {
    return value ? 'at' + value.getUTCDate() : 'unkown date';
  }

}
