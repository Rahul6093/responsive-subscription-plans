
let basicCheckbox = document.querySelector('.tickbox.basic input');
let ultraCheckbox = document.querySelector('.tickbox.ultra input');
let premiumCheckbox = document.querySelector('.tickbox.premium input');
let continueButton = document.querySelector('.continue .plan');

let basicBox = document.querySelector('.tickbox.basic');
let ultraBox = document.querySelector('.tickbox.ultra');
let premiumBox = document.querySelector('.tickbox.premium');

// Function to update the "Continue" button text based on selected plan
function updateContinueButton() {
    if (basicCheckbox.checked) {
        continueButton.textContent = 'Continue with Basic';
        removeStyles();
        applyStyles(basicBox);
    } else if (ultraCheckbox.checked) {
        continueButton.textContent = 'Continue with Ultra';
        removeStyles();
        applyStyles(ultraBox); 
    } else if (premiumCheckbox.checked) {
        continueButton.textContent = 'Continue with Premium';
        removeStyles();
        applyStyles(premiumBox);
    } else {
        continueButton.textContent = 'Select a Plan';
        removeStyles();
    }
}

[basicCheckbox, ultraCheckbox, premiumCheckbox].forEach(checkbox => {
    checkbox.addEventListener('change', updateContinueButton);
});


let toggle = document.querySelector('.check')
let basicPrice = document.querySelector('.tickbox.basic .large');
let ultraPrice = document.querySelector('.tickbox.ultra .large');
let premiumPrice = document.querySelector('.tickbox.premium .large');
let packagetime = document.querySelectorAll('.tickbox .small');
let radioButtons = document.querySelectorAll('input[type="radio"][name="plan"]');

// Function to update prices based on the 'check' checkbox state
toggle.addEventListener('change',function(){
    if(toggle.checked){
        basicPrice.textContent='₹49/';
        ultraPrice.textContent='₹69/';
        premiumPrice.textContent='₹99/';
        packagetime.forEach(el => el.innerHTML = 'month');
}
    else{
            basicPrice.textContent='₹399/';
            ultraPrice.textContent='₹599/';
            premiumPrice.textContent='₹999/';
            packagetime.forEach(el => el.innerHTML = 'year');
    }}
) 

function removeStyles() {
    [basicBox, ultraBox, premiumBox].forEach(box => {
        box.style.border = '0px double white';
        box.style.boxShadow = '0 0 0 0 red';
        box.style.animation = 'none';
    });
}

function applyStyles(box){
        box.style.border = '3px double white';
        box.style.boxShadow = '0 0 10px 4px red';
        box.style.animation = 'wobble 2s ease-in-out infinite';
}

updateContinueButton();