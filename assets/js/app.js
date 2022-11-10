// functions
function goto(elem) {
    let element = document.querySelector(elem);
    let offsetTop = element.offsetTop;

    window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
    });

    window.history.pushState(undefined, undefined, window.location.href.split("#")[0] + "#" + elem.split(".")[1]);
}

//
if (window.location.hash) {
    if (document.querySelector("section." + window.location.hash.slice(1))) {
        goto("section." + window.location.hash.slice(1));
    }
}

//
const menuBtn = document.querySelectorAll("header span a");

menuBtn.forEach((a) => {
    a.addEventListener('click', () => {
        menuBtn.forEach(e => {
            e.classList.remove('active')
        });

        a.classList.add('active');
    });
});

//
let options = {
  root: null,
  rootMargin: '100px',
  threshold: 0.5
}

let changeActive = (id) => {
    document.querySelectorAll("header span a").forEach(e => { e.classList.remove('active'); if(e.id == id) { e.classList.add('active') }});
}

let callback = (i) => {
    i.forEach(x => {
        if(x.isIntersecting && x.intersectionRatio > 0.25) {
            changeActive(x.target.className);
        }
    });
}

let observer = new IntersectionObserver(callback, options);
let elements = document.querySelectorAll('section');
elements.forEach((e) => {
    observer.observe(e);
});