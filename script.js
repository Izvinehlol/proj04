let nome = prompt("Digite seu Nome:");
let idade = Number(prompt("Digite sua Idade:"));
let cadastro = prompt("Possui Cadastro? (S/N)");
let autorização = prompt("Possui autorização especial? (S/N)");
let acompanhado = prompt("Está acompanhado? (S/N)");

if (cadastro === "N" || cadastro === "n"  ) {
alert("Acesso negado: usuário não cadastrado.")
} else if ((cadastro === "S" || cadastro === "s") && idade >= 18) {
alert("Acesso liberado")
} 
if ((autorização === "N" || autorização === "n") && idade <= 17) {
if ((acompanhado === "S" || acompanhado === "s")) {
    alert("Permitir entrada com restrição/responsável.")
} else {
    alert("Acesso negado: menor desacompanhado.")
}
} 