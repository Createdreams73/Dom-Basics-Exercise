// DOM BASICS EXERCISE
//1
const xMen = document.getElementById('x-men');

//2
const centered = document.getElementByIdClassName ('Center');

//3
const batman = document.querySelector('#batman');

//4
const h3s = document.querySelectorAll ('h3');

//5a
const h1 = document.querySelector ('h1');

//5b
h1.innertext = 'The Best Animated Superhero TV Shows Ever!';

//6a
const honorableMentions = document.getElementById ('#honorable-mentions');
//OR
//const honorableMentions = document.queryselector 
('#honorableMentions');
 

//6b
honorableMentions.innerHTML = '<p>OTHER GREAT SHOWS</p>';

//7a
const aTag = document.querySelector('a');

//7b
//atag.href = "https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/&quot;" 

aTag.innerHTML = '<a href="https://screenrant.com/best-animated-superhero-comic-book-shows-ever/">The Best Animated Superhero TV Shows Ever</a>';

//8a
h1.classList.add('background', 'test-color');

//9
h1.classList.remove('background');

//10a
const h4 = document.createElement ('h4');

//10b
h4.innerHTML = 'Is Avatar: The Last Airbender A Superhero Show?';

//10c
const body =document.querySelector('body');
body.prepend(h4);

//11a
const h5 = document.createElement('h5');

//11b
h5.innerText = 'Heroes in a half shell Turtle Power!';

//11c
aTag.insertAdjacentElement('afterend', h5);

//12
//const superman = document.querySelector('ul>li');
//superman.remove();
 //OR
 const superman = document.querySelector('ul>li').remove();

