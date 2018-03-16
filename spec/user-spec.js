import { User } from './../js/user.js';

describe('User', function() {
  let human;

  beforeEach(function() {
  human = new User(12/19/1994, "male");
  });

  it("Create a new user object", function() {
    expect(human.birthday).toEqual(12/19/1994);
    expect(human.sex).toEqual("male")
  });

  it("Takes the user's birthday and return it in years", function() {
    expect(human.ageInYears()).toEqual(23);
  });

  it("Takes the user's birthday and return it in seconds", function() {
    expect(human.ageInSeconds()).toEqual();
  });

  it("Takes the user's age and return it in Mercury years", function() {
    expect(human.mercury()).toEqual();
  });

  it("Takes the user's age and return it in Venus years", function() {
    expect(human.venus()).toEqual();
  });

  it("Takes the user's age and return it in Mars years", function() {
    expect(human.mars()).toEqual();
  });

  it("Takes the user's age and return it in Jupiter years", function() {
    expect(human.jupiter()).toEqual();
  });
});
