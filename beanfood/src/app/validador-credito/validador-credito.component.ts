
export function ehValido(cardNumber: string): boolean {
  const sanitized = cardNumber.replace(/[\s-]/g, '');
  if (!/^[0-9]{13,19}$/.test(sanitized)) {
    return false;
  }

  return luhnCheck(sanitized);
}

function luhnCheck(value: string): boolean {
  let sum = 0;
  let shouldDouble = false;

  for (let i = value.length - 1; i >= 0; i--) {
    let digit = parseInt(value.charAt(i), 10);

    if (shouldDouble) {
      if ((digit *= 2) > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return (sum % 10) === 0;
}
