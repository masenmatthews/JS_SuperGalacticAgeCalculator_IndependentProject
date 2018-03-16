export class User {
  constructor(birthday, sex){
    this.birthday = birthday;
    this.sex = sex;
    
  }
  ageInYears() {
    let userConvert = new User(birthday);
    let user = userConvert(birthday).getFullYear();
    console.log(user);
  }

}
