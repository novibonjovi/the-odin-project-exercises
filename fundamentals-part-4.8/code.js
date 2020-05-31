const output = document.querySelector('.output');
let num = prompt('Enter a number', '');

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}

for (let i = 2; i <= num; i++) {
  if (isPrime(i)) {
    const para = document.createElement('p');
    output.appendChild(para);
    para.textContent = i;
  }
}
