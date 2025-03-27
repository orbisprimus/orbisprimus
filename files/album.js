
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

    if (image.header) {
        img.classList.add("header-img");
    }

    return img;
};

const createAlbumDiv = album => {
    let div = document.createElement("div");
    let h2 = document.createElement("h2");

    h2.innerText = album.title;
    div.appendChild(h2);

    for (image in album.images) {
        div.appendChild(createImageDiv(album.images[image]));
    }

    return div;
};

const addImages = async () => {
    const div = document.getElementById('album');
    if (!div) {
        return;
    }
    const response = await fetch('/files/images/album.json');
    const albums = await response.json();
    for (index in albums) {
        if (albums[index].header) {
            let subDiv = document.createElement("div");
            let h1 = document.createElement("h1");
            h1.innerText = albums[index].caption;
            subDiv.appendChild(createImageDiv(albums[index]));
            subDiv.appendChild(h1);
            div.appendChild(subDiv);
        } else {
            div.appendChild(createAlbumDiv(albums[index]));
        }
    }
};

