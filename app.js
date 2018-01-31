//create your variables
const button =document.querySelector('#generateBtn');
const firstNameEl = document.querySelector('#first');
const lastNameEl = document.querySelector('#last');
const lastNames = [
    'Gorgonzole' ,
    'Shedder' ,
    'Havarti' ,
    'Head'
];
const firstNames = [
    'Neo' ,
    'Morpheus' ,
    'Trinity' ,
    'Poopy'
];

//add your eventlisteners
button.addEventListener('click' ,generateName);

//functions
function generateName(e){
    const rnLastName = randomChoice(lastNames);
    const rnFirstName = randomChoice(firstNames);
    firstNameEl.textContent =rnFirstName;
    lastNameEl.textContent = rnLastName;
}

function randomChoice(array) {
    const rnIndex = Math.floor (Math.random() * array.length);
    return array[rnIndex];
}