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
