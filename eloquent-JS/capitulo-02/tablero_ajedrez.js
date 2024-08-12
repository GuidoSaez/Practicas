let tablero = '';
let size = 8;

for (let i = 0; i < size; i++) {
  let fila = '';
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      fila += '#'
    } else {
      fila += ' '
    }
  }
  fila += "\n";
  tablero += fila;  
}
console.log(tablero);