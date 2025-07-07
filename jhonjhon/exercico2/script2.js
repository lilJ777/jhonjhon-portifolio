
function soma() {

    let anonascimento = 0;
    let idade = 0;

    idade = Number(window.prompt('Digite um numero'));
    idade = 2025 - anonascimento;

    alert("sua idade é" + idade)

    if(idade > 18){
        alert("voce pode tirar carteira");
    } else {
        let dif = 18 - idade;
        alert("voce nao pode tirar carteira");
    }
}
