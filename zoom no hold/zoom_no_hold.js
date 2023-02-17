let zoom = 1;
let zoomed = false;

document.addEventListener("click", function(event) {
    if (!zoomed) {
        event.preventDefault();
        zoom = 2;
        document.body.style.transform = `scale(${zoom})`;
        document.body.style.overflow = "hidden";
        zoomed = true;
    } else {
        zoomed = false;
        zoom = 1;
        document.body.style.transform = `scale(${zoom})`;
        document.body.style.overflow = "auto";
    }
});
