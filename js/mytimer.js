
var dayTag = document.querySelector("#day");

//get date
var d = new Date();
var day = d.getDate();
var month = d.getMonth();
var year = d.getUTCFullYear();

var monthInWords = "";

//convert date to words
switch(month){
  case 0:
    monthInWords = "January";
    break;
  case 1:
    monthInWords = "Febuary";
    break;
  case 2:
    monthInWords = "March";
    break;
  case 3:
    monthInWords = "April";
    break;
  case 4:
    monthInWords = "May";
    break;
  case 5:
    monthInWords = "June";
    break;
  case 6:
    monthInWords = "July";
    break;
  case 7:
    monthInWords = "August";
    break;
  case 8:
    monthInWords = "September";
    break;
  case 9:
    monthInWords = "October";
    break;
  case 10:
    monthInWords = "November";
    break;
  case 11:
    monthInWords = "December";
    break;
}

var dayInWord = day + " " + monthInWords + "," + " " + year;
dayTag.innerHTML = dayInWord;
 
  