var noun = prompt('Please type a name of a Company');
var product = prompt('Please type a name of a Product');
var people = prompt('Please type a name of a group of people');

var sentence = "<h2>My Company,  " + noun ;
sentence += ' is developing ' +product ;
sentence += ' to help ' +people +'. </h2';

document.write(sentence);