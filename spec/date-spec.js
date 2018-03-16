import { Date } from './../js/date.js';

describe('Date', function() {
  it("Determines the difference between two dates and returns the result in seconds", function() {
    time = new Date(30, 12)
    expect(time.difference).toEqual(567648000);
  })
});
