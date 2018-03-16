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
  life() {
    const FemalelifeExpect = 81;
    const lifeExpect = 76;
    if (this.sex === "female" && this.age > 81) {
      let femaleYearsPastDeath = (this.age - 81);
      return femaleYearsPastDeath
    } else if (this.sex === "male" && this.age > 76) {
      let maleYearsPastDeath = (this.age - 76)
      return maleYearsPastDeath
    } else if (this.sex === "female" && this.age < 81) {
      let femaleRemainingLife = (81 - this.age);
      return femaleRemainingLife
    } else if (this.sex === "male" && this.age < 76) {
      let maleRemainingLife = (76 - this.age);
      return maleRemainingLife
    }
  }
}
