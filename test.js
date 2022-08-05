todos = [
    {id: 1,
    name: 'david',
    home: 'atlanta',
    food: 'sushi',
    inLove: true
},
    {id: 2,
    name: 'diana',
    home: 'san diego',
    food: 'lamb',
    inLove: false
},
{
    id:3,
    name:'patrick',
    home: 'detroit',
    food: 'corned beef',
    inLove: false
}
]

//simple for loop

for (let x = 1 ; x<10; x++) {
    console.log(x)
}
console.log('break!!!')

// simple while loops with an incrementor
let x = 0
while(x < 4) {
    console.log(x)
    x++
}
console.log('break!!!')
//for loops for(){}

// set the new variable to another of the array and log the variable does not require brackets around the variable but use dot notation for value
for(let todo of todos) {
    console.log(todo)
    console.log(todo.home)

}

console.log('break!!!')
//when looping through indices use brackets around the variable and dot notation for the value
for (let i = 0; i <todos.length; i++){
    console.log(todos[i].food)
}
console.log('BREAK!')
//forEach() loops through, .map() build a new array, .filter() these take in a function in the parameter first being the variable. can take in multiple
//.forEach
todos.forEach(function(todo){
    console.log(todo.name)
})
console.log('BREAK!')
//.map
const todoText = todos.map(function(todo){
    return todo.home
})
console.log(todoText)


for (let david of todos) {
    console.log(david.name)
}

todos.forEach((todo) => {
    console.log(todo.food)
})

for (let d = 0 ; d < 10; d++){
    console.log(d)
}




for (let names of todos) {
    console.log(names.name)
}

todos.forEach(function(todos){
    console.log(todos.home)
})

//.map to return an array

const todoName = todos.map(function(todo){
    return todo.name
})
console.log(todoName)

//.filter to sort an array and then return a new array

const todoLove = todos.filter(function(todo){
    return todo.inLove === false
}).map(function(todo){
    console.log(todo.name)
})

const numbers2 = [1,2,3]

const doubleNumbers2 = numbers2.map((num) => {
    return num * 2
});

console.log(numbers2)
console.log(doubleNumbers2)

//if statements with or and and conditons

const a = 20
const b = 10

if(a < 10 || b > 10){
    console.log('a is less than 10 and b is greater than 10')
} else if( a === 20 && b === 10) {
    console.log(`${a} is equal to 20 and ${b} is equal to 10`)
} else {
    console.log('a is not less than 10 or equal to 10 and neither is b')
}

//tenery statements with ? = then and : = else
const c = 10
const color = c > 10 ? 'red' : 'blue'
console.log(color)

//switch case

const nextColor = 'green' ? 'red' : 'blue'

//switch case is a function that takes in a parameter and checks each case and returns which is true

switch(nextColor){
    case 'red':
        console.log('it is red');
        break;
    case 'blue':
        console.log('it is blue');
        break;
    default:
        console.log('it is not read or blue')
        break;

}

//functions  name the fuction then pass parameters. fat arrow is ES6


function addNum(num1, num2) {
    return num1 + num2;
}
console.log(addNum(7,3))

const addNum2 = (num2, num3) => {
    return num2 + num3
}
console.log(addNum2(5,10))

const addNum3 = num4 => num4 + 2;
console.log(addNum3(6))

//constructor functions always cap 

function Person (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
// this sets the function within the Class object

    // this.getBirthYear = function() {
    //     return this.dob.getFullYear();
    // }
    // this.getFullName = function() {
    //     return `${this.firstName} ${this.lastName}`
    // }

}
// using prototypes we attach the Class object with dot notation to the operator prototype. Follow this with dotnotation into the name of our function variable = function (){}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}
// setting a class with a capital and a curly class Thing {}

class Human {
    constructor(){
        this.gender = 'male';
        this.race = 'black'
    }
    printGender() {
        console.log(this.gender)
    }
    printRace(){
        console.log(this.race)
    }
}
const humanoid = new Human()
humanoid.printGender()
humanoid.printRace()

// use extends on the class to inherit properties to the new class
// add the super method super() under the constructor
class Person2 extends Human{
    // within the {} we set the constructor(){} method which determines properties name of
    constructor() {
        super();
    // this dot notation to determine the key of the value
        this.name='Daveed';
        this.anime='hunter x hunter';
        this.home='atlanta'
    }
    // creating a method within the class much like a prototype but just the function(){}
    printMyName () {
        console.log(this.name)
    }
    getMyAnime () {
        console.log(this.anime)
    }
    getmyHome () {
        console.log(this.home)
    }
    combineMyThings() {
        const myThings = [ this.name, this.anime, this.home];
        console.log(myThings)
    }
    

}
// setting the instance of Person within the variable person. Run with the () as a function. then we can attach the variable to any method
const person = new Person2()
person.printMyName()
person.combineMyThings()


// const combinedThings = things.map(() => {
//     console.log(combinedThings)
// })

const david = new Person2()
david.getMyAnime()



//instatiate object
const person1 = new Person('David', 'Vaughan', '03-17-1986')
const person2 = new Person('Diana', 'Jones', '01-06-1952')
const person3 = new Person('Patrick', 'Tarrance', '08-18-1986')


console.log(person1)
console.log(person2.firstName)
console.log(person3.dob.getFullYear())
console.log(person2.getBirthYear())
console.log(person3.getFullName())

var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    console.log("Can't figure out day");
}

console.log(`Today is ${day}`);

function madlib (name, subject) {
    return `${name} favorite subject is ${subject}`

}
console.log(madlib('david', 'history'))




function tipAmount(billAmount, service) {
    if(service === 'good') {
        return billAmount * 2
    }
    else if(service === 'fair') {
        return billAmount * 1.15
    }
    else if(service === 'poor') {
        return billAmount * 1.10
    }
    else {
        console.log('please enter a level of service')
        console.log(`billAmount cannot be calculated with a tip`)
    }
}

console.log(tipAmount(300, 'poor'))

function printNumbers(start, end) {
    while(start < end) {
        console.log(start)
        start++
    }

}
printNumbers(1, 10)


