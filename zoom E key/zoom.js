let zoom = 1;
let zoomed = false;

document.addEventListener("keydown", function(event) {
    if (event.key === "e" && !zoomed) {
        event.preventDefault();
        zoom = 2;
        document.body.style.transform = `scale(${zoom})`;
        document.body.style.overflow = "hidden";
        zoomed = true;
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === "e" && zoomed) {
        zoomed = false;
        zoom = 1;
        document.body.style.transform = `scale(${zoom})`;
        document.body.style.overflow = "auto";
    }
});