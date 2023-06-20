//articulos de la tienda, almacenados en un array de objetos
let equipaciones = [
  {
    marca: "Adidas",
    talla: ["S", "L", "XL"],
    precio: "104",
    nombre: "Camiseta Seleción Argentina",
    url: "img/ropafutbol/camiseta-adidas-argentina-primera-equipacion-world-cup-2022-nino-white-light-blue-0.jpg",
  },
  {
    marca: "Adidas",
    talla: ["S", "M", "L", "XL"],
    precio: "54",
    nombre: "Camiseta Seleción Alemania",
    url: "img/ropafutbol/medias-1000794220-00-P-X-20220912170213-500Wx500H.jpg",
  },
  {
    marca: "Adidas",
    talla: ["S", "M", "XL"],
    precio: "70",
    nombre: "Camiseta Saiyans",
    url: "img/ropafutbol/SAIYANS_GN5827_FOTO1_9abbd789-6b27-42a9-959c-2b038eb474d9_1024x.webp",
  },
  {
    marca: "Nike",
    talla: ["S", "M", "L", "XL"],
    precio: "50",
    nombre: "Camiseta Atletico Madrid",
    url: "img/ropafutbol/camiseta-atletico-madrid-2023.jpg",
  },
  {
    marca: "Nike",
    talla: ["S", "M", "L"],
    precio: "40",
    nombre: "Camiseta Chelsea FC",
    url: "img/ropafutbol/Camisetas-futbol-Chelsea-1a-equipacion-202223-–-Manga-Corta-1.png",
  },
  {
    marca: "Nike",
    talla: ["S", "M", "L", "XL"],
    precio: "80",
    nombre: "Camiseta PSG",
    url: "img/ropafutbol/camiseta-psg-visitante-2022-2023.jpg",
  },
  {
    marca: "Puma",
    talla: ["M", "L", "XL"],
    precio: "42",
    nombre: "Camiseta Puma",
    url: "img/ropafutbol/Camiseta-de-fútbol-para-hombre-teamLIGA.webp",
  },
  {
    marca: "Puma",
    talla: ["S", "M", "L", "XL"],
    precio: "56",
    nombre: "Camiseta Manchester City",
    url: "img/ropafutbol/camiseta-puma-manchester-city-fc-primera-equipacion-2022-2023-light-blue-intense-red-0.jpg",
  },
  {
    marca: "Puma",
    talla: ["S", "M", "L", "XL"],
    precio: "56",
    nombre: "Camiseta AC Milan",
    url: "img/ropafutbol/puma-camiseta-manga-corta-ac-milan-22-23-primera-equipacion.jpg",
  },
];
let balones = [
  {
    marca: "Nike",
    nombre: "Balon Nike",
    precio: "95",
    url: "img/ropafutbol/486202_00_1.jpg",
  },
  {
    marca: "Nike",
    nombre: "Balon Nike evo",
    precio: "18",
    url: "img/ropafutbol/9749356a-bf06-479f-8a5f-9db57ef26999.webp",
  },
  {
    marca: "Nike",
    nombre: "Balon Nike classic",
    precio: "15",
    url: "img/ropafutbol/nike-balon-futbol-serie-a-pitch-17-18.jpg",
  },
  {
    marca: "Adidas",
    nombre: "Balon Adidas Mundial",
    precio: "22",
    url: "img/ropafutbol/adidas-balon-al-rihla-league-jr-350-talla-4.jpg",
  },
  {
    marca: "Adidas",
    nombre: "Balon Adidas X",
    precio: "34",
    url: "img/ropafutbol/adidas-starlancer_0353316_00_4_2260043327.jpg",
  },
  {
    marca: "Adidas",
    nombre: "Balon Adidas Champions",
    precio: "28",
    url: "img/ropafutbol/gallery_4062056926068_1.jpeg",
  },
  {
    marca: "Puma",
    nombre: "Balon Puma LaLiga",
    precio: "28",
    url: "img/ropafutbol/puma-balon-laliga-adrenalina-4-2021-2022.jpg",
  },
  {
    marca: "Puma",
    nombre: "Balon Puma 2023",
    precio: "28",
    url: "img/ropafutbol/puma-orbita-laliga-2223-1-hyb.jpg",
  },
];
let botas = [
  {
    marca: "Nike",
    nombre: "Botas Nike V",
    precio: "58",
    talla: [40, 41, 43, 44, 45],
    url: "img/ropafutbol/Captura de pantalla 2023-06-12 225036.png",
  },
  {
    marca: "Nike",
    nombre: "Botas Nike VII",
    precio: "60",
    talla: [40, 41, 42, 43, 44, 45],
    url: "img/ropafutbol/Captura de pantalla 2023-06-12 225052.png",
  },
  {
    marca: "Adidas",
    nombre: "Botas Adidas X",
    precio: "80",
    talla: [40, 42, 43, 44],
    url: "img/ropafutbol/Captura de pantalla 2023-06-12 225104.png",
  },
  {
    marca: "Adidas",
    nombre: "Botas Adidas Classic",
    precio: "43",
    talla: [40, 42, 43, 44, 45],
    url: "img/ropafutbol/Captura de pantalla 2023-06-12 225121.png",
  },
  {
    marca: "Puma",
    nombre: "Botas Puma Depredador",
    precio: "35",
    talla: [40, 41, 42, 45],
    url: "img/ropafutbol/Captura de pantalla 2023-06-12 225135.png",
  },
  {
    marca: "Puma",
    nombre: "Botas Puma Evo",
    precio: "100",
    talla: [40, 41, 42],
    url: "img/ropafutbol/Captura de pantalla 2023-06-12 225217.png",
  },
];

let tallas = document.getElementsByClassName("tallas");
let titulo = document.getElementsByClassName("NameShop");
let dataTalla = document.getElementsByClassName("myCheckboxTalla");
let labelTalla = document.querySelectorAll('label[for="myCheckboxTalla"]');
let botonFiltar = document.getElementsByClassName("buttonFilter");
let nombreArticulo = document.getElementsByClassName("NameShop");
let divArticulos = document.getElementsByClassName("articulo");
let divTallas = document.getElementsByClassName("tallasArticulos");
let botonAdd = document.getElementsByClassName("botonAdd");
let choseSize = document.getElementsByClassName("ChooseSize");
let botonAddCarrito = document.getElementsByClassName("botonAddCarrito");
let carrito = document.getElementsByClassName("carrito");
let cuentaDeProductos = document.getElementsByClassName("carritoContainer");
let botonCerrar = document.getElementsByClassName("close");
let botonCerrarSize = document.getElementsByClassName("closeSize");
let inputTalla = document.getElementById("inputTalla");
let nombreProducto = document.getElementsByClassName("nombreProducto");

//utilización de parametros en URL para la carga de la pagina
const parametros = new URLSearchParams(window.location.search);
const valor = parametros.get("parametro");

//carga de pagina segun articulo
if (valor === "balones") {
  createArticulos(balones, valor);
  tallas[0].style.display = "none";
  titulo[0].innerText = "Balones";
} else if (valor == "botas") {
  createArticulos(botas, valor);
  tallas[0].style.display = "none";
  titulo[0].innerText = "Botas";
} else if (valor == "equipaciones") {
  createArticulos(equipaciones, valor);
  titulo[0].innerText = "Equipaciones";
}

//carga de pagina segun marca
if (parametros.get("marca") !== null) {
  let objetosPorFiltrar = [{ marca: [], precio: [], talla: [] }];
  const valor2 = parametros.get("marca");
  objetosPorFiltrar[0].marca.push(valor2);
  articulosFiltrados(valor, objetosPorFiltrar);
}

/* funcion que se encarga de crear el contenido de la pagina con los articulos pasados al parametro nombre
cada articulo contiende su precio , nombre , talla y un boton para añadir al carro
se hace una diferenciacion en aquellos productos que tengan talla*/
function createArticulos(nombre, tipoArticulo) {
  let divArticulos = document.getElementsByClassName("articulos");
  for (let i = 0; i < nombre.length; i++) {
    let nuevoDiv = document.createElement("div");
    nuevoDiv.setAttribute("class", "articulo");
    divArticulos[0].appendChild(nuevoDiv);
    let imagen = document.createElement("img");
    let botonAdd = document.createElement("button");
    botonAdd.setAttribute("class", "botonAdd");
    botonAdd.innerHTML =
      '<img class="imgButton" src="img/ropafutbol/carro-de-la-compra.png">';
    nuevoDiv.appendChild(botonAdd);
    imagen.setAttribute("src", `${nombre[i].url}`);
    imagen.setAttribute("class", "VistaArticulo");
    nuevoDiv.appendChild(imagen);
    let parrafo = document.createElement("p");
    parrafo.setAttribute("class", "textoInfo");
    parrafo.innerText = `${nombre[i].nombre}`;
    nuevoDiv.appendChild(parrafo);
    let parrafo2 = document.createElement("p");
    parrafo2.setAttribute("class", "textoPrice");
    parrafo2.innerText = `${nombre[i].precio}` + " " + "€";
    nuevoDiv.appendChild(parrafo2);

    if (nombre[i].talla) {
      let nuevoDiv2 = document.createElement("div");
      nuevoDiv2.setAttribute("class", "tallasArticulos");
      let tallas = nombre[i].talla;
      nuevoDiv2.innerText = "Tallas Disponibles:" + " " + tallas.join(" ");
      nuevoDiv.appendChild(nuevoDiv2);

      let botonAdd = document.getElementsByClassName("botonAdd");

      botonAdd[i].addEventListener("click", function (e) {
        choseSize[0].style.display = "flex";
        nombreProducto[0].innerText = parrafo.innerText;
        e.preventDefault();
      });
    } else {
      let botonAdd = document.getElementsByClassName("botonAdd");

      botonAdd[i].addEventListener("click", function (e) {
        choseSize[0].style.display = "flex";
        nombreProducto[0].innerText = parrafo.innerText;
        e.preventDefault();
        let inputTalla = document.getElementById("inputTalla");
        let labelTalla = document.getElementsByTagName("label");
        labelTalla[0].style.display = "none";
        inputTalla.style.display = "none";
        inputTalla.value = "";
      });
    }
  }
  if (tipoArticulo == "equipaciones") {
    inputTalla.type = "text";
    inputTalla.setAttribute("placeHolder", "S M L XL");
    inputTalla.value = "";
  }
}


//eventos para boton añadir a carrito
for (let i = 0; i < divArticulos.length; i++) {
  divArticulos[i].addEventListener("mouseover", function () {
    botonAdd[i].style.visibility = "visible";
    botonAdd[i].style.opacity = "1";
  });
}
for (let i = 0; i < divArticulos.length; i++) {
  divArticulos[i].addEventListener("mouseout", function () {
    botonAdd[i].style.opacity = "0";
  });
}

/* evento para el boton de filtrar resultados
   se comprueban los checkbox  y a traves del atributo data-set obtenemos el valor
   se crea un array donde almacenaremos los productos filtrados */
botonFiltar[0].addEventListener("click", function () {
  let tipoArticulo = nombreArticulo[0].innerText.toLowerCase();
  let checked = document.querySelectorAll(
    'input[class="myCheckboxMarca"]:checked'
  );
  let checkedPrice = document.querySelectorAll(
    'input[class="myCheckboxPrecio"]:checked'
  );
  let checkedSize = document.querySelectorAll(
    'input[class="myCheckboxTalla"]:checked'
  );
  let objetosPorFiltrar = [{ marca: [], precio: [], talla: [] }];

  checked.forEach((elem) =>
    objetosPorFiltrar[0].marca.push(elem.dataset.value)
  );
  checkedPrice.forEach((elem) =>
    objetosPorFiltrar[0].precio.push(elem.dataset.value)
  );
  checkedSize.forEach((elem) =>
    objetosPorFiltrar[0].talla.push(elem.dataset.value)
  );

  articulosFiltrados(tipoArticulo, objetosPorFiltrar);
  let menuFiltro = document.getElementsByClassName("filter");
  menuFiltro[0].style.display = "none";
});

/*funcion que genera la pagina con los articulos filtrados
eliminamos todos los existente del DOM y creamos nuevos filtrados a traves del array */
function articulosFiltrados(tipoArticulo, arrayArticulosFiltrados) {
  if (arrayArticulosFiltrados.length == 0) {
    return;
  }
  let divPrincipal = document.getElementsByClassName("articulos");
  let divArticulos = document.getElementsByClassName("articulo");

  Array.from(divArticulos).forEach((elem) => {
    elem.remove();
  });

  arrayArticulosFiltrados.forEach((elem) =>
    createFilterResults(tipoArticulo, elem)
  );

   /*recibe el tipo de articulo y un objeto , que contiene los valores del filtrado, 
   ira comparando los objetos con estos valores y solo dejara los que cumplan la condicion de filtrado.
   una vez pasen la condicion se crearan la pagina */
  function createFilterResults(tipoArticulo, marca) {
    if (tipoArticulo == "botas") {
      tipoArticulo = botas;
    } else if (tipoArticulo == "equipaciones") {
      tipoArticulo = equipaciones;
    } else if (tipoArticulo == "balones") {
      tipoArticulo = balones;
    }

    for (let i = 0; i < tipoArticulo.length; i++) {
      if (
        checkPrice(tipoArticulo[i].precio, marca.precio) &&
        checkMarca(tipoArticulo[i].marca, marca.marca) &&
        checkSize(tipoArticulo[i].talla, marca.talla)
      ) {
        let nuevoDiv = document.createElement("div");
        nuevoDiv.setAttribute("class", "articulo");
        divPrincipal[0].appendChild(nuevoDiv);
        let imagen = document.createElement("img");
        let botonAdd = document.createElement("button");
        botonAdd.setAttribute("class", "botonAdd");
        botonAdd.innerHTML =
          '<img class="imgButton" src="img/ropafutbol/carro-de-la-compra.png">';
        nuevoDiv.appendChild(botonAdd);
        imagen.setAttribute("src", `${tipoArticulo[i].url}`);
        imagen.setAttribute("class", "VistaArticulo");
        nuevoDiv.appendChild(imagen);
        let parrafo = document.createElement("p");
        parrafo.setAttribute("class", "textoInfo");
        parrafo.innerText = `${tipoArticulo[i].nombre}`;
        nuevoDiv.appendChild(parrafo);
        let parrafo2 = document.createElement("p");
        parrafo2.setAttribute("class", "textoPrice");
        parrafo2.innerText = `${tipoArticulo[i].precio}` + " " + "€";
        nuevoDiv.appendChild(parrafo2);

        if (tipoArticulo[i].talla) {
          let nuevoDiv2 = document.createElement("div");
          nuevoDiv2.setAttribute("class", "tallasArticulos");
          let tallas = tipoArticulo[i].talla;
          nuevoDiv2.innerText = "Tallas Disponibles:" + " " + tallas.join(" ");
          nuevoDiv.appendChild(nuevoDiv2);

          let botonAdd = document.getElementsByClassName("botonAdd");
          let parrafo = document.getElementsByClassName("textoInfo");
          for (let k = 0; k < botonAdd.length; k++) {
            botonAdd[k].addEventListener("click", function (e) {
              choseSize[0].style.display = "flex";
              nombreProducto[0].innerText = parrafo[k].innerText;
            });
          }
        } else {
          let botonAdd = document.getElementsByClassName("botonAdd");
          let parrafo = document.getElementsByClassName("textoInfo");
          for (let k = 0; k < botonAdd.length; k++) {
            botonAdd[k].addEventListener("click", function (e) {
              choseSize[0].style.display = "flex";
              nombreProducto[0].innerText = parrafo[k].innerText;
              let inputTalla = document.getElementById("inputTalla");
              let labelTalla = document.getElementsByTagName("label");
              labelTalla[0].style.display = "none";
              inputTalla.style.display = "none";
              inputTalla.value = "";
            });
          }
        }
      }
    }
  }

  let botonAdd = document.getElementsByClassName("botonAdd");

  for (let i = 0; i < divArticulos.length; i++) {
    divArticulos[i].addEventListener("mouseover", function () {
      botonAdd[i].style.visibility = "visible";
      botonAdd[i].style.opacity = "1";
    });
  }
  for (let i = 0; i < divArticulos.length; i++) {
    divArticulos[i].addEventListener("mouseout", function () {
      botonAdd[i].style.opacity = "0";
    });
  }
}


//funciones donde checkea si el articulo cumple con los criterios filtrados
function checkPrice(precio, array) {
  if (array.length == 0) {
    return true;
  }

  let contador = false;
  for (let i = 0; i < array.length; i++) {
    precio = parseInt(precio);
    array[i] = parseInt(array[i]);
    if (precio <= array[i] && precio >= array[i] - 50) {
      contador = true;
    }
  }
  return contador;
}


function checkSize(talla, array) {
  if (array.length == 0) {
    return true;
  }

  let contador = false;
  for (let i = 0; i < array.length; i++) {
    if (talla.includes(array[i])) {
      contador = true;
    }
  }
  return contador;
}

function checkMarca(marca, array) {
  if (array.length == 0) {
    return true;
  }

  let contador = false;
  for (let i = 0; i < array.length; i++) {
    if (marca == array[i]) {
      contador = true;
    }
  }
  return contador;
}



//eventos para añadir,ver y cerrar  en el carrito
botonAddCarrito[0].addEventListener("click", function (e) {
  choseSize[0].style.display = "none";
  llenarCarrito(nombreProducto[0].innerText, inputTalla.value);
  e.preventDefault();
});


carrito[0].addEventListener("click", function (e) {
  cuentaDeProductos[0].style.display = "block";
  e.preventDefault();
});

botonCerrarSize[0].addEventListener("click", function (e) {
  choseSize[0].style.display = "none";
  e.preventDefault();
});
botonCerrar[0].addEventListener("click", function (e) {
  cuentaDeProductos[0].style.display = "none";
  e.preventDefault();
});

tallas = ["S", "M", "L", "XL"];

/* Funcion para mostrar productos en el carrito, donde se implementa condiciones para el input en el tipo de talla 
se crea una tabla para mostrar los articulos y un contados del precio de los articulos*/
function llenarCarrito(producto, tallaProducto) {
  let tablaCarrito = document.getElementById("cuenta");
  let valor = producto;
  valor = valor.split(" ");
 
  if (valor[0] == "Camiseta") {
    for (let i = 0; i < equipaciones.length; i++) {
      if (equipaciones[i].nombre == producto) {
        valor = equipaciones[i];
      }
    }
    if (
      !tallas.includes(tallaProducto.toUpperCase()) ||
      !valor.talla.includes(tallaProducto.toUpperCase()) ||
      tallaProducto.innerText == ""
    ) {
      alert("Talla Incorrecta : Asegurese de introducir una talla disponible");
      return;
    }
    tallaProducto = tallaProducto.toUpperCase();
  } else if (valor[0] == "Botas") {
    valor = botas;
    for (let i = 0; i < botas.length; i++) {
      if (botas[i].nombre == producto) {
        valor = botas[i];
      }
    }
    if (!valor.talla.includes(Number(tallaProducto))) {
      alert("Talla Incorrecta : Asegurese de introducir una talla disponible");
      return;
    }
  } else {
    valor = balones;
    for (let i = 0; i < balones.length; i++) {
      if (balones[i].nombre == producto) {
        valor = balones[i];
      }
    }
  }

  let totalApagar = document.getElementsByClassName("totalPagar");
  let nuevoProducto = document.createElement("tbody");
  let datosProductos = document.createElement("td");
  let datosProductos2 = document.createElement("td");
  let datosProductos3 = document.createElement("td");
  let datosProductos4 = document.createElement("td");
  let buttonEliminar = document.createElement("button");
  nuevoProducto.setAttribute("class", `${valor.nombre}`);
  buttonEliminar.setAttribute("class", "eliminarProducto");
  buttonEliminar.innerText = "X";
  tablaCarrito.appendChild(nuevoProducto);
  datosProductos2.setAttribute("class", "precio2");
  datosProductos.innerText = valor.nombre;
  nuevoProducto.appendChild(datosProductos);
  datosProductos2.innerText = valor.precio;
  nuevoProducto.appendChild(datosProductos2);
  datosProductos3.innerText = 1;
  nuevoProducto.appendChild(datosProductos3);
  datosProductos4.innerText = tallaProducto;
  nuevoProducto.appendChild(datosProductos4);
  nuevoProducto.appendChild(buttonEliminar);

  let total = 0;
  let totalCantidad = document.getElementsByClassName("precio2");

  for (let i = 0; i < totalCantidad.length; i++) {
    totalCantidad[i].innerText;
    total += parseInt(totalCantidad[i].innerText);
  }
  total = total.toString();
  totalApagar[0].innerText = "Total" + " " + total + "€";
  eliminarProducto(buttonEliminar);
  mostrarNumeroCarrito();
}

//funcion que elimina un producto del carrito y actualiza el valor del total
function eliminarProducto(button) {
  button.addEventListener("click", function () {
    console.log(eliminarProducto);
    button.parentNode.remove();

    let totalApagar = document.getElementsByClassName("totalPagar");
    let total = 0;
    let totalCantidad = document.getElementsByClassName("precio2");
    for (let i = 0; i < totalCantidad.length; i++) {
      totalCantidad[i].innerText;
      total += parseInt(totalCantidad[i].innerText);
    }
    total = total.toString();
    totalApagar[0].innerText = "Total" + " " + total + "€";
    mostrarNumeroCarrito();
  });
}

//funcion para mostrar el numero de articulos en el carrito a modo de notificacion
function mostrarNumeroCarrito() {
  let ProductosEnCarrito = document.getElementsByClassName("articulosCarro");
  let tablaCarrito = document.getElementById("cuenta");
  ProductosEnCarrito[0].innerText = tablaCarrito.children.length - 1;
}


//eventos para el boton de filtrar resultados.
let botonFiltarResults = document.getElementsByClassName("filterResults");

botonFiltarResults[0].addEventListener("click", function () {
  let menuFiltro = document.getElementsByClassName("filter");
  if (menuFiltro[0].style.display == "none") {
    menuFiltro[0].style.display = "block";
  } else {
    menuFiltro[0].style.display = "none";
  }
});

let botonCerrarFiltro = document.getElementsByClassName("buttonClose");
botonCerrarFiltro[0].addEventListener("click", function () {
  let menuFiltro = document.getElementsByClassName("filter");
  menuFiltro[0].style.display = "none";
});
