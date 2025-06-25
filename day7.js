/*
let a=50;
let b=20;
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)




//equlity operators
let x=30;
let  y="30";
if (x === y) {
  console.log("both the numbers are sane");
}
else {
  console.log("both the numbers are not sane");
}


let l="govardhan";
let k="govardhan";
if (l === k) {
  console.log("both the texts are sane");
}
else {
  console.log("both the texts are not sane");
}



  
let arr = [1, 2, 3, 4, 5,"govardhanb",true,[5,6,7,8,5,4,8]];
for(let i =0; i < arr.length; i++){
    console.log(arr[i]);
}
  const person1 = {
    name: "Govardhan",
    age:20,
    isStudent: true,
    hobbies: ["reading", "coding", "gaming"],
    address: {
      city: "Hyderabad",
      state: "Telangana"
    }
    }
    console.log(person1.name); // Accessing a property
    console.log(person1.age); // Accessing a property       
    console.log(person1.isStudent); // Accessing a property
    console.log(person1.hobbies[0]); // Accessing an element in an array property
    console.log(person1.address.city); // Accessing a nested property
    console.log(person1.address.state); // Accessing a nested property

    const person2 = {
      name: "Govardhan2",
        age: 21,
        isStudent: false,
        hobbies: ["listening devotional", "boxing", "cricket"],
        address: {
          city: "MUMBAI",
          state: "MAHARASHTR"
        }
    }
    console.log(person2.name); // Accessing a property
    console.log(person2.age); // Accessing a property
    
    console.log(person2.isStudent); // Accessing a property
    console.log(person2.hobbies[0]); // Accessing an element in an array property      \
    console.log(person2.address.city); // Accessing a nested property



    //<functions>

    function add(a, b) {
        console.log("The sum is: " + (a + b));
    }
    function subtract(a, b) {
        console.log("The difference is: " + (a - b));
    }
    function multiply(a, b) {
        console.log("The product is: " + (a * b));
    }
    
    function divide(a, b) {
        if (b !== 0) {
            console.log("The quotient is: " + (a / b));
        } else {
            console.log("Cannot divide by zero");
        }
    }
    add(10, 5); // The sum is: 15
    subtract(10, 5); // The difference is: 5        
    multiply(10, 5); // The product is: 50
    divide(10, 5); // The quotient is: 2
    divide(10, 0); // Cannot divide by zero )*/

    const square = function(num) {
        console.log("The square of " + num + " is: " + (num * num));
    }
    square(5); // The square of 5 is: 25
    square(10); // The square of 10 is: 100
    square(15); // The square of 15 is: 225