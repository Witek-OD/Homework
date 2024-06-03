let ladder = {
  totalStage:10,
  currentStage: 0,
    up: function () { // підніматиме вас на одну сходинку
      if( this.currentStage < this.totalStage)
      {
        this.currentStage ++;
        console.log( `Вы поднялись на одну ступень вверх`);
      } else {
        console.log( `Вы не можете поднятся выше!`);
      }

      return this;
    },
    down: function () { // опускатиме вас на одну сходинку
        if( this.currentStage > 0)
        {
          this.currentStage --;
          console.log( `Вы спустились на одну ступень вниз`);
        } else {
          console.log(`Вы не можете спустится ниже!`);
        }

      return this;
    },
    showStep: function () { // показує поточну сходинку
      console.log(`Вы находитесь на ступени ${this.currentStage}`);

      return this;
    }
};

ladder.up().up().down().showStep();