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
    let ageInSeconds = (this.age / 31556952);
    return ageInSeconds
  }
  mercuryAge() {
    const mercuryAge = (Math.floor(this.age / 0.24));
    return mercuryAge
  }
  mercuryTimeLeft() {
    const mercuryFemaleLifeExpect = 337
    const mercuryMaleLifeExpect = 316
    let mercuryAge = (Math.floor(this.age / 0.24));
    if (mercuryAge <= 337 && this.sex === "female") {
      let mercuryRemainingLife = (337 - mercuryAge);
      return mercuryRemainingLife
    } else if (mercuryAge <= 316 && this.sex === "male") {
      let mercuryRemainingLife = (316 - mercuryAge);
      return mercuryRemainingLife
    } else {
      return "You have surpassed your otherwordly life expectancy!"
    }
  }
  venusAge() {
    let venusAge = (Math.floor(this.age / 0.62));
    return venusAge
  }
  venusTimeLeft() {
    const venusFemaleLifeExpect = 50
    const venusMaleLifeExpect = 47
    let venusAge = (Math.floor(this.age / 0.62));
    if (venusAge <= 50 && this.sex === "female") {
      let venusRemainingLife = (50 - venusAge);
      return venusRemainingLife
    } else if (venusAge <= 47 && this.sex === "male") {
      let venusRemainingLife = (47 - venusAge);
      return venusRemainingLife
    } else {
      return "You have surpassed your otherwordly life expectancy!"
    }
  }
  marsAge() {
    let marsAge = (Math.floor(this.age / 1.88));
    return marsAge
  }
  marsTimeLeft() {
    const marsFemaleLifeExpect = 152
    const marsMaleLifeExpect = 142
    let marsAge = (Math.floor(this.age / 1.88));
    if (marsAge <= 152 && this.sex === "female") {
      let marsRemainingLife = (152 - marsAge);
      return marsRemainingLife
    } else if (marsAge <= 142 && this.sex === "male") {
      let marsRemainingLife = (142 - marsAge);
      return marsRemainingLife
    } else {
      return "You have surpassed your otherwordly life expectancy!"
    }
  }
  jupiterAge() {
    let jupiterAge = (Math.floor(this.age / 11.86));
    return jupiterAge
  }
  jupiterTimeLeft() {
    const jupiterFemaleLifeExpect = 960
    const jupiterMaleLifeExpect = 901
    let jupiterAge = (Math.floor(this.age / 11.86));
    if (jupiterAge <= 960 && this.sex === "female") {
      let jupiterRemainingLife = (960 - jupiterAge);
      return jupiterRemainingLife
    } else if (jupiterAge <= 901 && this.sex === "male") {
      let jupiterRemainingLife = (901 - jupiterAge);
      return jupiterRemainingLife
    } else {
      return "You have surpassed your otherwordly life expectancy!"
    }
  }
}
