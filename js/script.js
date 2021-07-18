const form = document.getElementById("form")

form.addEventListener('submit', (e) => {
    e.preventDefault(); // nao permite a pagina recarregar

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    let data = {
        nome, email,
    }

    let converteData = JSON.stringify(data);
    localStorage.setItem("lead", converteData);

    let content = document.getElementById("content");

    let carrega = `<p>Enviando e-mail...</p>`

    let confirmado = `<p>Em breve você receberá um e-mail com nossas promoções</p>`

    content.innerHTML = carrega;

    setTimeout(() => {
        content.innerHTML = confirmado;
    }, 2000)

})