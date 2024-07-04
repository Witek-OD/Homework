class Coach {
  #fullName;
  #specialization;
  #rank;

  constructor(coachName , coachSpecial , coachRank) {
    this.#fullName = coachName;
    this.#specialization = coachSpecial;
    this.#rank = coachRank;
  }

  displayInfo(){
    console.log(`Coach: ${this.#fullName}, Specialization: ${this.#specialization}, Rating: ${this.#rank}`);
  }

}

const coach1 = new Coach('John Doe', 'Fitness', 4.7);

const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);

coach1.displayInfo();

coach2.displayInfo();

