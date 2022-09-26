import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taiwanDate'
})
export class TaiwanDatePipe implements PipeTransform {

  transform(date: string | Date): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    const year = d.getFullYear() - 1911;
    return `${year}/${d.getMonth() + 1}/${d.getDate()}s`;
  }

}
