
// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player();

//Create your objects

let hallway = new Room("dusty hallway");
let room = new Room("dark room")
let bedroom = new Room("fancy bedroom")
let kitchen = new Room("kitchen")
let livingroom = new Room("cosy living room");
let bathroom = new Room("dirty bathroom");
let hallway2 = new Room("short hallway");
let closet = new Room("big closet");

let vase = new Item("vase", "made of blue glass, chipped on top. Filled with a dark liquid.")
let flashlight = new Item("flashlight", "working.")
let carkey = new Item("key", "for a car.")
let key = new Item("keys", "on a keychain but you don't know what they are for.")
let clothes = new Item("fancy red dress", "made out of silk")
let sink = new Item("sink", "full with dirty dishes.")
let smallbedroomtable = new Item("small white bedroom table", "locked.")
let tvremote = new Item("TV remote", "broken, some buttons don't work properly.")
let chips = new Item("bag of chips", "open, chips are stale.")
let refrigerator = new Item("refrigerator", "busted, food is going bad")
let cabinet = new Item("medicine cabinet", "made of painted oak, and is full with medicine.")



// Put them in their spots
let locations = [];
locations.push(livingroom);
let myLocation = new Room("hallway");
  //myLocation = new Room("bathroom");
  //mylocation = new Room("livingroom");
  //myLocation = new Room("kitchen");
//myLocation = new Room("bedroom");

hallway2.addItem(bathroom);
hallway2.addItem(bedroom);


bathroom.addItem(flashlight);
bathroom.addItem(cabinet);


bedroom.addItem(smallbedroomtable);
bedroom.addItem(closet);

closet.addItem(clothes);
closet.addItem(key);


livingroom.addItem(carkey);
livingroom.addItem(tvremote);
livingroom.addItem(room);
livingroom.addItem(kitchen);
livingroom.addItem(hallway2);


kitchen.addItem(sink);
kitchen.addItem(chips);
kitchen.addItem(refrigerator);


hallway.addItem(vase);
hallway.addItem(livingroom);


myLocation.addItems(locations);

player.move(myLocation);
