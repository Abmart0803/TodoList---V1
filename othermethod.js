// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// //set app to use ejs, the code is from ejs.co and let it be place immediately you declare your add
// app.set('view engine', 'ejs');

// app.get("/", function(req, res) {

// var today = new Date();
// var currentDay = today.getDay();
// var day = "";
// // we will have to use switch statement here as the numbers of days in a week is 
// // seven and it will be more tha 4 if statement if we are to use if statement.
// switch (currentDay) {
//   case 0:
//     day = "Sunday";
//     break;

//   case 1:
//     day = "Monday";
//     break;

//   case 2:
//     day = "Tuesday";
//     break;

//   case 3:
//     day = "Wednesday";
//     break;

//   case 4:
//     day = "Thursday";
//     break;

//   case 5:
//     day = "Friday";
//     break;

//     case 6:
//     day = "Saturday";
//     break;

//   default:
//     console.log("Error: current day is equal to: " + currentDay);
// }

// res.render("list", {kindOfDay: day});
  
// });

// app.listen(3000, function(){
//   console.log("Server is running on port 3000");
// });

// // this method is longer code 