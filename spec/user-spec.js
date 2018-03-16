import { User } from './../js/user.js';

describe('User', function() {
  let human;
  let date;

  beforeEach(function() {
    human = new User(12/19/1994, "male");
    date = new Time(12/19/2017);
  });

  it("Create a new user object", function() {
    expect(human.birthday).toEqual(12/19/1994);
    expect(human.sex).toEqual("male")
  });

  it("Takes the user's birthday and return it in years", function() {
    expect(human.ageInYears()).toEqual(23);
  });

  it("Takes the user's birthday and return it in seconds", function() {
    expect(human.ageInSeconds()).toEqual(725328000);
  });

  it("Takes the user's age and return it in Mercury years", function() {
    expect(human.mercury()).toEqual(5.52);
  });

  it("Takes the user's age and return it in Venus years", function() {
    expect(human.venus()).toEqual(14.26);
  });

  it("Takes the user's age and return it in Mars years", function() {
    expect(human.mars()).toEqual(43.24);
  });

  it("Takes the user's age and return it in Jupiter years", function() {
    expect(human.jupiter()).toEqual(272.78);
  });

  it("Estimates remaining life expectancy based on age and sex", function() {
    expect(human.life()).toEqual("");
  });

  it("Determines the amount of years that the user has surpassed life expectancy by based on age and sex", function() {
    let oldHuman = new User(12/19/1900, "female");
    expect(oldHuman.life()).toEqual("");
  });
});
