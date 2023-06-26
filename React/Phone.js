import React, { useState } from 'react';

function PhoneInput() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const formatPhoneNumber = (e) => {
    const inputValue = e.target.value.replace(/\D/g, '');
    const formattedValue = inputValue.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'); 

    setPhoneNumber(formattedValue);
  };

  return (
    <div className="container text-center">
      <input
        type="tel"
        id="phone"
        maxLength="16"
        placeholder="mobile number"
        autoComplete="off"
        value={phoneNumber}
        onChange={formatPhoneNumber}
      />
      <div>
        <label htmlFor="phone">(123) 456-7890</label>
      </div>
    </div>
  );
}

export default PhoneInput;
