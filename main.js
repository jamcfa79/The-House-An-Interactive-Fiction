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
    newLocation.inspect()
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
      for (i = 0; i < player.location.contents.length; i++) {
        if (results[0] == player.location.contents[i].name) {
          console.log("Match!")
          newLocation = player.location.contents[i]
        } else if(results[0] == player.location.name) {
          console.log("Action refers to self!")
          newLocation = player.location;
          console.log(newLocation.descriptor)
        }
      }

      player = doAction(results, player, newLocation)
      // if (results[1] == 'enter' && newLocation != null) {
      //   player.cameFrom = player.location;
      //   player.location = newLocation
      //   player.location.enter();
      // }
      // if (results[1] == 'inspect' && newLocation != null) {
      //   console.log("Inspecting...")
      //   newLocation.inspect()
      // }
      // if (results[1] == 'go back') {
      //   let destination = player.cameFrom;
      //   player.cameFrom = player.location;
      //   player.location = destination;
      //   player.location.enter();
      // }
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
      if (this.descriptor) {
        addLine(this.descriptor)
      }
      addLine("You see a " + contents);
    } else {
      addLine("You see nothing")
    }
  }

  inspect() {
    if(this.descriptor) {
      console.log("Printing description")
      addLine(this.descriptor);
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
let vase = new Item("vase", "made of blue glass, chipped on top. Filled with a dark liquid.")
let room = new Room("dark room", "it is dark");

// Put them in their spots
hallway.addItem(vase);

start = new Room("hallway", "It is dark. The floorboards creak when you walk.");
start.addItem(hallway);
start.addItem(room);

player.location = start;


player.location.enter();
