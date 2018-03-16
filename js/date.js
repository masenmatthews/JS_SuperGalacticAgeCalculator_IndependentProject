export class Date {
  constructor(dateOne, dateTwo) {
    this.dateOne = dateOne;
    this.dateTwo = dateTwo;
  }
  difference() {
    let dateOne = (this.dateOne * 31556952)
    let dateTwo = (this.dateTwo * 31556952)
    let newDate = (dateOne - dateTwo);
    return difference
  }
}
