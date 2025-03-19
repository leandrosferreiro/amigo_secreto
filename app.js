let amigos = [];

function adicionarAmigo() {
    let incluiAmigo = document.getElementById("amigo");
    let nomeAmigo = incluiAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Insira um nome");
        return;
    }

    amigos.push(nomeAmigo);

    atualizarLista();
    inputAmigo.value = "";
}

function atualizarLista() {
    let listaDeAmigos = document.getElementById("listaAmigos");
    listaDeAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        listaDeAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Todos os amigos já foram sorteados!");
        document.getElementById("resultado").innerHTML = "<li>Sorteio foi concluído!</li>";
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos.splice(indiceSorteado, 1)[0]; 

    document.getElementById("resultado").innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;

    atualizarLista();
}

