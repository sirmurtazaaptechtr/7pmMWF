/*
let age = Number(prompt("Enter your age"));

if(age >= 18) 
{
    document.write("You can apply for DL");
}
else 
{
    document.write(`You can apply DL after ${18 - age} years`);
}
*/

/*
let max_marks = 75;
let obt_marks = Number(prompt(`Enter Marks(out of ${max_marks})`));

document.write(`Marks: ${obt_marks} / ${max_marks}<br>`);

let percentage = obt_marks / max_marks * 100;

document.write(`Percentage: ${percentage.toFixed(2)}%<br>`);

if(percentage >= 40.0) {
    document.write(`Status: PASS<br>`);
}else {
    document.write(`Status: FAIL<br>`);
}

if(percentage >= 75.0) {
    document.write(`Grade: D<br>`);
}else if(percentage >= 65.0) {
    document.write(`Grade: C<br>`);
}else if(percentage >= 40.0) {
    document.write(`Grade: P<br>`);
}else {
    document.write(`Grade: No-Grade<br>`);
}
*/

let username = prompt("Enter Username");
if(username == 'admin') {
    let password = prompt("Enter Password");
    if(password == '1234') {
        document.write(`Dear ${username}, Welcome to our Website<br>`);
    }else {
        document.write(`Invalid Password!<br>`); 
    }
}else {
    document.write("Invalid Username!");
}