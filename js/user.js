export class User {
  constructor(age, sex){
    this.age = age;
    this.sex = sex;
  }
  life() {
    const FemalelifeExpect = 81;
    const lifeExpect = 76;
    if (this.sex === "female" && this.age > 81) {
      let femaleYearsPastDeath = (this.age - 81);
      return femaleYearsPastDeath
    } else if (this.sex === "male" && this.age > 76) {
      let maleYearsPastDeath = (this.age - 76);
      return maleYearsPastDeath
    } else if (this.sex === "female" && this.age < 81) {
      let femaleRemainingLife = (81 - this.age);
      return femaleRemainingLife
    } else if (this.sex === "male" && this.age < 76) {
      let maleRemainingLife = (76 - this.age);
      return maleRemainingLife
    }
  }
  ageInSeconds() {
    let ageInSeconds = (this.age * 31556952);
    return ageInSeconds
  }
  mercuryAge() {
    let mercuryAge = (Math.floor(this.age * 0.24));
    return mercuryAge
  }
  mercuryTimeLeft() {
    const MercuryFemaleLifeExpect = 19
    const MercuryMaleLifExpect = 18
    let mercuryAge = (Math.floor(this.age * 0.24));
    if (mercuryAge <= 19 && this.sex === "female") {
      let mercuryRemainingLife = (19 - mercuryAge);
      return mercuryRemainingLife
    } else if (mercuryAge <= 18 && this.sex === "male") {
      let mercuryRemainingLife = (18 - mercuryAge);
      return mercuryRemainingLife
    } else {
      return "You have surpassed your otherwordly life expectancy!"
    }
  }
  venusAge() {
    let venusAge = (Math.floor(this.age * 0.62));
    return venusAge
  }
  marsAge() {
    let marsAge = (Math.floor(this.age * 1.88));
    return marsAge
  }
  jupiterAge() {
    let jupiterAge = (Math.floor(this.age * 11.86));
    return jupiterAge
  }
}
