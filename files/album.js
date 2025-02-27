
document.addEventListener("DOMContentLoaded", function() {
    addImages();
    enableHideModalWithKeyboard();
});

const enableHideModalWithKeyboard = function() {
    let modal = document.getElementById("modal");
    modal.addEventListener("click", () => {
        modal.style.display = "none";
    });
    window.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            modal.style.display = "none";
        }
    });
};

const createImageDiv = image => {
    let img = document.createElement("img");
    img.src = '/files/images/album/' + image.filename;
    img.alt = image.caption;
    img.onclick = 'displayImage()';

    const p = document.createElement("p");
    p.innerText = image.caption;

    img.onclick = function() {
        let modal = document.getElementById("modal");
        let caption = document.getElementById("caption");
        let modalImg = document.getElementById("modal-img");
        modal.style.display = "block";
        modalImg.src = img.src;
        caption.innerText = img.alt;
    }

    return img;
};

const addImages = async () => {
    const div = document.getElementById('album');
    if (!div) {
        return;
    }
    const response = await fetch('/files/images/album.json');
    const images = await response.json();
    for (const image of images) {
        div.appendChild(createImageDiv(image));
    }
};

