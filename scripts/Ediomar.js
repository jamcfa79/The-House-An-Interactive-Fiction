

// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let aRoom = new Room("aRoom","A cold room with only a table and a tv with a message and a note");
let tv = new Item("tv", "with a message on the screen-- You must find all the missing items that are around the diferent rooms in this section of the house");
let note = new Item("note","A note right next to the tv with a message that reads--You are in for a surprise")
let livingRoom = new Room("livingRoom","A samll livingRoom with two tables and a sofa");
let thumbDrive = new Item("thumbDrive","Siting on the big table a thumbDrive holds something withing it");
let battery = new Item("bettery","A very shiny bettery and a powerfull one as well it can last for two months.");
let library = new Room("library"," A small sized library with only two book stands");
let headset = new Item("headset","A nice lookign headset with a gold plating the sound quality is amazing.");
let basement = new Room("basement","It feels very cold but there is sometihng legendary here.");
let legenDaryController = new Item("legenDary Controller","Inside the chest there is a legendary gaming controlle it is plated with pure gold.")
let chest = new Item("chest","Inside of it there is sometihng trully special.");
let TheRoom = new Room("TheRoom","TheRom has a big tv and a very comfortable chair.");
let bigTV = new Item("bigTV"," a 4k gaming TV.");
let TvRemote = new Item("Tv Remote","A silver plated remote for the tv.");
let chair = new Item("chair"," very comfortable chair with a soda dispenser.");

TheRoom.addItem(bigTV);
TheRoom.addItem(TvRemote);
TheRoom.addItem(chair);
basement.addItem(legenDaryController);
basement.addItem(chest);
livingRoom.addItem(thumbDrive);
livingRoom.addItem(battery);
library.addItem(headset);
aRoom.addItem(TheRoom);
aRoom.addItem(basement);
aRoom.addItem(tv);
aRoom.addItem(livingRoom);
aRoom.addItem(library);
aRoom.addItem(note);


player.move(aRoom);
