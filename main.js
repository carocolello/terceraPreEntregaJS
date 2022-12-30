// E-Commerce Dietetica


class Producto {
    constructor(id, nombre, precio, imagen){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = 1;
    }
}


const jugo = new Producto(1, "Jugo", 1200, "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQePIhgqFIcP69TGgEKnL8CUNTM4wY4TJeOC0RK5O0bsYHo8Ar0v0Rdk7JyTTx68xmXLbpLOKY&usqp=CAE");

const almendras = new Producto(2, "Pasta de almendras", 750, "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRIDHx871RQJa3xwYlyCpOrYtjMOsEeReJ47CJkcUP88H4q-sLE5r9lJOoEMawBI-BHGJ6AlBg1&usqp=CAE");

const panqueques = new Producto(3, "Panqueques de avena", 600, "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQjEkjmqCraPn9aa8wrmZSRX2xi564l_hQXv6TveEqnA6XsK2Yl6XFFLnCBfJ4fSho93bmYh1M&usqp=CAE");

const yerba = new Producto(4, "Yerba orgánica", 900, "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQiO_rnQJIrCJ6fdr0421GBNTZecFhCddZkheVdqf_fKbuPIjaP-BJpz2jvH3tMOLlTVGeDGqE9OPU&usqp=CAE");

const coco = new Producto(5, "Aceite de coco", 1350, "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRf2toMZTB1gAQ0iTsFPbm4gckoRXT_BfVX66ylsn45TNkNJ8-eaoeBjNR_kUy456tXfvmP68U&usqp=CAE");

const fideos = new Producto(6, "Fideos integrales", 600, "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRFVlvEGTXegEaJPiuIvJlYbC4s4xPMmC5XVdtJm7ueCDOkmd6XlTgCNVs-msyMMhEtlF17pAS7&usqp=CAE");

const bebida = new Producto(7, "Bebida de coco", 850, "https://thefoodmarketar.vtexassets.com/arquivos/ids/155953-1200-auto?v=637825347398200000&width=1200&height=auto&aspect=true");

const vinagre = new Producto(8, "Vinagre de manzana", 1250, "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSAV0_q8pJ_hXqpgGPmxrLc5sR5TzOVEVnykzHbouWSugv0SAXWLe3XD23lg8ZSiC-KAXy1dsVr&usqp=CAE");

// Array de productos

const productos = [jugo, almendras, panqueques, yerba, coco, fideos, bebida, vinagre];

// Array del carrito

let carrito = [];

// DOM

const contenedorProductos = document.getElementById("contenedorProductos");

// Función para mostrar productos

const mostrarProductos = () => {
    productos.forEach( producto => {
        const cardProducto = document.createElement("div");
        cardProducto.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        cardProducto.innerHTML = 
                `
                <div class="card">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <div>
                        <h2>${producto.nombre}</h2>
                        <p>${producto.precio}</p>
                        <button id="boton${producto.id}">Agregar al carrito</button>
                    </div>
                </div>
                `
        contenedorProductos.appendChild(cardProducto);

        // Agregar productos al carrito

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarProductoCarrito(producto.id);
        })
    })
}

mostrarProductos();

// Creo la funcion agregarProductoCarrito()

const agregarProductoCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if(productoEnCarrito) {
        productoEnCarrito.cantidad + 1;
    } else {
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
    }
}

// Mostrar carrito:

const contenedorCarritoCompras = document.getElementById("contenedorCarritoCompras");

const verCarritoCompras = document.getElementById("verCarritoCompras");

verCarritoCompras.addEventListener("click", () => {
    mostrarCarritoCompras();
})

const mostrarCarritoCompras = () => {
    carrito.forEach(producto => {
        const cardProducto = document.createElement("div");
        cardProducto.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        cardProducto.innerHTML = 
                `
                <div class="card">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <div>
                        <h2>${producto.nombre}</h2>
                        <p>${producto.precio}</p>
                    </div>
                </div>
                `
        contenedorCarritoCompras.appendChild(cardProducto);
    })
}

// localStorage

localStorage.setItem("productos", JSON.stringify(productos));
