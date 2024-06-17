function convertTemperature() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(temp)) {
        alert('Please enter a valid temperature.');
        return;
    }

    let result;

    // Convert input temperature to Celsius first
    switch (inputUnit) {
        case 'Celsius':
            result = temp;
            break;
        case 'Fahrenheit':
            result = (temp - 32) * 5 / 9;
            break;
        case 'Kelvin':
            result = temp - 273.15;
            break;
    }

    // Convert from Celsius to the desired output unit
    switch (outputUnit) {
        case 'Celsius':
            break;
        case 'Fahrenheit':
            result = (result * 9 / 5) + 32;
            break;
        case 'Kelvin':
            result = result + 273.15;
            break;
    }

    document.getElementById('result').innerText = result.toFixed(2);
}
