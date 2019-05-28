// Handle user input

var regexes = [
  /enter/,
  /go back/,
  /inspect/,
  /exit/,
]

var actions = [
  function(action, player, object) {
    if (action == 'enter' && object != null) {
      let destination = object.enter();
      player.move(destination)
    }
    return player;
  },
  function(action, player, object) {
    if (action == 'inspect') {
      console.log("Inspecting " + object.name)
      object.inspect(player)
    }
    return player;
  },
  function(action, player, object) {
    if (action == 'go back') {
      player.move(player.cameFrom);
    }
    return player;
  },
  function(action, player, object) {
    if(action == 'exit') {
      location.reload();
    }
    return player;
  }
]

function parse(input) {
  let articleRegex = /the |a |an /
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

function addAction(actionName, actionFunction) {
  console.log("Adding action...")
  regexes.push(actionName);
  actions.push(actionFunction);
  for (i in regexes) {
    console.log(regexes[i])
  }
}

function doAction(action, player, newLocation) {
  let e = 0;
  for (i in actions) {
    try {
      throw player = actions[i](action, player, newLocation);
    } catch (err) {
      if (err != null) {
        e++;
      }
      console.log(err)
    }
  }
  console.log(actions.length);
  if (e < actions.length - 1) {
    addLine("You can't do that.");
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
          console.log("Match in room!")
          newLocation = player.location.contents[i];
        }
      }
      for (i = 0; i < player.inventory.length; i++) {
        if (results[0] == player.inventory[i].name) {
          console.log("Match in inventory!")
          newLocation = player.inventory[i];
        }
      }
      if (results[0] == player.location.name) {
        console.log("Action refers to self!");
        newLocation = player.location;
        console.log(newLocation.descriptor);
      }

      player = doAction(results[1], player, newLocation)
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

  enter() {
    return this;
  }

  readContents() {
    let text;
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
      text = "You see a " + contents;
    } else {
      text = "You see nothing.";
    }
    addLine("You find yourself in a " + this.name + ". " + text);
  }

  inspect(player) {
    if (this.descriptor) {
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

class Door extends Room {
  constructor(name, descriptor) {
    super(name, descriptor);
    this.locked = true;
    this.contents = null;
  }

  addItem(obj) {
    this.contents = obj;
  }

  enter() {
    if(this.locked == false) {
      return this.contents;
    } else {
      addLine("The door is locked")
      return null;
    }
  }

  open() {
    if(this.locked == false) {
      player.move(this.contents[0])
    } else {
      addLine("The door is locked")
    }
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
    this.inventory = [];
  }

  move(destination) {
    if (destination != null) {
      this.cameFrom = this.location
      this.location = destination;
      this.location.readContents();
    }
  }
}

class Module extends Room {
  constructor(name, script, description) {
    super(name, description);
    this.script = script;
  }

  enter() {
    this.addModule();
    return this;
  }

  addModule() {
    let body = document.getElementsByTagName('body')[0];
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = function() {
      //You can put a load thing here.
    }
    script.src = this.script;
    body.appendChild(script);
  }

  readContents() {
    console.log("Moving to new module...")
  }
}
