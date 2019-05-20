
// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects

let hallway = new Room("hallway", "you see a red room and a blue room.");
let vase = new Item("vase", "made of blue glass, chipped on top. Filled with a dark liquid.");
let redRoom = new Room("red room", "It is dark.");
let blueRoom = new Room("blue room", "Has a bed.");
let bed = new Item("bed", "Old but looks cumfy.");
let garage = new Room("garage", "there is a car and a hallway.");
let car = new Item("car", "rusted old metal.");
let darkRoom = new Room("dark room", "has a knife and a corpse.");
let knife = new Item("knife", "was very sharp.");
let shortHallway = new Room("short hallway", "dark room.");
let corpse = new Item('corpse', 'has a rat nibbling on it, has knife wounds.');
let keys = new Item('keys', 'looks like car keys.');
let rat = new Item('rat', 'is enjoying its feast.');



// Put them in their spots
hallway.addItem(vase);
hallway.addItem(redRoom);
hallway.addItem(blueRoom);
blueRoom.addItem(bed);
garage.addItem(car);
garage.addItem(hallway);
shortHallway.addItem(darkRoom);
darkRoom.addItem(knife);
darkRoom.addItem(corpse);
corpse.addItem(rat);

player.move(garage);
