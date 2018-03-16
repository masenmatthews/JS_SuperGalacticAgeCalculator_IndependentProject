export class User {
  constructor(birthday, age, sex){
    this.age = age;
    this.sex = sex;
  }
  ageInSeconds() {
    let today = new Date().getTime() / 1000;
    let ageInSeconds = (Math.floor(today));
    return ageInSeconds
  }
  mercury() {
    let mercuryAge = (Math.floor(this.age * 0.24));
    return mercuryAge
  }
  venus() {
    let venusAge = (Math.floor(this.age * 0.62));
    return venusAge
  }
  mars() {
    let marsAge = (Math.floor(this.age * 1.88));
    return marsAge
  }
  jupiter() {
    let jupiterAge = (Math.floor(this.age * 11.86));
    return jupiterAge
  }
}
