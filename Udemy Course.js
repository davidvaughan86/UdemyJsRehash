//using class to create class objects followed by the class name in capital with a {...} after following the constructor method creating an object. Constructor (){...}

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
    // within the {...} we set the constructor(){...} method which determines properties name of
    constructor() {
        super();
        // this dot notation to determine the key of the value
        this.name='Daveed';
        this.anime='hunter x hunter';
        this.home='atlanta'
    }
    // creating a method within the class much like a prototype but just the function(){...}
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
const person1 = new Person2()
person1.printMyName()
person1.combineMyThings()

/* properties are like 'variables attached to classes/objects' 
Methods are like 'functions attacjed tp classes/objects'

ES6
constructor (){                         myMethod(){...}
this.myProperty = 'value'
}
ES7
myProperty = 'value                     myMethod()=>{...}

*/



class Human2 {
    
    gender = 'male';
    race = 'black'
    
    printGender = () => {
        console.log(this.gender)
    }
    printRace = () => {
        console.log(this.race)
    }
}
const humanoid2 = new Human2()
humanoid2.printGender()
humanoid2.printRace()


class Person extends Human{
    
    name='king david';
    anime='tenchi universe';
    home='los angeles'
    
    printMyName = () => {
        console.log(this.name)
    }
    getMyAnime = () => {
        console.log(this.anime)
    }
    getmyHome  = () => {
        console.log(this.home)
    }
    combineMyThings = () => {
        const myThings = [ this.name, this.anime, this.home];
        console.log(myThings)
    }
    getStuff  = () => {
        console.log(this.stuff)
    }
    
}

const person2 = new Person()
person2.printMyName()
person2.combineMyThings()


const david = new Person()
david.getMyAnime()


// const newHobby = {...Person, stuff:'a lot'}
// console.log(Person)



//SPREAD AND REST OPERATORS


//Spread used to spread up an array or object properties. 

// const newArray = [...oldArray, 1,2]

// const newObject = { ...oldObject, newProp:5}

//Rest used to merge a list of function arguments into an array

// function sortArgs(...args){
//     return args.sort()

// }

const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4]
console.log(numbers)
console.log(newNumbers)

class Animal {
    
    type='dog'
    size='small'
    
    getAnimalType = () => {
        console.log(this.type)
    }
}

const dog = new Animal()
dog.getAnimalType()

const newProp = {...Animal, color:'black'}
console.log(newProp)

// use the operator on the new object to spread the old object to the new object

const pencil = {
    type:'no.2'
}

const coloredPencil = {
    ...pencil,
    color:'black'
}

console.log(pencil)
console.log(coloredPencil)


//rest operator is used in a function. the '...' turn the arguments into an array and array methods can be applied

const filter = (...args) => {
    return args.filter(elements => elements === 1)
}

console.log(filter(1,2,3))

//destructuring extract array elements or object properties and store them in variables. Spread takes out all elements and all properties and distrbutes them. Destruct allows you to pull single for arrays and objects

const [a,b] = ['hello', 'max']
console.log(a) // a
console.log(b) // b

const {firstName} = {firstName: 'james', age:'32'}
console.log(firstName) // james
// console.log(age) // undefined

const numbers1 = [1, 2, 3]
 var [num1, ,num2 ] = numbers1 // leave a space to skip that spot in the array
console.log(num1, num2)

console.log('abc')
console.log('\n')
console.log('abc')

// reference and primitive types
const number = 1 // primitive type: numbers, booleans, strings
const num0 = number // stores the value of the variable in another variable and copies it
console.log(num0)

//objects and arrays are reference types

const people = {
    name: 'david'
}
// this is creating a memory of the value of the object rather than the pointer which is the variable. We keep a constant of the people in secondpeople but the value remains a memory of the object
// const secondPeople = people
// targetting the value of the object which changes the memory of the object
// console.log(secondPeople)



const thirdPeople = {
    ...people
}
people.name = 'manu'
console.log(thirdPeople)

