export function goToSection(e) {
    e.preventDefault();
    let el = document.getElementById("mobile");
    el && window.scrollTo({
        top: el.offsetTop - 100,
        left: 0,
        behavior: "smooth",
    });
}

export function goToSection2(e) {
    e.preventDefault();
    let el = document.getElementById("datefigar");
    el && window.scrollTo({
        top: el.offsetTop - 100,
        left: 0,
        behavior: "smooth",
    });
}