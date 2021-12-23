//Elementlarni tanlab olinadi
const elCurrencyConverterForm = document.querySelector('.js-currency-converter-form');
const elAmountInput = elCurrencyConverterForm.querySelector('.js-currency-amount-input');
const elCurrencySelect = elCurrencyConverterForm.querySelector('.js-currency-select');
const elResultDisplay = elCurrencyConverterForm.querySelector('.result-display');

//Resultatga chiqarish uchun funksiya
const displayResult = function () {
  const result = Number(elAmountInput.value) * Number(elCurrencySelect.value) / 100;
  elResultDisplay.textContent = result.toFixed(2);
};

//Submit bo'lganda tabiiy hodisani oldini olamiz
elCurrencyConverterForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  //Resultatni korsatish u-n funksiyani chaqirib qo'yamiz
  displayResult();
});
