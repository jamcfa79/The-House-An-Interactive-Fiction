
// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let kitchen = new Room("bright room", "It smells like cinnamon and it has tile floor")
let livingRoom = new Room("dark room", "it has white walls, and wood floor")
let garge = new Room("garge", "it has smooth concrete floor, and it smells like gas")
let bathroom = new Room("bathroom", "it has laminate floor and its smells minty")


kitchen.addItem(livingRoom);


player.move(kitchen);
