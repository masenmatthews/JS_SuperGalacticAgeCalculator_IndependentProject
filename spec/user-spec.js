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
});


//   it("should take the user's birthday and return it in years and seconds", function() {
//     let human = new User()
//     expect(human.birthday()).toEqual(12/19/1994);
//   });
// });
