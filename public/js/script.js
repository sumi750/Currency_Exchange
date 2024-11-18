//Js for validation of Signup page
function validateForm() {
    const fullName = document.getElementById('fullname').value.trim();
    const mobileNumber = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate full name
    if (fullName === "") {
        alert("Full name is required.");
        return;
    }

    // Validate mobile number
    if (!/^\d{10}$/.test(mobileNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    // Validate email
    if (email === "") {
        alert("Email address is required.");
        return;
    }

    // Validate passwords
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
    alert("Registration successful!");
}




//Js for Currency Exchange
const fromAmount = document.querySelector('.amount');
const cAmt = document.querySelector('.covertedAmt');
const fromCurrency = document.querySelector('.from');
const toCurrency = document.querySelector('.to');
const resultElement = document.querySelector('.result');


//Array of countiress
const countries = [  //Key value pair
    {
        code: "USD", name: "United State Dollar"
    },
    {
        code : "INR", name: "Indian Rupee"
    },
    {
        
        code: "EUR", name: "France",
        
    },

];

//showing countires
countries.forEach(country=>{
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');

    option1.value = option2.value =  country.code;
    option1.textContent = option2.textContent =  `${country.code} (${country.name})`;

    fromCurrency.appendChild(option1);
    toCurrency.appendChild(option2);


    //setting deafult value
    fromCurrency.value = "USD";
    toCurrency.value = "INR";

    //Default value
    fromAmount.value = '1';
    cAmt.value = "84.46";

});

const getExchagneRate =  async ()=>{
    const amount = parseFloat(fromAmount.value);
    const fromCurr = fromCurrency.value;
    const toCurr = toCurrency.value;
    resultElement.textContent = "Fetching Exhchange rate..."

    //fetxh data from Api
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurr}`);
    const data = await  response.json();

    const conversionRate = data.rates[toCurr];
    const convertedAmtount =(amount * conversionRate).toFixed(2);

    cAmt.value = convertedAmtount;
    resultElement.textContent = `${amount} ${fromCurr} = ${convertedAmtount} ${toCurr}`
}


//Fetching exchaange rate 
fromAmount.addEventListener('input', getExchagneRate);
fromCurrency.addEventListener('change', getExchagneRate);
toCurrency.addEventListener('change', getExchagneRate);

window.addEventListener('load', getExchagneRate);

