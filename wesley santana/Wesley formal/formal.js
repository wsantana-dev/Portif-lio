document.addEventListener("DOMContentLoaded", () => {
    const titulos = document.querySelectorAll(".titulo-secao");

    const handleScroll = () => {
        titulos.forEach((titulo) => {
            const rect = titulo.getBoundingClientRect(); // Obtém as dimensões e posição do elemento
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                // Adiciona a classe se o elemento estiver visível no viewport
                titulo.classList.add("visible");
            }
        });
    };

    // Executa no carregamento inicial e ao rolar a página
    handleScroll();
    window.addEventListener("scroll", handleScroll);
});
