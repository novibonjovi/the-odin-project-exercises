const output = document.querySelector('.output');

let i = 1;
while (i <= 10) {
  const para = document.createElement('p');

  if (i % 2 === 0) {
    output.appendChild(para);
    para.textContent = i;
  }

  i++;
}
