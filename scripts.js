// scripts.js
var newName = 'Marian'
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);
if (allNames.indexOf(newName) === -1) {
  var lenght = allNames.push(newName);
  alert ('Array lenght' + lenght);
}
console.log(allNames.toString());
