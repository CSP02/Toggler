
function slode() {
    const toggler = new Toggler;
    toggler.toggleSlide('slide', 'top', 0.6);
}

window.onclick = function (clicked) {
    const toggler = new Toggler;
    if (clicked.path[0].id != "test")
    {
        document.getElementById('slide').style.marginTop = `-${document.getElementById('slide').offsetHeight + 100}`
        toggler.Inc();
    }
}