import { Time } from './../js/time.js';

describe('Time', function() {
  it("should take the user's birthday and return it in years and seconds", function() {
    let birthday = new Time(12/19/1994)
    expect(birthday.getFullYear()).toEqual(23);
    expect(birthday.getSeconds()).toEqual(725328000);
  });

});
