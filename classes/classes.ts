class UserAccount {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`)
    }
}

class CharAccount extends UserAccount {
    nickname: string;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }

    get getLevel() {
        console.log('--')
        return this.level;
    }

    set setLevel(level: number) {
        this.level = level
    }
}

const yasmim = new UserAccount("Yasmim", 19);
console.log(yasmim)
yasmim.logDetails();
const grazi = new CharAccount("Grazi", 12, "grazinha", 150);
console.log(grazi);
console.log(grazi.getLevel)
grazi.setLevel = 488
console.log(grazi.getLevel)
