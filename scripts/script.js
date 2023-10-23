const hamburger = document.querySelector('.hamburger-menu'); 
const navMenu = document.querySelector('.nav-menu'); 

hamburger.addEventListener('click', () => { 
navMenu.classList.toggle('hide'); 
});

/*Cuando se hace click en el botón, muestra el submenu*/
function myFunction() {   
    //Añade una clase al elemento que tenga el id myDropdown
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  //Cierra el submenu si se clica fuera
  window.onclick = function(event){
    if(!event.target.matches('.drop-button')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0;  i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        //Busca dentro de drop-content los elementos con la clase show
        if (openDropdown.classList.contains('show')){
          //elimina la clase show de los elementos dentro de drop-content
          openDropdown.classList.remove('show');
        }
      }
    }
    }

   
    const productos = [
        {
          id: 1,
          nombre: "Peluche Gojo",
          precio: 15000.00
        },
        {
          id: 2,
          nombre: "Figura Gojo",
          precio: 50000.00
        },
        {
          id: 3,
          nombre: "Peluches jjk",
          precio: 10000.00
        },
        {
          id: 4,
          nombre: "Standee bsd",
          precio: 5000.00
        },
        {
          id: 5,
          nombre: "Nendoroid Atsushi",
          precio: 70000.00
        },
        {
          id: 6,
          nombre: "Peluches bsd",
          precio: 5000.00
        }
      ];
    
    const carrito = [];
    const carritoLista = document.getElementById("carrito-lista");
    const carritoTotal = document.getElementById("carrito-total");
    const finalizarCompraBtn = document.getElementById("finalizar-compra-btn");
    
    function agregarAlCarrito(nombre, precio) {
        const productoExistente = carrito.find((producto) => producto.nombre === nombre);
    
        if (productoExistente) {
            productoExistente.cantidad++;
        } else {
            carrito.push({ nombre, precio, cantidad: 1 });
        }
    
        mostrarCarrito();
    }
    
    function mostrarCarrito() {
        carritoLista.innerHTML = "";
        let total = 0;
    
        carrito.forEach((producto) => {
            const li = document.createElement("li");
            li.textContent = `${producto.nombre} x${producto.cantidad} - $${(producto.precio * producto.cantidad).toFixed(2)}`;
            carritoLista.appendChild(li);
            total += producto.precio * producto.cantidad;
        });
    
        carritoTotal.textContent = total.toFixed(2);
    }
    
    document.addEventListener("DOMContentLoaded", function () {
        const finalizarCompraBtn = document.querySelector(".finalizar-compra-btn");
    
        finalizarCompraBtn.addEventListener("click", () => {
            function redirigirAMercadoPago() {
       
                const urlDePago = "https://www.mercadopago.com.ar/"; 
            
                window.location.href = urlDePago;
            }
            redirigirAMercadoPago();
        });
    
        
    });