class Animal {
    constructor(colorValue) {
        // ths.propName is used either accessing existing prop or creating new prop
        this.color = colorValue;    // here this.propName is used for creating an new prop, bcoz color prop is not declare in animal class  
    }
    greet() {
        console.log(`Hello, my color is ${this.color}!`);      // accessing this.color prop
    }
}

class Dog extends Animal {
    constructor(colorValue, breedName) {
        super(colorValue);     // super keyword - used to call super constructor(Dog inherits the property from its super class i.e. Animal)
        this.breed = breedName;      // here also we are creating an new prop like 'this.breed'
    }
    greet() {
        super.greet();
        console.log(`Hello, my breed is ${this.breed} and color ${this.color}`);
    }
}

const obj1 = new Animal('White');
const obj2 = new Dog('Brown', 'Moti');
const obj3 = new Dog('Black', 'Malhar');

obj3.walk = () => {
    console.log('I am walking');
}

obj3.greet = () => {
    console.log('I am special greet function');     // this later function we get called insted of super greet function
 }

obj1.greet();
obj2.greet();
obj3.greet();     // when we call this statement 
obj3.walk();