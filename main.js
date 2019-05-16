
class Door extends Room {
constructor(name, descriptor, room) {
  super(name, descriptor);
  this.locked = true;
  this.key = key;
  this.room = room;
}

enter() {
  if(this.key != null) {
    this.addItem(this.room);
    this.locked = false;
  }
  if(this.locked == true) {
    addLine("The door is locked.");
  } else {
    let contents = ""
    if (this.contents.length > 0) {
      for (var i = 0; i < this.contents.length; i++) {
        if (i == this.contents.length - 1) {
          if (i > 0) {
            contents = contents + " and a " + this.contents[i].name + ".";
          } else {
            contents = contents + this.contents[i].name + ".";
          }
        } else {
          contents = contents + this.contents[i].name + ", ";
        }
      }
      addLine("You see a " + contents);
    } else {
      addLine("You see nothing")
    }
  }
}


}

// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let hallway = new Room("dusty hallway", "clouds of dust kick up with every step.");
let mainHall = new Room("main hall", "decadant furnishings adorn the great room");
let furCoat = new Item("fur coat", "warm and sturdy, this will protect against the elements.");
let kitchen = new Room("kitchen", "covered in viscous fluid and meat, it is freezing cold");
let mysteryMeat = new Item("hunk of mystery meat", "odd in shape and scent, the meat is stacked with reckless abandon.");
let foggyHallway = new Room("foggy hallway", "pools of electrified blood coat the floor, it blocks the path ahead.");
let fuseBox = new Item("fuse box", "the blasted thing has been jerry rigged, it's malfuntioning internals releasing an electric current into the pools of blood below.");
let blood = new Item("pool of blood", "coating the floor, electrified by exposed wires, making traversal a fatal experience.");
let morgue = new Room("morgue", "pugent and horrid smells invade your nostrils.");
let coffins = new Item("hoards of coffins", "pile up high, they are freshly coated with dirt and vegetation.")
let bodies = new Item("heap of dead bodies", "heaps of dead corpses now decorate the room, still fresh from slaughter. Their hands are still bound with rope.");
let cavernousRoom = new Room("cavernous room", "a rocky outcrop of chizeled stone, there lays a large pit int the center of the room.");
let torch = new Item("torch", "discarded and weathered, this should serve as a suitable light source.");
let pit = new Room("pit", "dark and cavernous, this room is hiding something...");
let wolf = new Item("wolf", "vicous and wild, this wolf is protecting his territory.");
let keychain = new Item("keychain", "dangling around the wolf's neck, they are quite old and rustic.");
let ornateChest = new Item("ornate chest", "coated in runic symbols, it is under heavy lock and key.");

// Put them in their spots
mainHall.addItem(furCoat);
kitchen.addItem(foggyHallway);
kitchen.addItem(mysteryMeat);
foggyHallway.addItem(blood);
foggyHallway.addItem(morgue);
foggyHallway.addItem(cavernousRoom);
foggyHallway.addItem(fuseBox);
morgue.addItem(bodies);
morgue.addItem(coffins);
pit.addItem(keychain);
pit.addItem(ornateChest);
pit.addItem(wolf);
cavernousRoom.addItem(pit);
cavernousRoom.addItem(torch);
let locations = [];
locations.push(hallway, kitchen, mainHall);
player.location = new Room("hallway", "It is dark. The floorboards creak when you walk.");
player.location.addItems(locations);


player.location.enter();
