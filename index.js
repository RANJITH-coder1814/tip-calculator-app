const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const peopleInput = document.getElementById('people');
const calculateBtn = document.getElementById('calculate');
const resetBtn = document.getElementById('reset');
const tipPerPerson = document.getElementById('tipPerPerson');
const totalPerPerson = document.getElementById('totalPerPerson');

calculateBtn.addEventListener('click', () => {
    const bill = parseFloat(billInput.value);
    const tipPercent = parseFloat(tipInput.value);
    const people = parseInt(peopleInput.value);

    if (bill > 0 && tipPercent >= 0 && people > 0) {
        const totalTip = (bill * tipPercent) / 100;
        const tipEach = totalTip / people;
        const totalEach = (bill + totalTip) / people;

        tipPerPerson.textContent = tipEach.toFixed(2);
        totalPerPerson.textContent = totalEach.toFixed(2);
    } else {
        alert('Please enter valid numbers.');
    }
});

resetBtn.addEventListener('click', () => {
    billInput.value = '';
    tipInput.value = '';
    peopleInput.value = '';
    tipPerPerson.textContent = '0.00';
    totalPerPerson.textContent = '0.00';
});
