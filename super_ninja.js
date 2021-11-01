class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(this.strength);
        console.log(this.speed);
        console.log(this.health);
    }

    drinkSake() {
        this.health += 10;
    }

}
class Sensei extends Ninja {
    constructor() {
        super(200, 10, 10);
        this.wisdom = 10;
    }
    
    speakWisdom() {
        const message = ('Sake o nomero!');
        super.drinkSake();
        console.log(message);
    }
}

const ninja1 = new Ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const sensei1 = new Sensei("Yamamoto San");
sensei1.speakWisdom();