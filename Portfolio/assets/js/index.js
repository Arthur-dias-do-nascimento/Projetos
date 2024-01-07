const header = document.querySelector("header")
const btn_top = document.querySelector(".btn-top")
const itens_link = [...document.querySelectorAll(".nav-link")]
const icon_menu = document.querySelector(".button-icon")

function scrollToTop() {
    // Fallback para navegadores que não suportam scroll suave
    const startPosition = window.pageYOffset || document.documentElement.scrollTop;
    const duration = 500; // Tempo da animação em milissegundos
    const startTime = performance.now();

    function scroll(timestamp) {
        const currentTime = timestamp - startTime;
        const increment = Math.easeInOutQuad(currentTime, startPosition, -startPosition, duration);

        window.scrollTo(0, increment);

        if (currentTime < duration) {
            requestAnimationFrame(scroll);
        }
    }

    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(scroll);
}

btn_top.addEventListener('click', () => {
    scrollToTop();
});

function scrollToTarget(target) {
    const element = document.querySelector(target);
    const startPosition = window.pageYOffset || document.documentElement.scrollTop;
    const targetPosition = element.getBoundingClientRect().top + startPosition;
    const duration = 500; // Tempo da animação em milissegundos
    const startTime = performance.now();

    function scroll(timestamp) {
        const currentTime = timestamp - startTime;
        const increment = Math.easeInOutQuad(currentTime, startPosition, targetPosition - startPosition, duration);

        window.scrollTo(0, increment);

        if (currentTime < duration) {
            requestAnimationFrame(scroll);
        }
    }

    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(scroll);
}

itens_link.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        scrollToTarget(target);
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY >= 10) {
        header.classList.add("active")
        btn_top.style.display = "flex"
    } else {
        header.classList.remove("active")
        btn_top.style.display = "none"
    }
})

icon_menu.addEventListener("click", () => {
    const mobile_menu = document.querySelector(".mobile-menu")
    const icon = document.querySelector("#icon")
    
    if (mobile_menu.classList.contains("open")) {
        mobile_menu.classList.remove("open")
        icon.classList = "fa-solid fa-bars fa-fw"
    } else {
        mobile_menu.classList.add("open")
        icon.classList = "fa-regular fa-x fa-fw"
    }
})