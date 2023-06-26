const phoneInput = document.getElementById('phone');


phoneInput.addEventListener('input', formatPhoneNumber);


function formatPhoneNumber() {
  const inputValue = phoneInput.value.replace(/\D/g, ''); 
  const formattedValue = inputValue.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

  phoneInput.value = formattedValue;
}
