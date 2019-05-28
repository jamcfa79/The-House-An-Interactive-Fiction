let mysterymeat = false;
class JamesDoor extends Room {
constructor(name, descriptor, room) {
  super(name, descriptor);
  this.locked = true;
  this.room = room;
}

enter() {
  console.log("Entering " + this.name)
  if(this.locked == false) {
    console.log("Adding room...")
    this.addItem(this.room);
  }
  if(this.locked == true) {
    console.log("Door is locked, checking location...")
    if (player.location.name == 'hallway') {
      addLine("The freezing cold blocks your path, you'd die in minutes.");
    }
    if (player.location.name == 'foggyHallway') {
      addLine("The electrified blood would be rather unpleasant, need find a way to get rid of it before crossing.");
    }
    if (player.location.name == 'cavernous room') {
      addLine("The fall would most certainly kill you, best not step too close.")
    }
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
      addLine("You see nothing.")
    }
  }
}

}

let takeAction = /take/;
let take = function(action, player, object) {
  if (action == 'take') {
    object.take();
    player.inventory.push(object)
  }
  return player;
}
addAction(takeAction, take);

let useAction = /use/;
let use = function(action, player, object) {
  if (action == 'use') {
    console.log("using " + object.name + "...")
    object.use();
  }
  return player;
}
addAction(useAction, use);

// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let hallway = new Room("dusty hallway", "clouds of dust kick up with every step.");
let mainHall = new Room("main hall", "decadant furnishings adorn the great room");
let furCoat = new Item("fur coat", "warm and sturdy, this will protect against the elements.");
let kitchen = new Room("kitchen", "covered in viscous fluid and meat, it is freezing cold");
let metalDoor = new JamesDoor("metal door", "the large metal slab of a door has one single viewport, revealing the frigied interioir of the kicthen beyond it.", kitchen);
let mysteryMeat = new Item("hunk of mystery meat", "odd in shape and scent, the meat is stacked with reckless abandon.");
let morgue = new Room("morgue", "pugent and horrid smells invade your nostrils.");
let pit = new Room("pit", "dark and cavernous, this room is hiding something...");
let cavernousRoom = new JamesDoor("cavernous room", "a rocky outcrop of chizeled stone, there lays a large pit int the center of the room.", pit);
let foggyHallway = new JamesDoor("foggy hallway", "pools of electrified blood coat the floor, it blocks the path ahead.", cavernousRoom, morgue);
let fuseBox = new Item("fuse box", "the blasted thing has been jerry rigged, it's malfuntioning internals releasing an electric current into the pools of blood below.");
let blood = new Item("pool of blood", "coating the floor, electrified by exposed wires, making traversal a fatal experience.");
let coffins = new Item("hoards of coffins", "pile up high, they are freshly coated with dirt and vegetation.")
let rope = new Item("heap of dead bodies", "heaps of dead corpses now decorate the room, still fresh from slaughter. Their hands are still bound with rope.");
let wolf = new Item("wolf", "vicous and wild, this wolf is protecting his territory.");
let keychain = new Item("keychain", "dangling around the now pacified wolf's neck.");
let ornateChest = new Item("ornate chest", "coated in runic symbols, it is under heavy lock and key.");
let necronomicon = new Item("Necronomicon", "the loot of the ornate chest; a cursed book with many hexes and incantations inside it's flesh bound pages.");

// Put them in their spots
mainHall.addItem(furCoat);
metalDoor.addItem(kitchen);
kitchen.addItem(foggyHallway);
kitchen.addItem(mysteryMeat);
kitchen.addItem(foggyHallway);
foggyHallway.addItem(blood);
foggyHallway.addItem(morgue);
foggyHallway.addItem(cavernousRoom);
foggyHallway.addItem(fuseBox);
morgue.addItem(rope);
morgue.addItem(coffins);
pit.addItem(ornateChest);
pit.addItem(wolf);
cavernousRoom.addItem(pit);

if (player.location == pit && mysterymeat == false) {
  addLine("The vicous creature pounces upon you without hesitation, consuming you alive. Ouch.");
  addLine("Bad end (definitely).")
  player.move = hallway
}

furCoat.use = function() {
  console.log("Using fur coat")
  if (player.location.name == 'hallway') {
    addLine("You don the fur coat, this should protect you against the ensuing cold.");
    metalDoor.locked = false;
  }
  if (player.location == foggyHallway) {
    addLine("You lay the fur coat down, it soaks up the blood, you can now pass through.");
    foggyHallway.locked = false;
  }
}

furCoat.take = function() {
  if (player.location == mainHall) {
    addLine("You have a keen sense of fasion, this may come in handy.");
  }
}

rope.use = function() {
  if (player.location == cavernousRoom) {
    addLine("You attatch the rope bindings end to end and begin down the large pit.");
    cavernousRoom.locked = false;
  }
}

rope.take = function() {
  if (player.location == morgue) {
    addLine("You take the scraps of rope.");
  }
}

mysteryMeat.use = function() {
  if (player.location == pit) {
    addLine("You toss out the meat, leaving the wolf to it's dinner.");
    pit.addItem(keychain);
  } else {
    addLine("You're not that hungry... are you?");
  }
}

mysteryMeat.take = function() {
  if (player.location == kitchen) {
    addLine("You grab hold of a chunk and rip it free, shoving it into your pocket.");
    let mysterymeat = true
  }
}

keychain.use = function() {
  if (player.location == pit) {
    addLine("You unlock the chest, revealing it's contents.");
    pit.addItem(necronomicon);
  } else {
    addLine("You give the keys a little jingle jangle, your sanity is now restored.");
  }
}

keychain.take = function() {
  addLine("You loose the keys from around the wolf's neck.");
}

necronomicon.use = function() {
  addLine("Your poor Italian conjures a demon of immense power, stepping through a portal as he bellows Thanks for playing!");
  addLine("Good end (?).")
  player.move = hallway
}

let locations = [];
locations.push(hallway, metalDoor, mainHall);
start = new Room("hallway", "It is dark. The floorboards creak when you walk.");
start.addItems(locations);


player.move(start);
