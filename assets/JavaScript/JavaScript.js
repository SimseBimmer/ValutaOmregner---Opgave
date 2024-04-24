function convertCurrency() {
    var amount = parseFloat(document.getElementById('amount').value);
    var currency = document.getElementById('currency').value;
    var rate;
  
    // Bestemmer konverteringskursen baseret på valgt valuta
    switch(currency) {
      case 'USD':
        rate = 0.1434192232816440800; // Eksempelvis - 1 DKK = 0.14 USD
        break;
      case 'EUR':
        rate = 0.1340862167132810800; // Eksempelvis - 1 DKK = 0.13 EUR
        break;
      default:
        rate = 1; // Standard: 1 DKK = 1 DKK
    }
  
    var convertedAmount = amount * rate;
  
    document.getElementById('result').innerText = 'Beløb i ' + currency + ': ' + convertedAmount.toFixed(2);
  }
  