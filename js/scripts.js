var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var upperDinosaur = dinosaur.toUpperCase();
var textReplace = text.replace('Velociraptor', upperDinosaur);
var lengthHalf = textReplace.length/2; 
// console.log(lengthHalf);

var partOftext = textReplace.slice(0,lengthHalf);

console.log(partOftext);