export class User {
  constructor(age, sex){
    this.age = age;
    this.sex = sex;
  }
  ageInSeconds() {
    let ageInSeconds = (this.age * 31556952);
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
