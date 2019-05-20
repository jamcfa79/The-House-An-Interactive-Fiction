// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player();

//Create your objects
let crawlspace = new Room("crawl space");
let polaroid = new Item("polaroid", "of a young girl, blond hair, blue eyes, freckles. She is on a couch with a man that radiates darkness, even through the picture. On the bottom, it says 'S and Marilyn' in red Sharpie.")
let knife = new Item("knife", "covered in dried blood.")

let office = new Room("office");
let box = new Item("letter", "to Laurie Ipsum, from S. Daemonium. It says, 'Laurie, do you remember? Before you were born? And then you were, and you quickly became weak? Close your eyes and remember. I know you can. You aren't who you or I wanted you to be. Respond and I could give you anything. Regards, S. Daemonium'")
let head = new Item("head", "old and dry. Blond hair, blue eyes, freckles. The expression of terror locked into it. Pentagrams cut around the eyes.")

let room1 = new Room("bloody room");
let book = new Item("book", "a diary. It says, 'Dear Diary, I did what he told me. I killed the girl and drew the star on the floor with her blood. He said he would be back by now and I would have the eternal life he promised. I'm sure he has lied to me. What did I do wrong? It's not fair. Diary, tonight I think I will kill myself. He lied to me after I gave him everything. I can't live with what I've done.'")
let pentagram = new Item("pentagram", "drawn on the floor with blood. It is accompanied with dried intestines.")

let room2 = new Room("cold room");
let hangingbody = new Item("hanging body", "a woman. A young woman with long dark hair and pale, greyish skin.")
let note = new Item("note", "from someone else. Not the hanging woman. It says, 'Weak, gullible, insignificant. You really thought I'd give you anything? Why are you so sorry? You think I can't do it without you? You already did most of it. It's too late now.'")

let room3 = new Room("quiet room");
let camera = new Item("camera", "broken. The lens is cracked. But there is a video on it. In the video a girl with blond hair is recorded from far behind, sitting on a park bench at night. As the camera zooms in it becomes apparent that she's pregnant. She sits peacefully until a dark haired woman with a knife suddenly and with haste cuts the pregnant woman's head off. The video ends soon after, with the camera shaking and the one holding it laughing. ")
let body = new Item("body", "headless and was pregnant. In the stomach the sentence, 'He is gone again.' is cut.")

let blacklight = /blacklight/;
let blacklightaction = function (action, player, obj) {
  if(action == 'blacklight') {
    addLine("All over the room, the phrase, 'I killed the Christ so I could birth the Antichrist.' is written in ink only seeable under blacklight.");
  }
  return player
}
addAction(blacklight, blacklightaction)

// Put them in their spots
crawlspace.addItem(polaroid);
crawlspace.addItem(knife);
office.addItem(box);
office.addItem(head);
room1.addItem(book);
room1.addItem(pentagram);
room2.addItem(hangingbody);
room2.addItem(note);
room3.addItem(camera);
room3.addItem(body);
let locations = [];
locations.push(crawlspace, office, room1, room2, room3);
let myLocation = new Room("hallway");

myLocation.addItems(locations);

player.move(myLocation)
