
phoneInput.value = '1234567890';
phoneInput.dispatchEvent(new Event('input'));
console.log(phoneInput.value); 

phoneInput.value = '123456';
phoneInput.dispatchEvent(new Event('input'));
console.log(phoneInput.value); 


phoneInput.value = '12!@#$3456abc7890';
phoneInput.dispatchEvent(new Event('input'));
console.log(phoneInput.value); 


phoneInput.value = ' 123 456 7890 ';
phoneInput.dispatchEvent(new Event('input'));
console.log(phoneInput.value); 


phoneInput.value = '+1234567890';
phoneInput.dispatchEvent(new Event('input'));
console.log(phoneInput.value);
