class Person {
    constructor(name, softwareEngineer) {
        this.arms = 2
        this.legs = 2
        this.name = name
        this.softwareEngineer = softwareEngineer
        this.artists = []
    }
    greet() {
        console.log("Hello!")
    }
    // walk method
    walk() {
        console.log("Walking on the beach.")
    }
    eat(food) {
        console.log(`Today I am eating ${food}`)
    }
    // method for working with arrays
    addArtist(artist) {
        console.log(`I like ${artist}`)
        this.artists.push(artist)
    }
}

const Swati = new Person("Swati", true)

Swati.fly = function() {
    console.log("Holy heck, I'm flying!")
}

console.log(Swati.name)

Swati.fly()
Swati.addArtist("J.I.D.")
Swati.eat("Cheese")

console.log(Swati.artists)

// make sure to add "new" keyword!
const Leo = new Person("Leo Vincent", true)

console.log(Leo.name)
console.log(Leo.softwareEngineer)

Leo.walk();

Leo.jump = function() {
    console.log("Weeeeee!")
}

Leo.jump()
Leo.addArtist("Rico Nasty")
Leo.addArtist("Riff Raff")

console.log(Leo.artists)