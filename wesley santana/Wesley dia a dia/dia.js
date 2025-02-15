document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".info-musica, .playlist-container, h1");

    elements.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translatey(50px)";
    });

    function animateElements() {
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translatey(0)";
            }, 300 * (index + 1)); // Animação em sequência
        });
    }

    setTimeout(animateElements, 100); // Pequeno atraso para garantir a aplicação dos estilos
});

document.addEventListener("click", function () {
    const audio = document.getElementById("background-music");
    if (audio.paused) {
        audio.play().catch(error => console.log("Autoplay bloqueado:", error));
    }
}, { once: true }); // Só executa no primeiro clique

let indice = 0;

function mudarImagem(direcao) {
    const carrossel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    indice += direcao;
    
    if (indice >= totalSlides) { indice = 0; }
    if (indice < 0) { indice = totalSlides - 1; }

    carrossel.style.transform = `translateX(${-indice * 100}%)`;
}

// Troca automática de imagem a cada 3 segundos
setInterval(() => mudarImagem(1), 3000);

document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Verifica se o usuário já escolheu o modo escuro antes
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    toggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        // Salvar a preferência do usuário
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    function digitarTexto(elemento, texto, velocidade) {
        let i = 0;
        function escrever() {
            if (i < texto.length) {
                elemento.innerHTML += texto.charAt(i);
                i++;
                setTimeout(escrever, velocidade);
            }
        }
        escrever();
    }

    // Aplicando efeito
    const github = document.querySelector(".github");
    const linkedin = document.querySelector(".linkedin");

    if (github && linkedin) {
        github.innerHTML = "";
        linkedin.innerHTML = "";
        setTimeout(() => digitarTexto(github, "GitHub", 100), 500);
        setTimeout(() => digitarTexto(linkedin, "LinkedIn", 100), 1500);
    }
});


