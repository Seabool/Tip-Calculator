function calculate() {
    let billAmount = document.getElementById('billAmount').value;
    let numberOfPeople = document.getElementById('numberOfPeople').value;
    let opinion = document.getElementById('opinion');
    let opinionValue = opinion.options[opinion.selectedIndex].value;

    let percentOfTip;
	
    if (opinionValue === 'best') {
        percentOfTip = 0.30;
    } else if (opinionValue === 'good') {
        percentOfTip = 0.20;
    } else if (opinionValue === 'poor') {
        percentOfTip = 0.10;
    }

    let result = document.getElementById('result');

    if (billAmount.length > 0 && numberOfPeople.length > 0) {
        if (opinionValue === '') {
            result.innerHTML = 'Select your opinion!';
        } else {
            result.innerHTML = 'Result: ' + Math.round((billAmount * percentOfTip) / numberOfPeople) + '$';
        }
    } else {
        result.innerHTML = 'Inputs are blank!';
    }
}