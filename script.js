const formulario = document.getElementById("form-contato");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const campoNome = document.getElementById("nome");
    const campoEmail = document.getElementById("email");
    const campoTipo = document.getElementById("tipo-site");
    const campoMensagem = document.getElementById("mensagem");

    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const tipo = campoTipo.value;
    const mensagem = campoMensagem.value.trim();

    if (nome === "") {
        alert("Por favor, informe seu nome.");
        campoNome.focus();
        return;
    }

    if (email === "" || !campoEmail.checkValidity()) {
        alert("Por favor, informe um e-mail válido.");
        campoEmail.focus();
        return;
    }
    if (tipo === "") {
        alert("Por favor, escolha o tipo de site.");
        campoTipo.focus();
        return;
    }

    if (mensagem === "") {
        alert("Por favor, escreva uma mensagem sobre seu projeto.");
        campoMensagem.focus();
        return;
    }

    const tipoEscolhido = campoTipo.options[campoTipo.selectedIndex].text;

    const assunto = "Solicitação de orçamento - Vetor Studio";
    const textoEmail = "Olá, Vetor Studio!\n\n" +
        "Meu nome é: " + nome + "\n" +
        "Meu e-mail é: " + email + "\n" +
        "Tipo de site: " + tipoEscolhido + "\n\n" +
        "Detalhes do projeto:\n" + mensagem;

    const linkEmail = "mailto:guilhermeabc134@gmail.com?subject=" +
        encodeURIComponent(assunto) + "&body=" + encodeURIComponent(textoEmail);

    window.location.href = linkEmail;
});
