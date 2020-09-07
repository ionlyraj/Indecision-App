function square(x){
    return x*x;
}

console.log('ES5 : ' + square(3));

const squareNumber = (x) => {
    return x*x;
}

console.log('ES6 : '+squareNumber(5));

const sqrNum = (x) => x*x;

console.log('ES6 : '+sqrNum(6));

const fullName = 'Rajeev Kumar';

function firstName(name){
    const firstN = name.split(' ')[0];
    return firstN;
}

console.log(firstName(fullName));

const firstNameEs6 = (name) => {
    const firstN = name.split(' ')[0];
    return firstN;
}

console.log('ES6 : ' + firstNameEs6(fullName));

const frstNmeEs6 = (name) => name.split(' ')[0];

console.log('ES6 Again with arrow function: ' + frstNmeEs6(fullName));
