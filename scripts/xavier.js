
// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects

let bedroom = new Room('bedroom', 'It is a bedroom.');
let start = new Room('kitchen', 'It is a kitchen.');
let hallway = new Room('hallway','It is a hallway.');
let livingRoom = new Room('living room','It is a living room.');
let garage = new Room('garage','stores my cars.');

let stove = new Item('stove', 'It is a large, steel stove.');
let bed = new Item ('bed', 'It is a mattress that I can sleep on.');
let lamp = new Item('lamp','It is a light for my hallway.');
let couch = new Item('couch','It is a piece of furniture to sit on.');
let rx7 = new Item('rx7','It is a car in my garage.');
let Television = new Item('Television','It is a Television');
let refrigerator = new Item('refrigerator','It holds my food.');
let table = new Item('table','It is a table.');
let dresser = new Item('dresser','holds my clothes');
let microwave = new Item('microwave','It heats my food.');


start.addItem(bedroom);
start.addItem(bed);
start.addItem(hallway);
start.addItem(lamp);
start.addItem(livingRoom);
start.addItem(couch);
start.addItem(Television);
start.addItem(garage);
start.addItem(rx7);
start.addItem(refrigerator);
start.addItem(table);
start.addItem(dresser);
start.addItem(microwave);
start.addItem(stove);


player.move(start);

Item.prototype.eat = function () {
  addLine("You set the " + this.table);
}
