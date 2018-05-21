class Fish {
  constructor(name, sex, vegan) {
    this.name = name;
    this.sex = sex;
    this.vegan = vegan;
  }

  eat(aquarium) {
    if (this.vegan) {
      if (aquarium.algaes.length > 0) {
      aquarium.algaes.pop();
      }
    } else {
      if (aquarium.fishes.length > 0) {
      aquarium.fishes.pop();
      }
    }
  }
}

class Algae {
  constructor(size) {
    this.size = size;
  }
}

class Aquarium {
  constructor(fishes = [], algaes = []) {
    this.fishes = fishes;
    this.algaes = algaes;
  }

  addFish(fish) {
    this.fishes.push(fish);
  }

  addAlgae(algae) {
    this.algaes.push(algae);
  }

  passTime() {
    console.log(this.algaes.length);

    this.fishes.forEach((fish) => {
      console.log(fish.name);
      console.log(fish.sex);
    });
    this.fishes.forEach((fish) => {
      fish.eat(this);
    });
  }

  endTurn() {
    while(this.fishes.length >1) {
      this.passTime();
    }
  }
}

module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae
};
