export class ClockSevice {
  private _date = new Date();

  getTime(): Date {
    return this._date;
  }

  setTime(date: Date) {
    this._date = date;
  }
}
