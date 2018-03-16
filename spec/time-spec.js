import { Time } from './../js/time.js';
import { User } from './../js/user.js';

describe('Time', function() {
  let human;
  let date;

  beforeEach(function() {
    human = new User(12/19/1994, "male");
    date = new Time(12/19/2017);
  });

  it("Create a new time object", function() {
    expect(date.date).toEqual(12/19/2017);
  });
});
