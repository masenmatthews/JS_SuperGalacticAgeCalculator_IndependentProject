export class User {
  constructor(birthday, sex){
    this.birthday = birthday;
    this.sex = sex;
    this.date = new Date(this.birthday).getTime() / 1000;
    this.age = birthday.getFullYear()
  }

  ageInYears() {
    let userConvert = new User(birthday);
    let user = userConvert(birthday).getFullYear();
    console.log(user);
  }
  ageInSeconds() {

  }
  mercury() {
    let mercuryAge = (Math.floor(age * 0.24));
    return mercuryAge
  }
  venus() {
    let venusAge = (Math.floor(age * 0.62));
    return venusAge
  }
  mars() {
    let marsAge = (Math.floor(age * 1.88));
    return marsAge
  }
  jupiter() {
    let jupiterAge = (Math.floor(age * 11.86));
    return jupiterAge
  }


}
