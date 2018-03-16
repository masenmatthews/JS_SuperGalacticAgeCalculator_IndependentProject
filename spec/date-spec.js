import { Date } from './../js/date.js';

describe('Date', function() {
  let time;

  beforeEach(function() {
    time = new Date(30, 12);
  });

  it("Determines the difference between two dates and returns the result in seconds", function() {
    expect(time.difference()).toEqual(568025136);
  })
});
