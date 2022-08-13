let bill= document.querySelector('#bill-input');
let people= document.querySelector('#people-input');
let tipPercent= document.querySelectorAll('.tip-button');
let tipAmount= document.querySelector('#total-amount');
let personAmount= document.querySelector('#person-amount');
let customTip= document.querySelector('#custom-button');
let reset= document.querySelector('#reset-button');
let text1= document.querySelector('.text1');
let text2= document.querySelector('.text2');
let cantbeText1= document.querySelector('#cantbe-text1');
let cantbeText2= document.querySelector('#cantbe-text2');
let total;
let tip;

function cantbeFunction() { 
  if (people.value == 0 && bill.value == '' || people.value == '' && bill.value == 0) {
  people.classList.add('red')
  bill.classList.add('red')
  cantbeText1.classList.remove('display-none')
  cantbeText2.classList.remove('display-none')  
}
else if (people.value == 0 || people.value == '') {
  people.classList.add('red')
  cantbeText2.classList.add('display-none')
} 
else if (bill.value == 0 || bill.value == '') {
  bill.classList.add('red')
  cantbeText1.classList.add('display-none')
}
else {
  tipAmount.textContent= '$' + tip;
  personAmount.textContent= '$' + Math.round((bill.value / people.value + tip) * 100) / 100
}
}

tipPercent.forEach(percent => percent.addEventListener('click', e => {
  cantbeText1.classList.add('display-none')
  cantbeText2.classList.add('display-none')  
  people.classList.remove('red')
  bill.classList.remove('red')
 
  total= (bill.value / 100) * parseInt(percent.textContent);
  tip= Math.round((total / people.value)*100) / 100;
  
  cantbeFunction()
  console.log(percent, people.classList)
}))

reset.addEventListener('click', e => {
  tipAmount.textContent= '$0.00';
  personAmount.textContent= '$0.00';
  bill.value='';
  people.value='';
  cantbeText1.classList.add('display-none')
  cantbeText2.classList.add('display-none')  
  people.classList.remove('red')
  bill.classList.remove('red')
})


function some() {
  cantbeText1.classList.add('display-none')
  cantbeText2.classList.add('display-none')  
  people.classList.remove('red')
  bill.classList.remove('red')

  total= (bill.value / 100) * parseInt(customTip.value);
  tip= Math.round((total / people.value)*100) / 100;

  if (customTip.value == 0 || customTip.value == undefined) {
    return
  } 
  else {
    cantbeFunction()
  }
}

customTip.addEventListener('click', e => some());
customTip.addEventListener('change', e => some());



