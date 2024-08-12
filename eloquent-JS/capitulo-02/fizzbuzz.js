for (let numero = 1; numero <= 100; numero++) {
  if (numero % 5 === 0 && numero % 3 === 0) {
    console.log('fizzbuzz');
  } else if (numero % 5 === 0) {
    console.log('buzz');
  } else if (numero % 3 === 0) {
    console.log('fizz');
  } else {
    console.log(numero);
  }
}