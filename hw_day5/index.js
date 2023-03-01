// 1. Filter an Array with a user input of minimum length
/*
 map(), filter() : return a new array 
 forEach() : no return
*/ 
const arr1 = ["123123", "123", "451511", "422"];
minimumLength = 5;

const filterArr = arr1.filter( e => e.length >= minimumLength);
console.log(filterArr);

//2. Create a function that everytime you invoke it, it will print out the message "Congrats you earn the chance!", however it can only print out the message with the first 5 excutions. all the rest invoke will print out the message "Sorry you missed the chance"

const moduel = {
  count : 0,

  congratulate: function() {
    if (this.count < 5) {
      console.log("Congrats you earn the chance!");
      this.count++;
    } else {
      console.log("Sorry you missed the chance");
    }
  }
}


for (let i = 1; i <= 6; i++) {
  console.log("This is " + i + " times: ");
  moduel.congratulate();
}

