var userWeight = +prompt('Enter your weight');
var time = +prompt('Enter your time');
var gender = prompt('Enter your gender');

if(userWeight <= 100 && time < 6 && gender) {
    console.log('come to our tryout!!');
} else {
    console.log('better luck next time');
}

var age = +prompt('Enter your age');
var res =prompt('Enter resident');
if((age >65 || age))
    


var progLang =prompt('Enter your programing lang');
if(progLang === 'js'){
 } else{
    console.log('js seekho');
}
var city =prompt('Enter your city');
if(city=== 'karachi'){

}else {
    console.log('karachi ajao');
}

var experience= +prompt('Enter your experience');
if(experience >= 2){

} else {
    console.log('experience lao');
}
 //////////////////////////////////

// ASSINGMENT //
// CH..no  11  //

if('x !== y'){
    console.log('x is not equal to y')
}

if ('x  >= y') {
    console.log('x is greater than or equle to y');
}  

if ('x ! ==10') {
    x = 5;
}

var  number= 5 ;
if ( number !== 10){
    alert('congratulations !');
}


var firstName =prompt('Enter your name');
if (firstName !=='john' ){
    alert('no match');
}

  // Ch no....12 //
   
  var  x = 5;
  var y =  10;
  if(x >= y){
    alert('x is greater than or equle to y');
  }else {
    alert('x is less than y');
  }


var marks = prompt('Enter your marks(out of 100):');
var percentage = (marks/100)* 100;
if(percentage >= 80) {
    alert('you got a A!');

}else if(percentage >= 60){
    alert('you got a B');
}else if(percentage >= 40){
     alert('you got a C');
} else{
    alert('you failed');
}


var a =10 ;
if(a === 10){
    alert('a is 10');
}else{
    alert('the correct value is'+ a);
}


var city = prompt('Enter your city');
if (city ==='karachi'){
    console.log('you entered:'+ city);
}else{
    console.log('No city enter');
}

//  Ch No.....13 ///

var a = 2;
var b =2;
var c =5;
var d = 5;
if(a === b && c === d){
    console.log('both condition are true');
}


if(a=== b || c === d ||  d !== d){
    console.log('atleast one condition is true');
}

var name1 = 'hamza';
var name2 = 'Arsalan';
var  age  =50;
if((name1 ==='hamza' || name2 ==='arsalan') && age < 60){
    console.log('Name is either hamza or arsalan and age is lessthan 60');
}

var id1 =10;
var id2 = 20;
if(id1 < id2){
    alert(id1 + 'is less than the'+ id2);
}

var firstName = 'jhon';
var lastName = 'Doe';
var inputfirstname = prompt('Enter your firstname');
var inputlastname = prompt('Enter your last name');
if(firstName=== inputfirstname && lastName === inputlastname){
    alert('Names Match');
}else {
    alert('Names do not match');
}

/// Ch No....14//

var password =prompt('Enter your password');
if(password){
    if(password.length <= 5){
        alert('password must be greater than 5');
    }else{
        alert('OK');
    }
}


var c = 'Max';
var a=1 ;
if(a === 1) {
    if(c === 'max'){
        alert('OK');
    }
}



var a =10 ;
var b= 10;
if(a === b){
    if(a <= b){
        alert('the test pass');
    }
}


var city = 'karachi';
if(city === 'karachi'){
    console.log('The city of Lights');
}

var zipCode = 10010;
var city =  'Karachi';
if(city === 10010){
    alert('Please write correct city');
}


var x = 1;
if( x=== 1){
    x= 5;
    console.log(x);
}