import { User } from './../js/user.js';

describe('User', function() {
  let human;

  beforeEach(function() {
  human = new User(12/19/1994);
  });

  it("should take the user's birthday and return it in years and seconds", function() {
    let human = new User(12/19/1994)
    expect(human.getFullYear()).toEqual(23);
    expect(human.getSeconds()).toEqual(725328000);
  });
});
