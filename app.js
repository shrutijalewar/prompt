
var prompt = require('sync-prompt').prompt;
var first = prompt( 'what is your first name?');
var last = prompt( 'what is your last name?');
var full  = (first +' '+last);
console.log('name is', full);

var color = prompt('What is your favorite color');
console.log('your favorite color is', color);

var age = prompt('what is your dog \'s age? ');
console.log(typeof age);
age = parseInt(age);
// you can also do the multiplication in the console
// console.log(age*7)

console.log(age) ;

var humanAge = age * 7;
console.log('your dog is' + age + ' years old ');
console.log('your dog is' + humanAge + ' human years old ');

var age = prompt('what is your age?');
age = parseInt(age);

if (age >= 21 ){
  console.log('you can drink');
} else{
      console.log('no drink for you');
  }

var m  = prompt ('Are you using Farenheit or Celcius? F/C?');
var t = prompt ("what temperature do you need converted?");

t = parseInt(t);

if( m === "C") {var res = t * 9/5 +32;
  console.log ("that is" +res + "F")
}
else{ var res = ( (t-32) * (5/9))
  console.log ("that is" + res+ "C")
}
//chyld code
//var scale = ("what scale are you using?");
//var temp = prompt("what is the temperature?");
//temp = parseInt(temp);
//var converted;
//var alt;
//
//if (scale === 'f') {
//converted = (temp - 32) * (5/9);
//alt = 'c';

//}else { (temp + 32) * (9/5);
//alt = 'f'
//}
//console.log (temp + scale + ' -> ' + converted + alt);
//

//BMI Calculator
//

var wt = prompt ("What is your weight in lb?");
var ht = prompt ("What is your height in inches?");

wt = parseInt (wt);
ht = parseInt (ht);
var BMI = ((wt * 703)/ (ht * ht));
//var a = wt * 703;
//var b = Math.pow(ht,2);
//var BMI = a/b
//
console.log ("your BMI is" + BMI.toFixed(2))




