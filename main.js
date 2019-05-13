// Handle user input

var regexes = [
  /enter/,
  /go back/,
  /inspect/,
]

function parse(input) {
  let articleRegex = / the| a| an/
  input = input.replace(articleRegex, '')
  let action;
  let location;
  for (var i = 0; i < regexes.length; i++) {
    if (regexes[i].test(input)) {
      //console.log("Regex test passed")
      action = input.match(regexes[i])
      console.log("Action: " + action + ".")
      input = input.replace(regexes[i], '');
      location = input;
      location = location.replace(/ /, '')
      console.log("Location: " + location + ".")
    } else {
      console.log("No match found");
    }
  }
  let results = [location, action]
  return results
}

function doAction(results, player, newLocation) {
  if (results[1] == 'enter' && newLocation != null) {
    player.cameFrom = player.location;
    player.location = newLocation
    player.location.enter();
  }
  if (results[1] == 'inspect') {
    console.log("Inspecting " + newLocation.name)

    newLocation.inspect(player)



  }
  if (results[1] == 'go back') {
    let destination = player.cameFrom;
    player.cameFrom = player.location;
    player.location = destination;
    player.location.enter();
  }
  return player
}

// This function gets triggered whenever the 'enter' key gets pressed
document.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(e) {
  if (e.key == "Enter") {
    let input = document.getElementById('inputsm').value
    if (input.length > 0) {
      //execute input script
      addLine("> " + input, 'user')
      // Parse the input
      let results = parse(input);
      let newLocation


      let i = 0
      //while(newLocation == null) {
      for (i = 0; i < player.location.contents.length; i++) {
        console.log(player.location.name == results[0])
        if (results[0] == player.location.contents[i].name) {
          console.log("Match!")
          newLocation = player.location.contents[i];
        }
      }
      if (results[0] == player.location.name) {
        console.log("Action refers to self!");
        newLocation = player.location;
        console.log(newLocation.descriptor);
      }

      player = doAction(results, player, newLocation)
      console.log("Player location: " + player.location.name)

    } else {
      addLine("Time passes... You start feeling nervous.")
    }
    document.getElementById("inputsm").value = "";
  }
  let elmnt = document.getElementById("footer");
  elmnt.scrollIntoView();
}

// Print message to the screen
function addLine(text, id) {
  let para = document.createElement("P");
  if (id != null) {
    para.setAttribute("id", id);
  }
  let t = document.createTextNode(text);
  para.appendChild(t);
  document.getElementById("feed").appendChild(para);
}

// Room class
class Room {
  constructor(name, descriptor, contents) {
    this.name = name;
    this.descriptor = descriptor;
    if (contents != null) {
      this.contents = contents;
    } else {
      this.contents = [];
    }
  }

  enter(mode) {
    addLine("You find yourself in a " + this.name + ".")

    //Get contents of room
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
      addLine("You see nothing")
    }
  }


  inspect(player) {
    if (this.descriptor && player.location == this) {
      console.log("Printing description")
      addLine(this.descriptor);
    } else {
      addLine("You're too far away to see it well.")

    }
  }


  exit() {

  }

  addItems(items) {
    for (var i = 0; i < items.length; i++) {
      this.contents.push(items[i]);
    }
  }

  addItem(item) {
    this.contents.push(item);
  }
}

class Item {
  constructor(name, descriptor) {
    this.name = name;
    this.descriptor = descriptor;
  }

  inspect() {
    let description = this.descriptor
    addLine("The " + this.name + " is " + description)
  }
}

class Player {
  constructor(location) {
    this.location = location;
    this.cameFrom = null;
  }
}

// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let hallway = new Room("dusty hallway", "clouds of dust kick up with every step.");
let mainHall = new Room("main hall", "decadant furnishings adorn the great room");
let furCoat = new Item("fur coat", "warm and sturdy, this will protect against the elements.");
let kitchen = new Room("kitchen", "covered in viscous fluid and meat, it is freezing");
let mysteryMeat = new Item("mystery meat", "odd in shape and scent, the meat is stacked with reckless abandon.");
let foggyHallway = new Room("foggy hallway", "pools of electrified blood coat the floor, it blocks the path ahead.");
let blood = new Item("blood", "coating the floor, it makes traversal a fatal experience.");
let morgue = new Room("morgue", "pugent and horrid smells invade your nostrils.");
let bodies = new Item("bodies", "heaps of dead corpses now decorate the room, still fresh from slaughter. Their hands are still bound with rope.");
let bottomlessPit = new Room("bottomless pit", "with no end in sight, you hear growling from below.");
let pit = new Room("pit", "dark and cavernous, this room is hiding something...");
let wolf = new Item("wolf", "vicous and wild, this wolf is protecting his territory.");
let keychain = new Item("keychain", "dangling around the wolf's neck lie a ring of keys, old and rustic.");
let Ornatechest = new Item("ornate chest", "coated in runic symbols, it is under heavy lock and key.");

// Put them in their spots
hallway.addItem(vase);
let locations = [];
locations.push(hallway, mainHall, Kitchen);
player.location = new Room("hallway", "It is dark. The floorboards creak when you walk.");
player.location.addItems(locations);


player.location.enter();
