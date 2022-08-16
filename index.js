const bill = document.querySelector('#bill-input');
const people = document.querySelector('#people-input');
const tipPercent = document.querySelectorAll('.tip-button');
const tipAmount = document.querySelector('#total-amount');
const personAmount = document.querySelector('#person-amount');
const customTip = document.querySelector('#custom-button');
const reset = document.querySelector('#reset-button');
const cantbeText1 = document.querySelector('#cantbe-text1');
const cantbeText2 = document.querySelector('#cantbe-text2');
let total;
let tip;

function cantbeFunction() {
  if (people.value === 0 && bill.value === ''
    || (people.value === '' && bill.value === 0)
    || (people.value === '' && bill.value === '')
    || (people.value === 0 && bill.value === 0)
  ) {
    people.classList.add('red');
    bill.classList.add('red');
    cantbeText1.classList.remove('display-none');
    cantbeText2.classList.remove('display-none');
  } else if (people.value === 0 || people.value === '') {
    people.classList.add('red');
    cantbeText2.classList.remove('display-none');
  } else if (bill.value === 0 || bill.value === '') {
    bill.classList.add('red');
    cantbeText1.classList.remove('display-none');
  } else {
    tipAmount.textContent = `$${tip}`;
    personAmount.textContent = `$${Math.round((bill.value / people.value + tip) * 100) / 100}`;
  }
}

tipPercent.forEach((percent) => percent.addEventListener('click', () => {
  cantbeText1.classList.add('display-none');
  cantbeText2.classList.add('display-none');
  people.classList.remove('red');
  bill.classList.remove('red');

  total = (bill.value / 100) * parseInt(percent.textContent, 10);
  tip = Math.round((total / people.value) * 100) / 100;

  cantbeFunction();
}));

reset.addEventListener('click', () => {
  tipAmount.textContent = '$0.00';
  personAmount.textContent = '$0.00';
  customTip.value = '';
  bill.value = '';
  people.value = '';
  cantbeText1.classList.add('display-none');
  cantbeText2.classList.add('display-none');
  people.classList.remove('red');
  bill.classList.remove('red');
});

function customTipCalc() {
  total = (bill.value / 100) * parseInt(customTip.value, 10);
  tip = Math.round((total / people.value) * 100) / 100;

  if (customTip.value !== 0 || customTip.value !== undefined) {
    cantbeFunction();
  }
}

customTip.addEventListener('input', () => {
  customTipCalc()
});

customTip.addEventListener('click', () => {
  customTipCalc()
});

bill.addEventListener('input', () => {
  bill.value = bill.value.replace(/[^0-9.]/g, '');
});

people.addEventListener('input', () => {
  people.value = people.value.replace(/[^0-9]/g, '');
});
