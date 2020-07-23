const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');

const btn2 = document.querySelector('#btn-2');
btn2.addEventListener('click', () => {
  alert('Hello World');
});

function alertFunction() {
  alert('YAY YOU DID IT!');
}

const btn3 = document.querySelector('#btn-3');
btn3.addEventListener('click', function (e) {
  console.log(e.target);
});

// create nodelist of all buttons and add eventListener to all of them
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    alert(button.id);
  });
});
