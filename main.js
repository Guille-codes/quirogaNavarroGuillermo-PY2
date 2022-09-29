let listaPrenda = document.getElementById("lista")
listaPrenda.innerHTML += ` <li>‎ ‎ ‎ ‎ Marcas mundialmente conocidas</li>`
        
        class Prenda{
            constructor(id, prenda, precio, talle, imagen){
                this.id = id,
                this.prenda = prenda,
                this.precio = precio,
                this.talle = talle,
                this.imagen = imagen
            }
            mostrarData(){
                console.log(`[${this.id}] Productos \nPrenda: ${this.prenda} \nPrecio: ${this.precio} \nTalle: ${this.talle}\n ${this.imagen}`)
            }
        }

        const prenda1 = new  Prenda(1,"Zapatillas GAMECOURT 3.0", 45000, "42", "adidas1.png")
        const prenda2 = new  Prenda(2,"Zapatillas GAMECOURT 2.0", 35600, "36", "adidas1.png")
        const prenda3 = new  Prenda(3,"Camiseta TITULAR ARGENTINA 22", 15000, "xl", "argentina.png")
        const prenda4 = new  Prenda(4,"Camiseta TITULAR BOCA JUNIORS 22/23", 28000, "M", "boca.png")
        const prenda5 = new  Prenda(5,"Zapatillas Nike Air Vapormax", 105000, "42", "nike1.png")
        const prenda6 = new  Prenda(6,"Zapatillas Nike Droid", 55600, "36", "nike1.png")
        const prenda7 = new  Prenda(7,"Pantalon Nike Essentials 22", 25000, "xl", "nike2.png")
        const prenda8 = new  Prenda(8,"Campera Nike Pro Therma-fit", 20000, "M", "nike3.png")
        const prenda9 = new  Prenda(9,"Zapatillas Topper X-Forcer", 16000, "42", "topper1.png")
        const prenda10 = new  Prenda(10,"Zapatillas Topper Ultralight II", 25600, "36", "topper1.png")
        const prenda11 = new  Prenda(11,"Buzo topper", 15000, "l", "topper3.png")
        const prenda12 = new  Prenda(12,"Camiseta topper estampada", 8000, "M", "topper2.png")
        const prenda13 = new  Prenda(13,"Zapatillas Vans Clasicc", 45000, "42", "vans1.png")
        const prenda14 = new  Prenda(14,"Zapatillas Vans Colors", 35600, "36", "vans1.png")
        const prenda15 = new  Prenda(15,"Buzo Vans", 15000, "xl", "vans2.png")
        const prenda16 = new  Prenda(16,"Zapatillas Vans Old Clasicc", 28000, "M", "vans3.png")


        let productosEnCarrito= []
        let tienda= []
        if(localStorage.getItem("tienda")){
            tienda = JSON.parse(localStorage.getItem("tienda"))
        }
        else{
            console.log("Seteado Array")
        tienda.push(prenda1, prenda2, prenda3, prenda4, prenda5, prenda6, prenda7, prenda8, prenda9, prenda10, prenda11, prenda12, prenda13, prenda14, prenda15, prenda16)
        localStorage.setItem("tienda", JSON.stringify(tienda))
        }
        console.log(tienda)
        let divProducto = document.getElementById("productos")
        function mostrarCatalogo(array){
            divProducto.innerHTML = ""
            array.forEach((prenda)=>{
                let nuevoProducto = document.createElement("div")
                nuevoProducto.innerHTML = `<div id="${prenda.id}" class="card " style="width: 18rem;">
                                                <img class="card-img-top" style="height: auto;" src="./assets/img/${prenda.imagen}" alt="${prenda.prenda}">
                                                <div class="card-body">
                                                    <h4 class="card-title">${prenda.prenda}</h4>
                                                    <p class="">Precio: $${prenda.precio}</p>
                                                    <p class="">Talle: ${prenda.talle}</p>
                                                    <button id="agregarBtn${prenda.id}" class="btn btn-outline-success btnComprar">Agregar al carrito</button>
                                                </div>
                                            </div>`

                divProducto.append(nuevoProducto)

                let btnAgregar = document.getElementById(`agregarBtn${prenda.id}`)
                console.log(btnAgregar)
                btnAgregar.addEventListener("click", ()=>{
                    console.log(prenda)
                    agregarAlCarrito(prenda)
                })
            })
        }
        function agregarAlCarrito(prenda){
            productosEnCarrito.push(prenda)
            console.log(productosEnCarrito)
        }

        function ocultarCatalogo(){
            divProducto.innerHTML = ""
        }

        function nuevoProducto(array){
            let prendaIngresado = prompt("Ingrese la prenda")
            let precioIngresado = prompt("Ingrese el precio")
            let talleIngresado = parseInt(prompt("Ingrese el talle"))
            let prendaCreado = new Prenda(tienda.length+1, prendaIngresado , precioIngresado, talleIngresado)
            array.push(prendaCreado)
            
        }
        
        function guardarProducto(array){
            let prendaInput = document.getElementById("prendaInput")
            let precioInput = document.getElementById("precioInput")
            let talleInput = document.getElementById("talleInput")
            let prendaCreado = new Prenda(array.length+1, prendaInput.value, parseInt(precioInput.value), talleInput.value, "nuevoProducto.png")
            console.log(prendaCreado)
            array.push(prendaCreado)
                //Actualizamos Storage
            localStorage.setItem("tienda", JSON.stringify(array))
            console.log(array)
            prendaInput.value = ""
            precioInput.value = ""
            talleInput.value = ""
            mostrarCatalogo(array)
        }
    

        let btnGuardar = document.getElementById("guardarProductoBtn")
        btnGuardar.addEventListener("click", ()=>{
            guardarProducto(tienda)
        })
        let btnMostrarCatalogo = document.getElementById("verCatalogo")
        btnMostrarCatalogo.addEventListener("click", ()=>{
            mostrarCatalogo(tienda)
        })
        let btnOcultarCatalogo = document.getElementById("ocultarCatalogo")
        btnOcultarCatalogo.onclick = ocultarCatalogo



        let prenda1JSON = JSON.stringify(prenda1)

        localStorage.setItem("objetoPrenda", prenda1)
        localStorage.setItem("objetoPrendaJSON", prenda1JSON )

        let prendaStorage = localStorage.getItem("objetoPrenda")
        console.log(prendaStorage)

        let prendaStorageJSON = JSON.parse(localStorage.getItem("objetoPrendaJSON"))
        console.log(prendaStorageJSON)



        let botonCarrito = document.getElementById("botonCarrito")
        let modalBody = document.getElementById("modal-body")
        let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
        let parrafoCompra = document.getElementById('precioTotal')

        botonCarrito.addEventListener("click", ()=>{
            cargarProductosCarrito(productosEnCarrito)
        })

        function cargarProductosCarrito(array){
            modalBody.innerHTML = ""
            array.forEach((productoCarrito)=>{
                modalBody.innerHTML += `              
                                        <div class="card text-bg-info mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
                                            <div class="row g-0">
                                                <div class="col-md-4">
                                                    <img src="./assets/img/${productoCarrito.imagen}" class="img-fluid rounded-start" alt="${productoCarrito.prenda}">
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="card-body">
                                                        <h5 class="card-title">${productoCarrito.prenda}</h5>
                                                        <p class="card-text">Precio: $${productoCarrito.precio}</p>
                                                        <p class="card-text">Talle: ${productoCarrito.talle}</p>
                                                        <button class= "btn btn-danger" id="botonEliminar"><i class="fa-sharp fa-solid fa-trash"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`
            })
            compraTotal(array)
        }

        function compraTotal(array){
            let acumulador = 0

            acumulador = array.reduce((acumulador, productoCarrito)=>{
                return acumulador + productoCarrito.precio
            },0)
            if(acumulador == 0){
                parrafoCompra.innerHTML = `<div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><i class="fa-sharp fa-solid fa-shop-slash"></i> No hay productos en el carrito.</li>
                </ul>
              </div>`
            }
            else{
                parrafoCompra.innerHTML =  `<div class="container d-flex justify-content-center">
                                                <button type="button" class="btn btn-success">El total de su compra es: <strong>$${acumulador}</strong></button>
                                            </div>`
            }
        }
//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE
//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE
//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE//NIKE

//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper
//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper
//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper//Topper

//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans
//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans
//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans//Vans

 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
