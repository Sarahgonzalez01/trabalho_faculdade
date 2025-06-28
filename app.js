const switcher = document.querySelector('.btn')
// com um clique o usuário pode receber uma mensagem
function mensagem(){
    document.getElementById ('mensagem').innerText = "Muito obrigado(a) por ler um pouquinho sobre mim! 🌸 Lembre-se: cada passo, por menor que seja, te leva mais perto dos seus sonhos, confie no seu talento, mantenha o foco e nunca pare de tentar!"
}
switcher.addEventListener('click', function () {
    const body = document.body;
// minha ideia foi criar um botão que muda do tema dark para o light - escuro para claro
    if (body.classList.contains('light-theme')) {
        body.classList.replace('light-theme', 'dark-theme');
        this.textContent = 'Light';
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        this.textContent = 'Dark';
    }
    console.log('Tema atual:', body.className);
});