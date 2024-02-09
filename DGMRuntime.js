//Dumos Game Maker Runtime V1.0
//the variable "code" will be available when its built.
const literallyTheEntireGame = new Promise((resolve, reject) => {
  try {
    eval(atob(code));
    console.log("[DGM Logger]: game finished running successfully");
    resolve("finished!");
  } catch (error) {
    console.log(
      "[DGM Logger]: there was an error running the game. it should be showing on screen.",
    );
    reject("Error while running DGM game! " + error);
  }
});

literallyTheEntireGame
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    alert(error);
  });


  //DGMR has been deprecated for now
  //i will remake this once i find a way that is better