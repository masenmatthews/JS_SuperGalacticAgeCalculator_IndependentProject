import { User } from './../js/user.js';

describe('User', function() {
  let human;

  beforeEach(function() {
    human = new User(23, "male");
  });

  it("Create a new user object", function() {
    expect(human.age).toEqual(23);
    expect(human.sex).toEqual("male");
  });

  it("Returns user's age in seconds", function() {
    expect(human.ageInSeconds()).toEqual(725809896);
  });

  it("Takes the user's age and return it in Mercury years", function() {
    expect(human.mercury()).toEqual(5);
  });

  it("Takes the user's age and return it in Venus years", function() {
    expect(human.venus()).toEqual(14);
  });

  it("Takes the user's age and return it in Mars years", function() {
    expect(human.mars()).toEqual(43);
  });

  it("Takes the user's age and return it in Jupiter years", function() {
    expect(human.jupiter()).toEqual(272);
  });

  it("Estimates remaining life expectancy based on age and sex", function() {
    expect(human.life()).toEqual("");
  });

  it("Determines the amount of years that the user has surpassed life expectancy by based on age and sex", function() {
    let oldHuman = new User(12/19/1900, "female");
    expect(oldHuman.life()).toEqual("");
  });
});
