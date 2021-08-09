class Person{
    constructor(name,age=0){
        this.Name=name;
        this.Age=age;
    }
    getDescription(){
        return `Hi I'm ${this.Name}, I'm ${this.Age} Years old!`;
    }
}
class Travler extends Person{
    constructor(name,age,homelocation){
        super(name,age);
        this.homeLocation = homelocation;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.homeLocation){
            description+=` ,My home Location ${this.homeLocation}`
        }
        return description;
    }
}

const me = new Travler("ahmed",19);
const him = new Travler('moahmed',20,"egyptian");
console.log(me.getDescription());
console.log(him.getDescription());
