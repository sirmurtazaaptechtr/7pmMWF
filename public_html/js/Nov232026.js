const outBox =  document.getElementById('outBox');
let num = 9;

console.log(num);
outBox.innerHTML += `<p>${num}</p>`;

// Post-increment
num++;// num = num + 1;
outBox.innerHTML += `<p>${num}</p>`;

//Pre-increment
++num;// num = num + 1;
outBox.innerHTML += `<p>${num}</p>`;

let temp = 0;
outBox.innerHTML += `<p>(${num}, ${temp})</p>`;

temp = ++num;
outBox.innerHTML += `<p>(${num}, ${temp})</p>`;

temp = num++;
outBox.innerHTML += `<p>(${num}, ${temp})</p>`;

temp = --num;
outBox.innerHTML += `<p>(${num}, ${temp})</p>`;

temp = num--;
outBox.innerHTML += `<p>(${num}, ${temp})</p>`;

// Relational/Comparision Operators

let inputCode = '0000';
let sysCode = '0000';

outBox.innerHTML += `<p>${inputCode == sysCode}</p>`;

let num1 = 15;
let num2 = 5;

outBox.innerHTML += `<p>${num1} > ${num2}: ${num1 > num2}</p>`;
outBox.innerHTML += `<p>${num1} < ${num2}: ${num1 < num2}</p>`;
outBox.innerHTML += `<p>${num1} >= ${10 + num2}: ${num1 >= 10 + num2}</p>`;
outBox.innerHTML += `<p>${num1 - 10} <= ${num2}: ${num1 - 10 <= num2}</p>`;

num2 = "15";
outBox.innerHTML += `<p>${num1} == ${num2}: ${num1 == num2}</p>`;
outBox.innerHTML += `<p>${num1} != ${num2}: ${num1 != num2}</p>`;

outBox.innerHTML += `<p>${num1} === ${num2}: ${num1 === num2}</p>`;
outBox.innerHTML += `<p>${num1} !== ${num2}: ${num1 !== num2}</p>`;


// Logical Operators

outBox.innerHTML += `<p>true AND true: ${true && true}</p>`;
outBox.innerHTML += `<p>true AND false: ${true && false}</p>`;
outBox.innerHTML += `<p>false AND true: ${false && true}</p>`;
outBox.innerHTML += `<p>false AND false: ${false && false}</p>`;

outBox.innerHTML += `<p>true OR true: ${true || true}</p>`;
outBox.innerHTML += `<p>true OR false: ${true || false}</p>`;
outBox.innerHTML += `<p>false OR true: ${false || true}</p>`;
outBox.innerHTML += `<p>false OR false: ${false || false}</p>`;

outBox.innerHTML += `<p>true XOR true: ${true ^ true}</p>`;
outBox.innerHTML += `<p>true XOR false: ${true ^ false}</p>`;
outBox.innerHTML += `<p>false XOR true: ${false ^ true}</p>`;
outBox.innerHTML += `<p>false XOR false: ${false ^ false}</p>`;

outBox.innerHTML += `<p>NOT true: ${!true}</p>`;
outBox.innerHTML += `<p>NOT false: ${!false}</p>`;

