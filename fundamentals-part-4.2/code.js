const input = document.querySelector('input');
const para = document.querySelector('p');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  let num = input.value;

  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);

    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    para.textContent += i + ' ';
  }
});
