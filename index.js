let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.listen('9000');
app.use(express.static('public'));

let horseInfo = {
  horsename: "Auztin",
  horsetype: "Stallion",
  appointment: "19/11/2017",
  dob: "23/05/1996",
  breed: "Horse",
  sire: "Fuzzy",
  dam: "Wuzzy",
  gsire: "MrFuz",
  damsire: "MissWuz",
  fei: "thing",
  feed: "corn",
  supplements: "steroids",
  rugging: "idk",
  medications: "panadol",
  notes: "I dont understand horses",
  schedmon: "Eat",
  shedtues: "Drink",
  schedwed: "Sleep",
  schedthurs: "Pray",
  schedfri: "Repeat",
  schedsat: "Misc",
  schedsun: "Date Night"
};

app.get('/api/horse', loadHorse);

console.log("Connected")

function loadHorse(req, res){
  console.log(req.query);
  res.json(horseInfo);
}
