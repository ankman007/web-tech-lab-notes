class Animal {
     constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a sound.`)
    }
}
class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    descibe() {
        console.log(`${this.name} is a ${this.breed}`);
    }
}

const myDog = new Dog('Buddy', 'Labrador');
myDog.descibe();
myDog.speak();
