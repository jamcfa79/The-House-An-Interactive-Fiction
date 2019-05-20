

let inventoryaction = /inventory/;
let inventory = function(action, player, object) {
  if (action == 'inventory') {
    player.printInventory();
  }
  return player
}
addAction(inventoryaction, inventory);


//To create a function that interacts with an object...
let TakeAction = /take/;
let take = function(action, player, object) {
  if (action == 'take') {
    player.take(newLocation);
    object.take();
  object.move(inventory)
  }
  return player;
}
addAction(TakeAction, take);

Item.prototype.take = function() {
  addLine("You put the " + this.name + " in your inventory");
}


// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player()
player.inventory = [];

//Create your objects
let passage = new Room("long passageway");
let pedastal = new Item("pedastal", "an onyx colored marble webbed with white veins, chipped around the top edges and down the side. It has a dark liquid dripping out of the bowl and down the face. The liquid disappears down a slit at the base of the pedastal")
let potion = new Item ("strange vial", "a large glass bottle, filled with a dark liquid and corked with a winestop")

let room = new Room("dark room", "The room smells of sulfer. The floor is covered in thick dust and there are footprints leading through the door");
let door = new Room ("door", "The door is solid oak with black, iron hinges on this side.")
let table = new Item ("table", "light wood, covered in stains and cuts. It has two drawers")

let foyer = new Room("huge foyer", "The foyer has two sets of stairs. One set goes up, one goes down.")
let stand = new Item("stand", "small. It has robes on it.")
let robes = new Item ("robe", "dark and covered in stains")

let stairsup = new Room ("stairs up", "It is a large set of hardwood steps extending up into nothing. They're rarely used and covered in dust.")
let nail = new Item ("nail", "rusty and covered in blood. It is bent out of shape.")

let stairsdown = new Room ("stairs down", "It is a narrow set of concrete stairs going down into nothing. They seem to be used extremely often. A dark liquid drips down the stairs.")

// Put them in their spots
let locations = [];
locations.push(passage, room);
start = new Room("hallway");

passage.addItem(pedastal);
passage.addItem(potion);

room.addItem(door);
room.addItem(table);

door.addItem(foyer);

foyer.addItem(stairsup);
foyer.addItem(stairsdown);
foyer.addItem(robes);
foyer.addItem(stand);

stairsup.addItem(nail);

start.addItems(locations);

player.move(start);
