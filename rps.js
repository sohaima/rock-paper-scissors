function computerPlay() {
    arr = ['Rock','Paper','Scissors'];
    return arr[getRndInteger(0,2)];
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
