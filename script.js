
function user(username)
{
   this.username = username,
   this.People_you_follow = [],
   this.People_follow_you = [],
   this.addPeopleFollowYouToList = function (usertoaddtolist){
      this.People_follow_you.push(usertoaddtolist);
      usertoaddtolist.People_you_follow.push(this);
   },
   this.addPeopleYouFollowToList = function (usertoaddtolist){
      this.People_you_follow.push(usertoaddtolist);
      usertoaddtolist.People_follow_you.push(this);
   },
   this.incomingMassage = function (useri,massage)
   {
      console.log(massage) 
      let nm = document.createElement("ul");
      let ptm = document.getElementById(useri.username);
      nm.innerText = this.username + " : " + massage;
      ptm.appendChild(nm);
   },
   this.addMassage = function ()
   {
      let themassage = prompt("אנא הקלד את ההודעה"); 
      for (let i=0; i<this.People_follow_you.length; i++)
      {
         this.incomingMassage(this.People_follow_you[i],themassage);
      }
   }
}

let u1 = prompt("הקלד שם של משתמש ראשון"); 
let u2 = prompt("הקלד שם של משתמש שני"); 
let u3 = prompt("הקלד שם של משתמש שלישי"); 
let u4 = prompt("הקלד שם של משתמש רביעי"); 

let user1 = new user(u1);
let user2 = new user(u2);
let user3 = new user(u3);
let user4 = new user(u4);

let users = [user1,user2,user3,user4];
function addfriend1(){
   let name = prompt("הקלד שם משתמש למעקב"); 
   user1.addPeopleYouFollowToList(chackifnameisuser(name,user1)); 
   }
function addfriend2(){
   let name = prompt("הקלד שם משתמש למעקב"); 
   user2.addPeopleYouFollowToList(chackifnameisuser(name,user2)); 
   }
function addfriend3(){
   let name = prompt("הקלד שם משתמש למעקב"); 
   user3.addPeopleYouFollowToList(chackifnameisuser(name,user3)); 
   } 
function addfriend4(){
   let name = prompt("הקלד שם משתמש למעקב"); 
   user4.addPeopleYouFollowToList(chackifnameisuser(name,user4)); 
   }  
   

function chackifnameisuser(name, thisuser){
   if (name == thisuser.username){
      return(null);
   }
   else 
   {
      for (let i=0; i<users.length; i++)
      {
         if (name == users[i].username){
            return(users[i]);
         }
      }
   }
}


let u1n = document.getElementById("name1");
let new1 = document.createTextNode(" שם המשתמש הוא "+ user1.username);
u1n.setAttribute("id",user1.username);
u1n.appendChild(new1);

let u2n = document.getElementById("name2");
let new2 = document.createTextNode(" שם המשתמש הוא "+ user2.username);
u2n.setAttribute("id",user2.username);
u2n.appendChild(new2);

let u3n = document.getElementById("name3");
let new3 = document.createTextNode(" שם המשתמש הוא "+ user3.username);
u3n.setAttribute("id",user3.username);
u3n.appendChild(new3);

let u4n = document.getElementById("name4");
let new4 = document.createTextNode(" שם המשתמש הוא "+ user4.username);
u4n.setAttribute("id",user4.username);
u4n.appendChild(new4);

// יצירת כפתורים
let ptb1 = document.getElementById("button1");
let b1 = document.createElement("button");
b1.innerText = "הודעה חדשה";
ptb1.appendChild(b1);
document.getElementById("button1").onclick = function() {user1.addMassage()};

let ptb2 = document.getElementById("button2");
let b2 = document.createElement("button");
b2.innerText = "הודעה חדשה";
ptb2.appendChild(b2);
document.getElementById("button2").onclick = function() {user2.addMassage()};

let ptb3 = document.getElementById("button3");
let b3 = document.createElement("button");
b3.innerText = "הודעה חדשה";
ptb3.appendChild(b3);
document.getElementById("button3").onclick = function() {user3.addMassage()};

let ptb4 = document.getElementById("button4");
let b4 = document.createElement("button");
b4.innerText = "הודעה חדשה";
ptb4.appendChild(b4);
document.getElementById("button4").onclick = function() {user4.addMassage()};


