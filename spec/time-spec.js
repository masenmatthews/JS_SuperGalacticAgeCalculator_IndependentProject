import { Time } from './../js/time.js';

describe('Time', function() {
  let date;

  beforeEach(function() {
  date = new Time(12/19/2017);
  });

  it("Create a new time object", function() {
    expect(date.date).toEqual(12/19/2017);
  });
});
