function isEven (numero) {
  if (numero === 0) {
    return true;
  }

  if (numero === 1) {
    return false;
  }

  return isEven(numero - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(20));
