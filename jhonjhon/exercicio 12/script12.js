let mostraHTML =  document.getElementById("resultado");

function tabuada() {
    let numero = prompt ("Digiteum número para calcular a tabuada");
    let contador = 1;

    mostraHTML.innerHTEML = `<p><b>TABUADA</b></p>`;
    while (contador <=10) {
        mostraHTML.innerHTML += `${numero} x ${contador} = ${numero*contador}<br>`;
        contador++;
    }
}