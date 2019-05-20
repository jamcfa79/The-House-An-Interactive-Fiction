alert("Loading main.js!");

player = new Player();

let bedroom = new Room('bedroom', 'lamp is off ,it is dark , with hardwood floor. The floor squeaks when you step.');
let kitchen = new Room('kitchen', 'It is bright, with the oven on and the fridge open. ');
let living room =  new Room('living room','the tv is on, its dark and blood on the couch');
let garage = new Room('garage', 'the car door is open, and there are blood trails near the lawn mower and the flashlight');
let backyard = new Room('backyard', 'there is a dead body in the pool');



player.move(bedroom);
