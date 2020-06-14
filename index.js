let i = 0;
function type() {
    let span = document.getElementsByTagName('span');
    if (i < span.length) {
        span[i].style.visibility = "visible";
        i = i + 1;
    }
}
setInterval(type, 100);

function showspan(obj, txt) {
    obj.innerHTML = `<span>${txt}</span>`;
}

function showfas(obj, txt) {
    obj.innerHTML = `<i class="fas fa-${txt}"></i>`;
}

function shownav() {
    let nav = document.getElementById("navblock");
    nav.classList.toggle("slider");
}


function redirecthome() {
    window.location.href = "index.html";
}
