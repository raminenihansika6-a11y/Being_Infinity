console.log("Hello from JS");


const users = [
  {
    "name" :"Jane Doe",
    "gender" : "Female",
    "image" : "../images/jane.png"
  },
  {
    "name" :"John Doe",
    "gender" : "Male",
    "image" : "../images/john.png"
  },
]

console.log("frontend")
let curUserId = 0;
function toggle(){
  if(curUserId == 0)
    curUserId=1;
  else
    curUserId=0;
  // image
  document.getElementById("img").src=users[curUserId].image;
  // name
  document.getElementById("card-name").innerText=users[curUserId].name;
  // gender
  document.getElementById("card-gender").innerText=users[curUserId].gender;
}
console.log("Hello from JS");



function getRandomUser() {
  fetch("https://randomuser.me/api")
   .then(function (data) {
     return data.json()
   })
   .then(function (parsedData) {
    // console.log(parseData)
    let first = parsedData.results[0].name.first;
    let last = parsedData.results[0].name.last;
    let name = first + " " + last;

    let gender = parsedData.results[0].gender;
    console.log(name)
     let imgUrl = parsedData.results[0].picture.large;

    // gender
    document.getElementById("card-gender").innerText = gender;
    //name
    document.getElementById("card-name").innerText = name;
    //img
    document.getElementById("img").src = imgUrl;
   })
}