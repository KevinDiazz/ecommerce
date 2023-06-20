window.addEventListener("load", function () {
  new Glider(document.querySelector(".carrusel"), {
    slidesToShow: 3,
    dots: ".dots",
    arrows: {
      prev: ".buttonAnterior",
      next: ".buttonSiguiente",
    },
    responsive: [
      {
        breakpoint: 775,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          itemWidth: 150,
          duration: 0.25,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          duration: 0.35,
          itemWidth: 150,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          duration: 0.35,
        },
      },
    ],
  });
});

let menuCamiseta = document.getElementsByClassName("camisetas");
let containerArticulos = document.getElementsByClassName("containerArticulos");
let menuBotas = document.getElementsByClassName("botas");
let menuBalones = document.getElementsByClassName("balones");
let slider = document.getElementsByClassName("slider");
let isMousseOver = false;
let overContainerArticulos = false;


/* eventos Mouseover y mouseout para la pagina principal
dependiendo de donde este el raton muestra un contenido u otro */

containerArticulos[0].addEventListener("mouseover", function () {
  overContainerArticulos = true;
  containerArticulos[0].style.display = "flex";
});

containerArticulos[0].addEventListener("mouseout", function () {
  overContainerArticulos = false;
  setTimeout(function () {
    if (!isMousseOver && overContainerArticulos == false) {
      containerArticulos[0].style.display = "none";
    }
  }, 500);
});

menuCamiseta[0].addEventListener("mouseover", function () {
  slider[0].style.backgroundColor = "#85D457";
  containerArticulos[0].innerHTML =
    "<a href='material.html?parametro=equipaciones&marca=Nike'><p>Equipaciones Nike</p></a>" +
    "<a  href='material.html?parametro=equipaciones&marca=Adidas'><p>Equipaciones Adidas</p></a>" +
    "<a  href='material.html?parametro=equipaciones&marca=Puma'><p>Equipaciones Puma</p></a>";
  containerArticulos[0].style.display = "flex";
  isMousseOver = true;
});

menuCamiseta[0].addEventListener("mouseout", function () {
  slider[0].style.backgroundColor = "white";
  isMousseOver = false;
  setTimeout(function () {
    if (!isMousseOver && overContainerArticulos == false) {
      containerArticulos[0].style.display = "none";
    }
  }, 1000);
});

menuBotas[0].addEventListener("mouseover", function () {
  slider[1].style.backgroundColor = "#85D457";
  containerArticulos[0].innerHTML =
    "<a href='material.html?parametro=botas&marca=Nike'><p>Botas Nike</p></a>" +
    "<a href='material.html?parametro=botas&marca=Puma'><p>Botas Puma</p></a>" +
    "<a href='material.html?parametro=botas&marca=Adidas'><p>Botas Adidas</p></a>";
  containerArticulos[0].style.display = "flex";
  isMousseOver = true;
});
menuBotas[0].addEventListener("mouseout", function () {
  slider[1].style.backgroundColor = "white";
  isMousseOver = false;
  setTimeout(function () {
    if (!isMousseOver && overContainerArticulos == false) {
      containerArticulos[0].style.display = "none";
    }
  }, 1000);
});

menuBalones[0].addEventListener("mouseover", function () {
  slider[2].style.backgroundColor = "#85D457";
  containerArticulos[0].innerHTML =
    "<a href='material.html?parametro=balones&marca=Nike'><p>Balones Nike</p></a>" +
    "<a href='material.html?parametro=balones&marca=Adidas'><p>Balones Adidas</p></a>" +
    "<a href='material.html?parametro=balones&marca=Puma'><p>Balones Puma</p></a>";
  containerArticulos[0].style.display = "flex";
  isMousseOver = true;
});

menuBalones[0].addEventListener("mouseout", function () {
  slider[2].style.backgroundColor = "white";
  isMousseOver = false;
  setTimeout(function () {
    if (!isMousseOver && overContainerArticulos == false) {
      containerArticulos[0].style.display = "none";
    }
  }, 1000);
});

let cuentaDeProductos = document.getElementsByClassName("carritoContainer");
let botonCerrar = document.getElementsByClassName("close");
botonCerrar[0].addEventListener("click", function (e) {
  cuentaDeProductos[0].style.display = "none";
  e.preventDefault();
});

let carrito = document.getElementsByClassName("carrito");

carrito[0].addEventListener("click", function () {
  cuentaDeProductos[0].style.display = "block";
});
