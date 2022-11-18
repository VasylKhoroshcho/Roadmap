class Lift {
  constructor(queues, capacity) {
      this.queues = queues;
      this.capacity = capacity;
      this.currentPosition = 0;
      this.peopleInside = [];
      this.stopsList = [0];
  }

  exitArrived(floor) {
      this.peopleInside = this.peopleInside.reduce((acc, person) => {
          if (person !== floor) acc.push(person);

          return acc;
      }, []);
  }

  goUp() {
      let topPerson = 0;
      for (let i = this.currentPosition; i < this.queues.length; i++) {
          const peopleWaitingGoUpExist = this.queues[i].length && this.queues[i].some(person => person > i);
          const peopleArraivedExist = this.peopleInside.includes(i);
          topPerson = this.queues[i].some(person => person < i) ? topPerson < i ? i : topPerson : topPerson;


          if (peopleWaitingGoUpExist || peopleArraivedExist) {
              if (i !== this.currentPosition) {
                this.stopsList.push(i);
                this.currentPosition = i;
              }

              if (peopleArraivedExist) this.exitArrived(i);

              this.queues[i] = this.queues[i].reduce((acc, person) => {
                  if (this.peopleInside.length < this.capacity && person > i) {
                      this.peopleInside.push(person);
                  } else {
                      acc.push(person);
                  }

                  return acc;
              }, [])
          }
      }

      if (topPerson > this.currentPosition) {
          this.stopsList.push(topPerson);
          this.currentPosition = topPerson;

          this.queues[topPerson] = this.queues[topPerson].reduce((acc, person) => {
              if (this.peopleInside.length < this.capacity && person < this.currentPosition) {
                  this.peopleInside.push(person);
              } else {
                  acc.push(person);
              }

              return acc;
          }, []);
      }
  }

  goDown() {
      let bottomPerson = this.queues.length;
      for (let i = this.currentPosition; i > 0; i--) {

          const peopleWaitingGoDownExist = this.queues[i].length && this.queues[i].some(person => person < i);
          const peopleArraivedExist = this.peopleInside.includes(i);
          bottomPerson = this.queues[i].some(person => person > i) ? bottomPerson > i ? i : bottomPerson : bottomPerson;

          if (peopleWaitingGoDownExist || peopleArraivedExist) {
              if (i !== this.currentPosition) {
                this.stopsList.push(i);
                this.currentPosition = i;
              }

              if (peopleArraivedExist) this.exitArrived(i);

              this.queues[i] = this.queues[i].reduce((acc, person) => {
                  if (this.peopleInside.length < this.capacity && person < i) {
                      this.peopleInside.push(person);
                  } else {
                      acc.push(person);
                  }

                  return acc;
              }, [])
          }

          if (bottomPerson < this.currentPosition) {
              this.stopsList.push(bottomPerson);
              this.currentPosition = bottomPerson;

              this.queues[bottomPerson] = this.queues[bottomPerson].reduce((acc, person) => {
                  if (this.peopleInside.length < this.capacity && person > i) {
                      this.peopleInside.push(person);
                  } else {
                      acc.push(person);
                  }

                  return acc;
              }, [])
          }
      };
  }

  move() {
      while (this.queues.some(queue => queue.length)) {
          this.goUp();
          this.goDown();
      }
      this.stopsList.push(0);
  }
}

var theLift = function(queues, capacity) {
  const lift = new Lift(queues, capacity);

  lift.move();

  return lift.stopsList;
}
