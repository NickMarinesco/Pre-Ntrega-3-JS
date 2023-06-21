let nombreUsuario = prompt("Bienvenido, ingrese su nombre");
while (nombreUsuario.trim() === "") {
    nombreUsuario = prompt("No ingresaste ningún nombre. Por favor, ingresa tu nombre");
}
let apellidoUsuario = prompt("Ingrese su Apellido");
while (apellidoUsuario.trim() === "") {
    apellidoUsuario = prompt("No ingresaste ningún apellido. Por favor, ingresa tu apellido")
}
alert("Nombre y Apellido: " + nombreUsuario + " " + apellidoUsuario);



let opciones = prompt("1-Compra Fernet\n2-Compra Cerveza\n3-Compra Vino\n4- Salir")
opciones = parseInt(opciones);
if (opciones == 4) {
    alert("Gracias por su visita")
}

function solictarDatosTc() {
    prompt("Ingrese su numero de tarjeta")
    alert("Compra Exitosa\nGracias por su compra");
}
function solicitarCbu() {
    alert("Tome nota nuestro CBU n° xxxxxxxxxxxxxxxxxxxxxx");
    alert("Gracias por su compra¡¡\n Enviar comprobante a nm@gmail.com")

}
const productos = [
    {
        nombre: 'Fernet',
        descripcion: 'Bebida alcohólica destilada a base de hierbas',
        precio: 10,
    },
    {
        nombre: 'Cerveza',
        descripcion: 'Bebida alcohólica fermentada a base de cebada',
        precio: 5,
    },
    {
        nombre: 'Vino',
        descripcion: 'Bebida alcohólica obtenida de la fermentación del zumo de uvas',
        precio: 15,
    }
];

let listaDeseos = [];
let totalGastado = 0;
while (opciones !== 4) {


    let listaCompras = ""
    let subtotal = 0;
    switch (opciones) {
        case 1:
            alert("Comprar Fernet");
            let cantidadFernet = prompt("Ingresa cantidad")
            cantidadFernet = parseInt(cantidadFernet);
            while (cantidadFernet <= 0) {
                alert("Cantidad Invalida, ingrese un numero valido")
                cantidadFernet = prompt("Ingresa Cantidad")
                cantidadFernet = parseInt(cantidadFernet)
            }

            let transaccionFernet = prompt("1- Tarjeta 2- Transferencia")
            transaccionFernet = parseInt(transaccionFernet);

            switch (transaccionFernet) {
                case 1:
                    solictarDatosTc();
                    break;
                case 2:
                    solicitarCbu();
                    break;


            }
            listaCompras += cantidadFernet + " Fernet\n";
            subtotal += productos[0].precio * cantidadFernet;
            totalGastado += subtotal;



            break;

        case 2:
            alert("Comprar Cerveza");
            let cantidadCerveza = prompt("Ingresa cantidad");
            cantidadCerveza = parseInt(cantidadCerveza);
            while (cantidadCerveza <= 0) {
                alert("Cantidad Invalida, ingrese un numero valido")
                cantidadCerveza = prompt("Ingresa Cantidad")
                cantidadcerveza = parseInt(cantidadCerveza)
            }

            let transaccionCerveza = prompt("1- Tarjeta 2- Transferencia")
            transaccionCerveza = parseInt(transaccionCerveza);


            switch (transaccionCerveza) {
                case 1:
                    solictarDatosTc();
                    break;
                case 2:
                    solicitarCbu();

                    break;
            }
            listaCompras += cantidadCerveza + " Cerveza\n";
            subtotal += productos[1].precio * cantidadCerveza;
            totalGastado += subtotal;


            break;

        case 3:
            alert("Comprar Vino");
            let cantidadVino = prompt("Ingresa cantidad");
            cantidadVino = parseInt(cantidadVino);
            while (cantidadVino <= 0) {
                alert("Cantidad Invalida, ingrese un numero valido")
                cantidadVino = prompt("Ingresa Cantidad")
                cantidadVino = parseInt(cantidadVino)
            }
            let transaccionVino = prompt("1- Tarjeta 2- Transferencia")
            transaccionVino = parseInt(transaccionVino);

            switch (transaccionVino) {
                case 1:
                    solictarDatosTc();
                    break;
                case 2:
                    solicitarCbu();

                    break;
            }
            listaCompras += cantidadVino + " Vino\n";
            subtotal += productos[2].precio * cantidadVino;
            totalGastado += subtotal;

            break;

        default:

            alert("Gracias Vuelva Pronto¡¡")

            break;



    }
    if (listaCompras !== "") {
        alert("Lista de compras:\n" + listaCompras);
        alert("Total Gastado:\n" + totalGastado);


    }

    opciones = prompt("1-Compra Fernet\n2-Compra Cerveza\n3-Compra Vino\n4- Salir\n5-Que producto deseas que incorporemos a nuestros catalogo?")
    opciones = parseInt(opciones);
    if (opciones === 4) {
        alert("Total Gastado:\n" + totalGastado);
        alert("Gracias por su visita");
        break;
    }

    else if (opciones === 5) {
        let producto = prompt("Ingrese el producto que desea agregar a la lista de deseos");
        listaDeseos.push(producto);
        alert("Producto agregado a la lista de deseos: " + producto);
    } else {
    }

}

