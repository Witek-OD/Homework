
function Human(name,surname, yob) {
  this.name = name;
  this.surname = surname;
  this.yob = yob;
  this.attendance = new Array(25); //посещения
  this.assessments = []; // успеваемость

  this.getAverageScore = function () { //успеваемость
    let sum = 0;
    this.assessments.forEach((lesson) => {
      sum += lesson;
    });
    return sum / this.assessments.length;
  }

  this.getAttendanceScore = function () {

    let attendanceCount = 0; //количество посещенных занятий

    let lessonsCount=0; //количество прошедших занятий

    this.attendance.forEach((lesson) => {

      if (lesson!==undefined) {
        lessonsCount++;
        if (lesson===1){
          attendanceCount++;
        }
      }
    });
    return  attendanceCount / lessonsCount;
  }

  this.getLesson = function (presence) {

    for (let i = 0; i < this.attendance.length; i++) {
      if (this.attendance[i] === undefined) {
        this.attendance[i] = presence;
        break;
      }
    }
  }

  this.present = function () {
    this.getLesson(1);
  }

  this.absent = function () {
    this.getLesson(-1);
  }

  this.setRate = function (rate) {
    if (0 <= rate <= 100) {
      this.assessments.push(rate);
    }
  }

  this.getName = function () {
    return this.name;
  }

  this.getAge = function () {
    return new Date().getFullYear() - this.yob;
  }

  this.summary = function () {

    console.log(this.getAverageScore() +'/'+this.getAttendanceScore())
    let averageAttendance =this.getAttendanceScore();

    if ((this.getAverageScore() > 90) && (averageAttendance > 0.9)) {
      return "Молодець!";

    } else if ((this.getAverageScore() > 90) || (averageAttendance > 0.9)) {
      return "Добре, але можна краще ";

    } else {
      return "Редиска!";
    }

  }
}

const person1 = new Human("John","Jonson" ,1990);
const person2 = new Human("Ivan","Ivanov" ,1995);
const person3 = new Human("Sidor","Sidorov" ,1980);
const person4 = new Human("Student","Studentov" ,2004);

person1.present();
person1.present();
person1.present();
person1.present();
person1.present();
person1.present();
person1.absent();
person1.setRate(95);

console.log(`Студент: ${person1.getName()} , возраст ${person1.getAge()} , середня оцінка: ${person1.getAverageScore()}`);
console.log(`Достигнутый результат : ${person1.summary()}`);


person2.present();
person2.present();
person2.present();
person2.present();
person2.setRate(90);
person2.setRate(100);

console.log(`Студент: ${person2.getName()} , возраст ${person2.getAge()} , середня оцінка: ${person2.getAverageScore()}`);
console.log(`Достигнутый результат : ${person2.summary()}`);


person3.present();
person3.present();
person3.present();
person3.present();
person3.setRate(90);
person3.setRate(90);
person3.setRate(90);
person3.present();
person3.absent();
person3.absent();
person3.absent();
person3.absent();
person3.absent();

console.log(`Студент: ${person3.getName()} , возраст ${person3.getAge()} , середня оцінка: ${person3.getAverageScore()}`);
console.log(`Достигнутый результат : ${person3.summary()}`);

person4.setRate(60);
person4.setRate(80);
person4.setRate(60);
person4.present();
person4.absent();
person4.absent();
person4.absent();
person4.absent();
person4.absent();

console.log(`Студент: ${person4.getName()} , возраст ${person4.getAge()} , середня оцінка: ${person4.getAverageScore()}`);
console.log(`Достигнутый результат : ${person4.summary()}`);