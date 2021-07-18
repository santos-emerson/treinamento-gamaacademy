const infos = document.getElementById('formulario')

infos.addEventListener('submit', (evento) => {
    evento.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let dados = {
      nome, email
    }
    let conversao = JSON.stringify(dados)

    localStorage.setItem('lead', conversao)

    alert("Cadastro efetuado com sucesso")

    document.getElementById("nome").value="";
    document.getElementById("email").value="";
})