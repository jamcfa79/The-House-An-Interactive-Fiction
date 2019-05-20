
// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let foyer = new Room('foyer', 'There is a large staircase, and the floor is made of smooth concrete.');
let chandelier = new Item('chandelier', 'above you, made of glass and steel.');
let attic = new Room('attic', 'dark, but you see a glint of light.');
let lantern = new Item('lantern', 'A source of light, but you need a candle to have more light.');
let gps = new Item('gps', 'there is also gps that leads to somewhere.')
let bedroom = new Room('bedroom', 'The room is a still all in one piece, and not ruined at all.');
let candle = new Item('candle', 'There is a candle that can be used for your lantern.');
let key = new Item('key', 'There is also a key that is used to unlock something.');
let backyard = new Room('backyard', 'Its a big field and you are gonna be walking for quite a wild.');
let cutters = new Item('cutters', 'you walk around and find a pair of cutters.');
let lock = new Item('lock', 'Its a lock, but there is no keyhole on it.');
let storage = new Room('storage', ' While walking you see what looks like a storage.');
let toolbox = new Item('toolbox', 'The storage dusty and with old stuff, but you find a toolbox.');
let wrench = new Item('wrench', 'the toolbox is filled many items and one of them is a wrench');
let trowel = new Item('trowel', 'There seems to be a rusty trowel as well.');


foyer.addItem(chandelier);
foyer.addItem(attic);
attic.addItem(lantern);
attic.addItem(gps);
foyer.addItem(bedroom);
bedroom.addItem(candle);
bedroom.addItem(key);
foyer.addItem(backyard);
backyard.addItem(cutters);
backyard.addItem(lock);
backyard.addItem(storage);
storage.addItem(toolbox);
storage.addItem(wrench);
storage.addItem(trowel);

player.move(foyer);
