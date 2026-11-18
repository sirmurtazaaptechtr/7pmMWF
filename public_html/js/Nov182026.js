document.write("<h1>Variables and DataTypes</h1>");

// x = 12;

// var x;
// x = 12;

let x; // declearation of variable x
x = 12; // initilization of variable x with 12

x = 2;

let y = 15;
y = 12;

const pi = 22/7;

let data;
console.log(data);
console.log(typeof(data));

data = null;
console.log(data);
console.log(typeof(data));

data = 12;
console.log(data);
console.log(typeof(data));
console.log(data + " is " + typeof(data));// concatination method
console.log(`${data} is ${typeof(data)}`);// template literal method

data = 3.14;
console.log(`${data} is ${typeof(data)}`);

data = 9876543210123456789n;
console.log(`${data} is ${typeof(data)}`);

data = true;
console.log(`${data} is ${typeof(data)}`);

data = false;
console.log(`${data} is ${typeof(data)}`);

data = "Abdullah";
console.log(`${data} is ${typeof(data)}`);

data = ["Abdullah", 12, true];
console.log(data);
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);
console.log(`${data} is ${typeof(data)}`);

data = {name:"Abdullah", age:12, isStudent:true};
console.log(data);
console.log(data.name);
console.log(data.age);
console.log(data.isStudent);
console.log(`${data} is ${typeof(data)}`);