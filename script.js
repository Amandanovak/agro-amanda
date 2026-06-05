document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // SEÇÃO DE TECNOLOGIAS (ABAS INTERATIVAS)
    // ==========================================
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", function() {
            const targetTabId = this.getAttribute("data-tab");

            // Remove classe ativa de todos os botões e conteúdos
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => {
                content.style.display = "none";
                content.classList.remove("active");
            });

            // Ativa o botão clicado
            this.classList.add("active");

            // Exibe e ativa o conteúdo correspondente com uma pequena transição
            const activeContent = document.getElementById(targetTabId);
            activeContent.style.display = "grid";
            
            // Timeout para dar tempo do display grid ser aplicado antes da animação CSS
            setTimeout(() => {
                activeContent.classList.add("active");
            }, 50);
        });
    });

    // ==========================================
    // SEÇÃO DE DESAFIOS (SISTEMA DE ACORDEÃO)
    // ==========================================
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const currentItem = this.parentElement;
            
            // Alterna a classe active no item clicado
            currentItem.classList.toggle("active");
        });
    });

});