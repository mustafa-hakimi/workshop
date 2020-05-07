/* Count genders
---------------------------------------------*/
let person = [
{
  name:"Ali",
  gender: "male"
},

 {
  name: "Mohsen",
  gender: "male"
},

{
  name :"Mahmoud",
  gender : "male"
},

{
  name :"Sahar",
  gender : "female"
},

{
  name :"Mahtab",
  gender : "female"
},

 {
  name :"Yasmine",
  gender : "female"
},

];

let numGirls = 0;
let numBoys = 0;

for ( let i = 0; i < person.length; i++) {
  let gender = person.gender
  if(gender === "female") {
    numGirls++
  }
  else {
    numBoys++
  }
  }
 let output = "My list contain: " + numGirls + "Girls and " + numboys + "Boys"
 console.log(output);



