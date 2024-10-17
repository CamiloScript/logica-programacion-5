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

