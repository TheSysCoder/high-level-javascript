// Scope of variables

const fName = "Jake";

const printName = (pName) => {
  const salary = 123456;
  console.log("Welcome " + fName);
  console.log(salary);
};

printName(fName);

// varibale scope is defined as Global, local and block

// ==================================================

// This keyword -> this keyword is used to invoke or called objects

const player = {
  fName: "Rohit",
  lName: "Sharma",
  playCricket() {
    console.log(`${this.fName} is playing ${game.gameName}`);
  },
};
let game = {
  gameName: "Cricket",
};

player.playCricket();

// this keyword we can use for calling local object
