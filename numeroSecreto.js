// Crear un programa en Javascript que realice lo siguiente:
// Debe pedirle al usuario que intente adivinar el número secreto por prompt o por input, dicho número será del 1 al 100.
// Si el usuario no adivina el número secreto, debe mostrar un mensaje por consola o DOM diciendo: “Ups, el número secreto es incorrecto, vuelve a intentarlo. ” y volver a solicitarle que ingrese un número.
// Si el usuario adivina el número secreto debe de mostrar un mensaje por consola o DOM diciendo: “Felicidades, adivinaste el número secreto”. Además debe imprimir por consola o DOM la lista de números introducidos antes de adivinar el número secreto.
// El número secreto puede ser introducido manualmente o generar un número aleatorio, pero recuerda que debe ser del 1 al 100.
// Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.

const boton = document.getElementById("botonNumero");

function numSecreto() {
    let numeroSecreto = 17; // Puedes cambiar este número o generarlo aleatoriamente
    let listaNums = [];
    
    function pedirNumero() {
        let numero = parseInt(prompt("Ingresa un número del 1 al 100"));
        
        // Verificar si la entrada es un número válido
        if (isNaN(numero) || numero < 1 || numero > 100) {
            alert("Por favor, ingresa un número válido entre 1 y 100.");
            return pedirNumero(); // Volver a solicitar el número si es inválido
        }
        
        // Agregar el número a la lista de intentos
        listaNums.push(numero);
        
        // Verificar si adivinó el número secreto
        if (numero === numeroSecreto) {
            alert("Felicidades, adivinaste el número secreto !!!");
            alert(`Números ingresados antes de adivinar : ${listaNums}`);
        } else {
            alert("Ups, el número secreto es incorrecto, vuelve a intentarlo. ");
            pedirNumero(); // Volver a solicitar el número si no acertó
        }
    }
    
    pedirNumero(); // Iniciar la función
}

