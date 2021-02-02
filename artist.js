class Artist {
    constructor(name, age, genre, label) {
        this.name = name
        this.age = age
        // This instance can be an array
        this.genre = genre
        this.label = label
        this.albums = []
        this.songs = []
        this.image = " "
        this.instagram = null
    }

    addAlbum(album) {
        this.albums.push(album)
        console.log(`This album: ${album} is by ${this.name}`)
    }

    addSong(song) {
        this.songs.push(song)
        console.log(`This song: ${song} is by ${this.name}`)
    }

    addImage(imageLink) {
        this.image = imageLink
    }

    addIG(username) {
        this.instagram = username
    }

}



// instance of the artist class
const drake = new Artist("drake", "33", "rap", "cash money records")

const zillakami = new Artist("ZillaKami", "21", ["rap", "rock", "metal"], "Hikari Ultra Records")

zillakami.addAlbum("City Morgue, Vol 2: As Good as Dead")
zillakami.addAlbum("Toxic Boogaloo")
zillakami.addSong("Neck Brace")
zillakami.addSong("Thresh")
zillakami.addImage("https://upload.wikimedia.org/wikipedia/commons/5/5c/Zillakami_%282019%29.png")
zillakami.addIG("zillakami")

console.log(zillakami)