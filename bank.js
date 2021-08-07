let loginbtn = document.querySelector('#login');
loginbtn.addEventListener('click',()=>{
let form = document.querySelector('.login-form')
form.style.display = 'none';
let trans = document.querySelector('.trans-area')
trans.style.display = 'block';
})

//deposit btn

let deposit = document.querySelector('#depositadd');
deposit.addEventListener('click',()=>{
let amount = document.querySelector('#depositAmount').value;
let number = parseFloat(amount);

// console.log(number);

let currdeposit = document.querySelector('#currDeposit').innerText;
let newdeposit = parseFloat(currdeposit);
// console.log(currdeposit);
let total = number + newdeposit;
document.querySelector('#currDeposit').innerText = total;

let balance = document.querySelector('#depositAmount').value;
let newbalance = parseFloat(balance);

let currbalance = document.querySelector('#currBalance').innerText;
let oldbalance = parseFloat(currbalance);

let finalbalance = newbalance + oldbalance;

document.querySelector('#currBalance').innerText = finalbalance;


document.querySelector('#depositAmount').value ='';

})

//withdraw btn
let withbtn = document.querySelector('#addwithdraw');
withbtn.addEventListener('click',()=>{

let newwithdraw = document.querySelector('#withdrawamount').value;
let newwithnum = parseFloat(newwithdraw);

let currwithdraw = document.querySelector('#currwith').innerText;
let newwith = parseFloat(currwithdraw);

let finalwith = newwith + newwithnum;
document.querySelector('#currwith').innerText = finalwith;

let balance = document.querySelector('#withdrawamount').value;
let newbalance = parseFloat(balance);

let currbalance = document.querySelector('#currBalance').innerText;
let oldbalance = parseFloat(currbalance);

let finalbalance = oldbalance -1* newbalance;

document.querySelector('#currBalance').innerText = finalbalance;


document.querySelector('#withdrawamount').value ='';




});
