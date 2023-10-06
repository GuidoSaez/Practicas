$(document).ready(function () {
  $("img").on("mouseover", function () {
    id = this.id;
    numero = id[1];
    numero = parseInt(numero);
    pintarEstrellas(numero);
  });

  $("img").on("mouseout", function () {
    id = this.id;
    numero = id[1];
    numero = parseInt(numero);
    borrarEstrellas(numero);
  });

  $("img").on("click", valorar);
  //$("img").on("click", promedio);

  function pintarEstrellas(numero) {
    for (i = 0; i <= numero; i++) {
      $("#e" + i).attr("src", "/img/ep_b.png");
    }
  }

  function borrarEstrellas(numero) {
    for (i = 0; i <= numero; i++) {
      $("#e" + i).attr("src", "/img/ev_b.png");
    }
  }

  var contador = 0;
  var prom = 0;

  function valorar() {
    for (i = 0; i <= numero; i++) {
      $("#e" + i).attr("src", "/img/ec_b.png");
    }

    contador++;
    prom += numero;
  }

  /*function promedio() {
    let r = prom / contador;

    if (r >= 0 && r <= 1) {
      $("#e" + 1).attr("src", "/img/ec_n.png");
    } else if (r > 1 && r <= 1.5) {
      $("#e" + 1).attr("src", "/img/ec_n.png"); // -----> estrella completa
      $("#e" + 2).attr("src", "/img/em_n.png"); // -----> media estrella
    } else if (r > 1.5 && r <= 2) {
      $("#e" + 1).attr("src", "/img/ec_n.png");
      $("#e" + 2).attr("src", "/img/ec_n.png");
    } else if (r > 2 && r <= 2.5) {
      $("#e" + 1).attr("src", "/img/ec_n.png");
      $("#e" + 2).attr("src", "/img/ec_n.png");
      $("#e" + 3).attr("src", "/img/em_n.png");
    } else if (r > 2.5 && r <= 3) {
      $("#e" + 1).attr("src", "/img/ec_n.png");
      $("#e" + 2).attr("src", "/img/ec_n.png");
      $("#e" + 3).attr("src", "/img/ec_n.png");
    } else if (r > 3 && r <= 3.5) {
      $("#e" + 1).attr("src", "/img/ec_n.png");
      $("#e" + 2).attr("src", "/img/ec_n.png");
      $("#e" + 3).attr("src", "/img/ec_n.png");
      $("#e" + 4).attr("src", "/img/em_n.png");
    } else if (r > 3.5 && r <= 4) {
      $("#e" + 1).attr("src", "/img/ec_n.png");
      $("#e" + 2).attr("src", "/img/ec_n.png");
      $("#e" + 3).attr("src", "/img/ec_n.png");
      $("#e" + 4).attr("src", "/img/ec_n.png");
    } else if (r > 4 && r <= 4.5) {
      $("#e" + 1).attr("src", "/img/ec_n.png");
      $("#e" + 2).attr("src", "/img/ec_n.png");
      $("#e" + 3).attr("src", "/img/ec_n.png");
      $("#e" + 4).attr("src", "/img/ec_n.png");
      $("#e" + 5).attr("src", "/img/em_n.png");
    } else {
      $("#e" + 1).attr("src", "/img/ec_n.png");
      $("#e" + 2).attr("src", "/img/ec_n.png");
      $("#e" + 3).attr("src", "/img/ec_n.png");
      $("#e" + 4).attr("src", "/img/ec_n.png");
      $("#e" + 5).attr("src", "/img/ec_n.png");
    }*/

    console.log("contador" + contador);
    console.log("promedio" + prom);
    console.log("r" + r);


    function prom(promedio, contador) {
      let promedioFinal = promedio / contador;
      let estrellaCompleta = Math.round(promedioFinal);
      
    }
  }
);
