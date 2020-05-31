const output = document.querySelector('.output');

for (let i = 0; i <= 10; i++) {
  const para = document.createElement('p');

  if (i % 2 === 0) {
    output.appendChild(para);
    para.textContent = i;
  }
}
