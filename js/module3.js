// const user1 = 'jjahmed1';
// const user2 = 'abubakar'

// const shoe = 'nike';
// let shoeQuantity = 20;
// let shoePrice = 50;

// const shirt = 'brown pawpatrol tshirt';
// let shirtQuantity = 30;
// let shirtPrice = 100;

// const cup = 'addidas';
// let cupQuantity = 10;
// let cupPrice = 100;


// user1 bought 3 shoes
// let qtyBought = 3;
// const shoesBal = shoeQuantity - qtyBought;
// console.log('shoe balance '+shoesBal);

// user2 bought 2 shirt and 2 cups

let qtyshirtBought = 2;
let qtycupBought = 2;
// const shirtBalance = shirtPrice * qtyshirtBought;
// const cupBalance = cupPrice * qtycupBought;
// const total = shirtBalance + cupBalance;
// console.log(total);

// function
function calculateTotalPrice(qty, rate) { // what the function expect is called a parameter
    const total = qty * rate;
    return total;
}

// const shirtBalance = calculateTotalPrice(shirtPrice, qtyshirtBought); // what the function  uses to compute it value is called arguments
// const cupBalance = calculateTotalPrice (qtycupBought, cupPrice);
// console.log(shirtBalance);

// objects
const shoe = {
    name: 'nike',
    price: 50,
    qty: 20,
    description: 'I am a Nike running shoe'
};

const cupe = {
    name: 'addidas',
    price: 100,
    qty: 10,
    description: 'I am a addidas tea cup'
};
const shirt = {
    name: 'brown pawpatrol tshirt',
    price: 100,
    qty: 30,
    description: 'I am a pawpatrol black tshirt'
};

// console.log(shoe['name']) // squared bracket
// console.log(shoe.price) // (.) dot notation
console.log(shirt.qty)
console.log(shirt.description)

const user1 = {
    name: 'sadiq',
    password: 'mypassword',
    email: 'jerry@gmail.com'
};

// console.log('userinfo: username('+user1.name+') password('+user1.password+') email(' +user1.email+')');
console.log('userinfo: username: '+user1['name']+' password: '+user1['password']+ ' email:'+user1['email'])