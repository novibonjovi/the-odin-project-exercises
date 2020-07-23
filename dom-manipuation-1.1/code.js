const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// My code for the exercise goes here
const para = document.createElement('p');
para.style.color = 'red';
para.textContent = "Hey I'm red!";

container.appendChild(para);

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";

container.appendChild(h3);

const divBlack = document.createElement('div');
const h1 = document.createElement('h1');
const para2 = document.createElement('p');

divBlack.style.backgroundColor = 'pink';
divBlack.style.border = '2px solid black';
h1.textContent = "I'm in a div!";
para2.textContent = 'ME TOO!';

divBlack.appendChild(h1);
divBlack.appendChild(para2);

container.appendChild(divBlack);
