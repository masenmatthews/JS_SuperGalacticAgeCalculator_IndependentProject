import { Time } from './../js/time.js';

describe('Time', function() {
  let date;

  beforeEach(function() {
  date = new Time(12/19/2017);
  human = new User(12/19/1994, "male");
  });

  it("Create a new time object", function() {
    expect(date.newDate).toEqual(12/19/2017);
  });
});
