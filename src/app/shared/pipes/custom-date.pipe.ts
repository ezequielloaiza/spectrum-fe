import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(object: any) {
    const date = new Date(object);
    const dateParse = new Date (date.setTime( date.getTime() + date.getTimezoneOffset()*60*1000 ));
    const months:any = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

    const day = dateParse.getDate();
    const dayParse = day < 10 ? ('0' + day) : day
    return dateParse.getFullYear() + '-' + months[dateParse.getMonth()] + '-' + dayParse;
  }

}