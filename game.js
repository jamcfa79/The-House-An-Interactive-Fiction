var scripts1 = [
  'aiden',
  'David',
  'derick',
  'Ediomar',
  'james',
];

var scripts2 = [
  'kalvin',
  'kevin',
  'Logan',
  'Pierre',
  'stephone',
  'xavier',
]

var modules1 = [];
var modules2 = [];

player = new Player();

let hhhh = new Room('long hallway', 'There are many doors on either side of the hall. At the end, you see a brightly lit atrium.');
let atrium = new Room('atrium', 'There are many doors all around you. Above, a glass ceiling reveals the tops of trees growing over the building.')
for(i in scripts1) {
  modules1.push(new Module(scripts1[i] + "'s room", "scripts/" + scripts1[i]+".js", "You see light under the door. Shadows move back and forth as you watch."));
  hhhh.addItem(modules1[i]);
}

for(i in scripts2) {
  modules2.push(new Module(scripts2[i] + "'s room", "scripts/" + scripts2[i]+".js", "You see light under the door. Shadows move back and forth as you watch."));
  atrium.addItem(modules2[i]);
}

hhhh.addItem(atrium);

player.move(hhhh);
