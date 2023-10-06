$(document).ready(function () {
  // ---------> Pantalla 1 < ------------------------------------

  // Guardo los nombres de los equipos en variables

  var nombreEquipo1 = "";
  var nombreEquipo2 = "";

  $("#eq1").on("focusout", function () {
    nombreEquipo1 = $(this).val();
    console.log(nombreEquipo1);
  });

  $("#eq2").on("focusout", function () {
    nombreEquipo2 = $(this).val();
  });

  // Configuracion de la partida ---> a 24 o a 30

  var cantidadPuntos = 0;

  $("#a24").on("click", a24);
  $("#a30").on("click", a30);

  function a24() {
    cantidadPuntos = 24;
  }

  function a30() {
    cantidadPuntos = 30;
  }

  // Dar inicio al juego y vemos la segunda pantalla y agregamos los nombres de los equipos automaticamente

  $("#inicio").on("click", mostrarPantalla2);

  function mostrarPantalla2() {
    $("#pant1").removeClass("visible").addClass("oculto");
    if (nombreEquipo1 == "") {
      nombreEquipo1 = "Equipo 1";
    }
    $("#ne1").val(nombreEquipo1);
    $("#pant2").removeClass("oculto").addClass("visible");
    if (nombreEquipo2 == "") {
      nombreEquipo2 = "Equipo 2";
    }
    $("#ne2").val(nombreEquipo2);
    $("#p1").val(puntosEquipo1);
    $("#p2").val(puntosEquipo2);
    $("#max").val(`a ${cantidadPuntos}`);
  }

  //--------------------------------------------------------------

  // ---------> Pantalla 2 < ------------------------------------

  // Apretar el boton + para sumar los puntos

  var puntosEquipo1 = 0;
  var puntosEquipo2 = 0;

  $("#s1").on("click", function () {
    if (puntosEquipo1 < cantidadPuntos && cantidadPuntos === 30) {
      puntosEquipo1++;
      if (puntosEquipo1 <= 5) {
        $("#p11").attr("src", `img/${puntosEquipo1}.png`);
      } else if (puntosEquipo1 >= 6 && puntosEquipo1 <= 10) {
        $("#p12").attr("src", `img/${puntosEquipo1 - 5}.png`);
      } else if (puntosEquipo1 >= 11 && puntosEquipo1 <= 15) {
        $("#p13").attr("src", `img/${puntosEquipo1 - 10}.png`);
      } else if (puntosEquipo1 >= 16 && puntosEquipo1 <= 20) {
        $("#p14").attr("src", `img/${puntosEquipo1 - 15}.png`);
      } else if (puntosEquipo1 >= 21 && puntosEquipo1 <= 25) {
        $("#p15").attr("src", `img/${puntosEquipo1 - 20}.png`);
      } else {
        $("#p16").attr("src", `img/${puntosEquipo1 - 25}.png`);
      }
      $("#p1").val(puntosEquipo1);
    }

    if (puntosEquipo1 < cantidadPuntos && cantidadPuntos === 24) {
      puntosEquipo1++;
      if (puntosEquipo1 <= 5) {
        $("#p11").attr("src", `img/${puntosEquipo1}.png`);
      } else if (puntosEquipo1 >= 6 && puntosEquipo1 <= 10) {
        $("#p12").attr("src", `img/${puntosEquipo1 - 5}.png`);
      } else if (puntosEquipo1 >= 11 && puntosEquipo1 <= 12) {
        $("#p13").attr("src", `img/${puntosEquipo1 - 10}.png`);
      } else if (puntosEquipo1 >= 13 && puntosEquipo1 <= 17) {
        $("#p14").attr("src", `img/${puntosEquipo1 - 12}.png`);
      } else if (puntosEquipo1 >= 18 && puntosEquipo1 <= 22) {
        $("#p15").attr("src", `img/${puntosEquipo1 - 17}.png`);
      } else {
        $("#p16").attr("src", `img/${puntosEquipo1 - 22}.png`);
      }

      $("#p1").val(puntosEquipo1);
    }

    if (puntosEquipo1 === cantidadPuntos) {
      alert(`GANO EL EQUIPO: ${nombreEquipo1}`);
    }
  });

  $("#s2").on("click", function () {
    if (puntosEquipo2 < cantidadPuntos && cantidadPuntos === 30) {
      puntosEquipo2++;

      if (puntosEquipo2 <= 5) {
        $("#p21").attr("src", `img/${puntosEquipo2}.png`);
      } else if (puntosEquipo2 >= 6 && puntosEquipo2 <= 10) {
        $("#p22").attr("src", `img/${puntosEquipo2 - 5}.png`);
      } else if (puntosEquipo2 >= 11 && puntosEquipo2 <= 15) {
        $("#p23").attr("src", `img/${puntosEquipo2 - 10}.png`);
      } else if (puntosEquipo2 >= 16 && puntosEquipo2 <= 20) {
        $("#p24").attr("src", `img/${puntosEquipo2 - 15}.png`);
      } else if (puntosEquipo2 >= 21 && puntosEquipo2 <= 25) {
        $("#p25").attr("src", `img/${puntosEquipo2 - 20}.png`);
      } else {
        $("#p26").attr("src", `img/${puntosEquipo2 - 25}.png`);
      }
      $("#p2").val(puntosEquipo2);
    }

    if (puntosEquipo2 < cantidadPuntos && cantidadPuntos === 24) {
      puntosEquipo2++;

      if (puntosEquipo2 <= 5) {
        $("#p21").attr("src", `img/${puntosEquipo2}.png`);
      } else if (puntosEquipo2 >= 6 && puntosEquipo2 <= 10) {
        $("#p22").attr("src", `img/${puntosEquipo2 - 5}.png`);
      } else if (puntosEquipo2 >= 11 && puntosEquipo2 <= 12) {
        $("#p23").attr("src", `img/${puntosEquipo2 - 10}.png`);
      } else if (puntosEquipo2 >= 13 && puntosEquipo2 <= 17) {
        $("#p24").attr("src", `img/${puntosEquipo2 - 12}.png`);
      } else if (puntosEquipo2 >= 18 && puntosEquipo2 <= 22) {
        $("#p25").attr("src", `img/${puntosEquipo2 - 17}.png`);
      } else {
        $("#p26").attr("src", `img/${puntosEquipo2 - 22}.png`);
      }
      $("#p2").val(puntosEquipo2);
    }

    if (puntosEquipo2 === cantidadPuntos) {
      alert(`GANO EL EQUIPO: ${nombreEquipo2}`);
    }
  });

  // Apretamos el sigo - para restar puntos

  $("#r1").on("click", function () {
    puntosEquipo1--;
    if (puntosEquipo1 >= 0 && cantidadPuntos === 30) {
      if (puntosEquipo1 <= 5) {
        $("#p11").attr("src", `img/${puntosEquipo1}.png`);
        $("#p12").attr("src", "img/0.png");
        $("#p13").attr("src", "img/0.png");
        $("#p14").attr("src", "img/0.png");
        $("#p15").attr("src", "img/0.png");
        $("#p16").attr("src", "img/0.png");
      } else if (puntosEquipo1 <= 10) {
        $("#p11").attr("src", "img/5.png");
        $("#p12").attr("src", `img/${puntosEquipo1 - 5}.png`);
        $("#p13").attr("src", "img/0.png");
        $("#p14").attr("src", "img/0.png");
        $("#p15").attr("src", "img/0.png");
        $("#p16").attr("src", "img/0.png");
      } else if (puntosEquipo1 <= 15) {
        $("#p11").attr("src", "img/5.png");
        $("#p12").attr("src", "img/5.png");
        $("#p13").attr("src", `img/${puntosEquipo1 - 10}.png`);
        $("#p14").attr("src", "img/0.png");
        $("#p15").attr("src", "img/0.png");
        $("#p16").attr("src", "img/0.png");
      } else if (puntosEquipo1 <= 20) {
        $("#p11").attr("src", "img/5.png");
        $("#p12").attr("src", "img/5.png");
        $("#p13").attr("src", "img/5.png");
        $("#p14").attr("src", `img/${puntosEquipo1 - 15}.png`);
        $("#p15").attr("src", "img/0.png");
        $("#p16").attr("src", "img/0.png");
      } else if (puntosEquipo1 <= 25) {
        $("#p11").attr("src", "img/5.png");
        $("#p12").attr("src", "img/5.png");
        $("#p13").attr("src", "img/5.png");
        $("#p14").attr("src", "img/5.png");
        $("#p15").attr("src", `img/${puntosEquipo1 - 20}.png`);
        $("#p16").attr("src", "img/0.png");
      } else {
        $("#p11").attr("src", "img/5.png");
        $("#p12").attr("src", "img/5.png");
        $("#p13").attr("src", "img/5.png");
        $("#p14").attr("src", "img/5.png");
        $("#p15").attr("src", "img/5.png");
        $("#p16").attr("src", `img/${puntosEquipo1 - 25}.png`);
      }
      $("#p1").val(puntosEquipo1);
    }

    if (puntosEquipo1 >= 0 && cantidadPuntos === 24) {
      if (puntosEquipo1 <= 5) {
        $("#p11").attr("src", `img/${puntosEquipo1}.png`);
        $("#p12").attr("src", "img/0.png");
        $("#p13").attr("src", "img/0.png");
        $("#p14").attr("src", "img/0.png");
        $("#p15").attr("src", "img/0.png");
        $("#p16").attr("src", "img/0.png");
      } else if (puntosEquipo1 <= 10) {
        $("#p11").attr("src", "img/5.png");
        $("#p12").attr("src", `img/${puntosEquipo1 - 5}.png`);
        $("#p13").attr("src", "img/0.png");
        $("#p14").attr("src", "img/0.png");
        $("#p15").attr("src", "img/0.png");
        $("#p16").attr("src", "img/0.png");
      } else if (puntosEquipo1 <= 12) {
        $("#p11").attr("src", "img/5.png");
        $("#p12").attr("src", "img/5.png");
        $("#p13").attr("src", `img/${puntosEquipo1 - 10}.png`);
        $("#p14").attr("src", "img/0.png");
        $("#p15").attr("src", "img/0.png");
        $("#p16").attr("src", "img/0.png");
      } else if (puntosEquipo1 <= 17) {
        $("#p11").attr("src", "img/5.png");
        $("#p12").attr("src", "img/5.png");
        $("#p13").attr("src", "img/2.png");
        $("#p14").attr("src", `img/${puntosEquipo1 - 12}.png`);
        $("#p15").attr("src", "img/0.png");
        $("#p16").attr("src", "img/0.png");
      } else if (puntosEquipo1 <= 22) {
        $("#p11").attr("src", "img/5.png");
        $("#p12").attr("src", "img/5.png");
        $("#p13").attr("src", "img/2.png");
        $("#p14").attr("src", "img/5.png");
        $("#p15").attr("src", `img/${puntosEquipo1 - 17}.png`);
        $("#p16").attr("src", "img/0.png");
      } else {
        $("#p11").attr("src", "img/5.png");
        $("#p12").attr("src", "img/5.png");
        $("#p13").attr("src", "img/2.png");
        $("#p14").attr("src", "img/5.png");
        $("#p15").attr("src", "img/5.png");
        $("#p16").attr("src", `img/${puntosEquipo1 - 22}.png`);
      }
      $("#p1").val(puntosEquipo1);
    }
  });

  $("#r2").on("click", function () {
    puntosEquipo2--;

    if (puntosEquipo2 >= 0 && cantidadPuntos === 30) {
      if (puntosEquipo2 <= 5) {
        $("#p21").attr("src", `img/${puntosEquipo2}.png`);
        $("#p22").attr("src", "img/0.png");
        $("#p23").attr("src", "img/0.png");
        $("#p24").attr("src", "img/0.png");
        $("#p25").attr("src", "img/0.png");
        $("#p26").attr("src", "img/0.png");
      } else if (puntosEquipo2 <= 10) {
        $("#p21").attr("src", "img/5.png");
        $("#p22").attr("src", `img/${puntosEquipo2 - 5}.png`);
        $("#p23").attr("src", "img/0.png");
        $("#p24").attr("src", "img/0.png");
        $("#p25").attr("src", "img/0.png");
        $("#p26").attr("src", "img/0.png");
      } else if (puntosEquipo2 <= 15) {
        $("#p21").attr("src", "img/5.png");
        $("#p22").attr("src", "img/5.png");
        $("#p23").attr("src", `img/${puntosEquipo2 - 10}.png`);
        $("#p24").attr("src", "img/0.png");
        $("#p25").attr("src", "img/0.png");
        $("#p26").attr("src", "img/0.png");
      } else if (puntosEquipo2 <= 20) {
        $("#p21").attr("src", "img/5.png");
        $("#p22").attr("src", "img/5.png");
        $("#p23").attr("src", "img/5.png");
        $("#p24").attr("src", `img/${puntosEquipo2 - 15}.png`);
        $("#p25").attr("src", "img/0.png");
        $("#p26").attr("src", "img/0.png");
      } else if (puntosEquipo2 <= 25) {
        $("#p21").attr("src", "img/5.png");
        $("#p22").attr("src", "img/5.png");
        $("#p23").attr("src", "img/5.png");
        $("#p24").attr("src", "img/5.png");
        $("#p25").attr("src", `img/${puntosEquipo2 - 20}.png`);
        $("#p26").attr("src", "img/0.png");
      } else {
        $("#p21").attr("src", "img/5.png");
        $("#p22").attr("src", "img/5.png");
        $("#p23").attr("src", "img/5.png");
        $("#p24").attr("src", "img/5.png");
        $("#p25").attr("src", "img/5.png");
        $("#p26").attr("src", `img/${puntosEquipo2 - 25}.png`);
      }
      $("#p2").val(puntosEquipo2);
    }

    if (puntosEquipo2 >= 0 && cantidadPuntos === 24) {
      if (puntosEquipo2 <= 5) {
        $("#p21").attr("src", `img/${puntosEquipo2}.png`);
        $("#p22").attr("src", "img/0.png");
        $("#p23").attr("src", "img/0.png");
        $("#p24").attr("src", "img/0.png");
        $("#p25").attr("src", "img/0.png");
        $("#p26").attr("src", "img/0.png");
      } else if (puntosEquipo2 <= 10) {
        $("#p21").attr("src", "img/5.png");
        $("#p22").attr("src", `img/${puntosEquipo2 - 5}.png`);
        $("#p23").attr("src", "img/0.png");
        $("#p24").attr("src", "img/0.png");
        $("#p25").attr("src", "img/0.png");
        $("#p26").attr("src", "img/0.png");
      } else if (puntosEquipo2 <= 12) {
        $("#p21").attr("src", "img/5.png");
        $("#p22").attr("src", "img/5.png");
        $("#p23").attr("src", `img/${puntosEquipo2 - 10}.png`);
        $("#p24").attr("src", "img/0.png");
        $("#p25").attr("src", "img/0.png");
        $("#p26").attr("src", "img/0.png");
      } else if (puntosEquipo2 <= 17) {
        $("#p21").attr("src", "img/5.png");
        $("#p22").attr("src", "img/5.png");
        $("#p23").attr("src", "img/2.png");
        $("#p24").attr("src", `img/${puntosEquipo2 - 12}.png`);
        $("#p25").attr("src", "img/0.png");
        $("#p26").attr("src", "img/0.png");
      } else if (puntosEquipo2 <= 22) {
        $("#p21").attr("src", "img/5.png");
        $("#p22").attr("src", "img/5.png");
        $("#p23").attr("src", "img/2.png");
        $("#p24").attr("src", "img/5.png");
        $("#p25").attr("src", `img/${puntosEquipo2 - 17}.png`);
        $("#p26").attr("src", "img/0.png");
      } else {
        $("#p21").attr("src", "img/5.png");
        $("#p22").attr("src", "img/5.png");
        $("#p23").attr("src", "img/2.png");
        $("#p24").attr("src", "img/5.png");
        $("#p25").attr("src", "img/5.png");
        $("#p26").attr("src", `img/${puntosEquipo2 - 22}.png`);
      }

      $("#p2").val(puntosEquipo2);
    }
  });

  // El boton de "fin" reinicia el juego y vuelve a la pantalla 1

  $("#fin").on("click", function () {
    puntosEquipo1 = 0;
    puntosEquipo2 = 0;
    $("#pant1").removeClass("oculto").addClass("visible");
    $("#eq1").val("");
    $("#eq2").val("");
    $("#pant2").removeClass("visible").addClass("oculto");
    $("#ne2").val("");
    $("#p1").val("0");
    $("#p2").val("0");
    $("#max").val("");
    $("#ne1").val("");
    $("#ne2").val("");
    $("img").attr("src", "img/0.png");
  });
});
