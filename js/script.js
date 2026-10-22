const vantagensMarcenaria = ["Qualidade garantida do MDF", "Design exclusivo para a sua casa", "Alta durabilidade", "Orçamento sem compromisso"];
const areaMensagem = document.getElementById("mensagem-boas-vindas");
const inputNome = document.getElementById("nome-usuario");
const btnSalvar = document.getElementById("btn-salvar-nome");
const divLista = document.getElementById("lista-vantagens");
if (divLista) {
    let textoHTML = "<h5>Por que escolher a Bellatrix?</h5><ul>";
    for (let i = 0; i < vantagensMarcenaria.length; i++) {
        textoHTML += "<li>" + vantagensMarcenaria[i] + "</li>";
    }
    textoHTML += "</ul>";
    divLista.innerHTML = textoHTML;
}
function verificarStorage() {
    const nomeGuardado = localStorage.getItem("nomeClienteBellatrix");
    if (nomeGuardado !== null && nomeGuardado !== "") {
        if (areaMensagem) {
            areaMensagem.innerHTML = "<h4>Olá de novo, <strong>" + nomeGuardado + "</strong>! Que bom ter-te de volta na Bellatrix!</h4>";
        }
    } else {
        if (areaMensagem) {
            areaMensagem.innerHTML = "<h4>Bem-vindo! Salva o teu nome abaixo para uma experiência personalizada.</h4>";
        }
    }
}
if (btnSalvar) {
    btnSalvar.addEventListener("click", function() {
        const nomeDigitado = inputNome.value;
        
        if (nomeDigitado.trim() !== "") {
            localStorage.setItem("nomeClienteBellatrix", nomeDigitado);
            alert("Nome guardado com sucesso!");
            inputNome.value = "";
            verificarStorage(); 
        } else {
            alert("Por favor, digita um nome válido.");
        }
    });
}
verificarStorage();