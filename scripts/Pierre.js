
// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let hallway = new Room("dusty hallway", "clouds of dust kick up with every step.");
let vase = new Item("vase", "made of blue glass, chipped on top. Filled with a dark liquid")
let room = new Room("dark room", "It is dark");
let photos = new Item("old photos", "They are dusty & you see a child in it");
let kitchen = new Room("kitchen", "You see that there are many broken bones scattered throughout the floor");
let bones = new Item("bones", "They are broken & scratched, with wierd inscriptions on them");
let livingRoom = new Room("living room", "There is a knife with a dark blue liquid");
let videoRecorder = new Item("video recorder", "You find an old video recoder, but with no tape");
let bathroom = new Room("bathroom", "The bathroom appears brand new, but stained with a blue liquid");
let blueLiquid = new Item("blue liquid", "The blue liquid appears to be colored blood");
let boysBedroom = new Room("boys bedroom", "The bedroom is also brand new & you find the old tape");
let oldTape = new Item("old tape", "The tape is old, but it appears to not be damaged")
let mask = new Item("mask", "The mask has a creepy smile & is also covered in blue blood")
let parentBedroom = new Room("parent bedroom", "It is old, dark, & has many writings on the walls")
let writings = new Item("writings", "It appears to say many strange things, written in the same blue blood")
let teddyBear = new Item("teddy bear", "The teddy bear is clean with no signified damage or is tainted")
let tooth = new Item("tooth", "The tooth is sharp with a pointy tip, almost like it belonged to an animal")
let arm = new Item("arm", "There is a severed arm on the floor! It appears to be fresh as well")
let journal = new Item("journal", "The journal has disturbing writing in it")

hallway.addItem(room);
hallway.addItem(teddyBear);
hallway.addItem(journal);
hallway.addItem(arm);
hallway.addItem(kitchen);
hallway.addItem(livingRoom);
hallway.addItem(bathroom);
hallway.addItem(boysBedroom);
hallway.addItem(parentBedroom);
room.addItem(bedroom);
room.addItem(hallway);
kitchen.addItem(bones);
kitchen.addItem(hallway);
livingRoom.addItem(videoRedcorder);
livingRoom.addItem(hallway);
bathroom.addItem(blueLiquid);
bathroom.addItem(hallway);
boysBedroom.addItem(oldTape);
boysBedroom.addItem(hallway);
parentBedroom.addItem(writings);
parentBedroom.addItem(hallway);

player.move(hallway);
