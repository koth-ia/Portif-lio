// ===============================
// HEADER MUDA AO ROLAR
// ===============================

window.addEventListener("scroll", function(){

    const header = document.querySelector(".header");

    if(window.scrollY > 80){

        header.style.background = "#05070d";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

    }else{

        header.style.background = "rgba(5,7,13,0.85)";
        header.style.boxShadow = "none";

    }

});

// ===============================
// ANIMAÇÃO AO SCROLL
// ===============================

const elementos = document.querySelectorAll(
".card, .projeto, .sobre, .hero-left, .skills, .softskills, .projetos"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{ threshold:0.2 });

elementos.forEach((item)=>{

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "0.8s ease";

    observer.observe(item);

});

// ===============================
// BOTÃO TOPO SUAVE
// ===============================

document.querySelector(".topo").addEventListener("click", function(e){

    e.preventDefault();

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// ===============================
// HEADER SOME AO DESCER
// ===============================

let ultimoScroll = 0;

window.addEventListener("scroll", ()=>{

    const header = document.querySelector(".header");

    let scrollAtual = window.pageYOffset;

    // DESCENDO
    if(scrollAtual > ultimoScroll){

        header.style.transform = "translateY(-100%)";

    }

    // SUBINDO
    else{

        header.style.transform = "translateY(0)";

    }

    ultimoScroll = scrollAtual;

});