import * as moment from 'moment';

export class HelperService {

  constructor() { }

  stringToFullDate(date): string {
    return moment(date).format('MMMM D, YYYY');
  }

  stringToDateTime(date): string {
    return moment(date).format('H:mm A on MMM D');
  }

  getTimeSinceDate(date): string {
    return moment(date).fromNow();
  }

  generateNumber(): number {
    return Math.floor(Math.random() * 500 + 1);
  }
}
