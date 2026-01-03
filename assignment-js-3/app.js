// Chapter:9-11 Q:1

// var city = prompt ("Enter your city")
// if (city == "karachi"){
//     alert ("Welcome to city of lights")
// }


// Chapter:9-11 Q:2
// var gender = prompt("Enter your Gender")
// if (gender == "female"){
//     alert ("Good Morning Ma'am")
// }else if (gender == "male"){
//     alert ("Good Morning Sir")
// }else{
//     alert("Good Morning")
// }

// Chapter:9-11 Q:3
// var signal = prompt("Enter the color of road traffic signal")
// if (signal == "red"){
//     alert ("Must Stop")
// } else if (signal == "green"){
//     alert("Move now")
// } else if (signal == "yellow") {
//     alert("Ready to move")
//  } 


// Chapter:9-11 Q:4
// var fuel = +prompt("Enter remaining fuel in car (in litres)")
// if (fuel < 0.25){
//     alert ("Please refill the fuel in your car")
// }else if (fuel >= 0.25){
//     alert ("You have enough fuel")
// }

// Chapter:9-11 Q:5
// var a = 4
// if (++a === 5){
//      alert ("given condition for variable a is true");
// }
// var b = 82
// if (b++ === 83){
//     alert ("given condition for variable b is true");
// }
// var c = 12
// if (c++ === 13){
//     alert ("condition 1 is true");
// }
// if (c === 13){
//     alert ("condition 2 is true");
// }
// if (++c < 14){
//     alert ("condition 3 is true");
// }
// if (c === 14){
//     alert ("condition 4 is true");
// }

// var materialCost = 20000
// var laborCost = 2000 
// var totalCost = materialCost + laborCost
// if (totalCost === laborCost + materialCost){
//     alert ("The cost equals");
// }
// if (true){
//     alert ("True");
// }
// if (false){
//     alert ("False");
// }
// if ("car" < "cat"){
//     alert ("car is smaller than cat");
// }

// Chapter:9-11 Q:6

// var sub1 = +prompt("Enter your marks for subject:1")
// var sub2 = +prompt("Enter your marks for subject:2")
// var sub3 = +prompt("Enter your marks for subject:3")
// var totalMarks = 300
// var allSubMarks = sub1 + sub2 + sub3
// var percentage = (allSubMarks / totalMarks) * 100
// if (percentage >= 80){
//     document.write("<h1>Marks Sheet</h1><br />")
//     document.write("Total marks:300 <br />Marks Obtained:" + allSubMarks +
//         "<br />Percentage:" + percentage + "%<br />Grade:A+<br />Remarks:Excellent work!!"
//     ) 
// }else if(percentage >= 70){
//     document.write("<h1>Marks Sheet</h1><br />")
//          document.write("Total marks:300 <br />Marks Obtained:" + allSubMarks +
//         "<br />Percentage:" + percentage + "%<br />Grade:A<br />Remarks:Good Job!!"
//     ) 
// }else if(percentage >= 60){
//     document.write("<h1>Marks Sheet</h1><br />")
//          document.write("Total marks:300 <br />Marks Obtained:" + allSubMarks +
//         "<br />Percentage:" + percentage + "%<br />Grade:B<br />You need to improve"
//     ) 
// }else if(percentage < 60){
//     document.write("<h1>Marks Sheet</h1><br />")
//          document.write("Total marks:300 <br />Marks Obtained:" + allSubMarks +
//         "<br />Percentage:" + percentage + "%<br />Grade:Fail<br />Remarks:Sorry"
//     ) 
// }

// Chapter:9-11 Q:7

// var secrectNum = 7
// var guess = prompt("Guess the secret Number! Between 1-10")
// if (guess == secrectNum){
//     alert("Bingo!! You're Correct!")
// }else if(guess == secrectNum + 1){
//     alert("You're soo close!!")
// }else if(guess == secrectNum - 1){
//     alert("You're soo close!!")
// }else{
//     alert("Try Again!")
// }

// Chapter:9-11 Q:8
// var number = +prompt("Enter a number to check if it is divisible by 3")
// var result = number % 3
// if (result == 0){
//     alert("your result is 0")
// }else if (result != 0){
//     alert("your number is not divisible")
// }

// Chapter:9-11 Q:9
// var check = +prompt("Enter a number to check weather its odd or even")
// var answer = check % 2
// if(answer == 0){
//     alert("your number is even")
// }else if(answer != 0){
//     alert("your number is odd")
// }

// Chapter:9-11 Q:10
// var temperature = +prompt("Enter you current temperature")
// if (temperature >= 40){
//     alert("Its too hot outside!")
// }else if(temperature >= 30){
//     alert("The weather today is normal")
// }else if(temperature >= 20){
//     alert("Today's Weather is cool")
// }else if(temperature >= 10) {
//      alert("OMG!! Today's waether is soo cool!")   
// }

// Chapter:9-11 Q:11
// var num1 = +prompt("Enter your first number!")
// var num2 = +prompt("Enter your second number!")
// var operation = prompt("What do you want to do?")
// var answer1 = num1 + num2
// var answer2 = num1 - num2
// var answer3 = num1 * num2
// var answer4 = num1 % num2
// var answer5 = num1 / num2
//  if (operation === "+"){
//     alert("answer:" + answer1)
//  }else if (operation === "-"){
//     alert("answer:" + answer2)
//  }else if (operation === "*"){
//     alert("answer:" + answer3)
//  }else if (operation === "%"){
//     alert("answer:" + answer4)
//  }else if (operation == "/"){
//     alert("answer:" + answer5)
//  }

//Chapter:12-13 Q:1

// var character = prompt("Enter Any Character you like")
// if(character >= "A" && character <= "Z"){
//     alert("Your letter is upper case")
// }else if(character >= "a" && character <= "z"){
//     alert("Your letter is lower case")
// }else if(character >= "0" && character <= "9"){
//     alert("Your letter is a number!")
// }else{
//     alert("Your letter is a special character")
// }

// Chapter:12-13 Q:2
// var firstNum = +prompt("Please enter your first number")
// var secondNum = +prompt("Enter your second number")
// if(firstNum == secondNum){
//     alert("Your numbers are equal!")
// }else if(firstNum > secondNum){
//     alert("Your first number is greater!!")
// }else{
//     alert("Your second number is greater")
// }

// Chapter:12-13 Q:3
//  var number = +prompt("Enter your number")
// if(number > 0){
//     alert("Your number is positive")
// }else if(number == 0){
//     alert("Your number is neutral")
// }else{
//     alert("your number is negative")
// }

// // Chapter:12-13 Q:4
// var letter = prompt("Enter one letter")
// if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
//     alert("truee!!")
// }else{
//     alert("False")
// }

// //Chapter:12-13 Q:5
// var correctPass = "karachi123"
// var password = prompt("Enter you Password")
// if(password == correctPass){
//     alert("Correct! The password you entered macthes the original!")
// }else if(password == ""){
//     alert("Please enter your password")
// }else{
//     alert("Your password is incorrect please try again")
// }

// Chapter:12-13
// var time = prompt("Enter your time in 24h format!")
// if(time < "18h"){
//     alert("Good day")
// }else {
//     alert("Good evening!")
// }

//Chapter:12-13 Q:7
var time = +prompt("enter time in 24h format (like 1900 for 7pm)")
if (time >= 0 && time < 1200) {
    alert("Good Morning");
}
else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon");
}
else if (time >= 1700 && time < 2100) {
    alert("Good Evening");
}
else if (time >= 2100 && time <= 2359) {
    alert("Good Night");
}
else {
    alert("Invalid time");
}

