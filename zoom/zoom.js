let zoom = 1;
let zoomed = false;
document.addEventListener("mousedown", function(event) {
    if (event.button === 2 && !zoomed) {
        event.preventDefault();
        zoom = 2;
        document.body.style.transform = `scale(${zoom})`;
        document.body.style.overflow = "hidden";
        zoomed = true;
    }
});
document.addEventListener("mouseup", function(event) {
    if (event.button === 2 && zoomed) {
        zoomed = false;
        zoom = 1;
        document.body.style.transform = `scale(${zoom})`;
        document.body.style.overflow = "auto";
    }
});
