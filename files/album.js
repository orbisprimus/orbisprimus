
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
    img.onclick = 'displayImage()';

    img.onclick = function() {
        let modal = document.getElementById("modal");
        let modalImg = document.getElementById("modal-img");
        modal.style.display = "block";
        modalImg.src = img.src;
    }

    if (image.headertitle) {
        img.classList.add("header-img");
    }

    return img;
};

const createAlbumDiv = (images) => {
    let div = document.createElement("div");
    div.className = "sub-album";

    for (i in images) {
        div.appendChild(createImageDiv({"filename": images[i]}));
    }

    return div;
};

const getImagePaths = async (folder) => {
    const response = await fetch('/files/images/album/' + folder);
    return response.body.getReader().read().then(res => {
        let uint8array = res.value;
        let page = new TextDecoder().decode(uint8array);
        const rx = new RegExp("(" + folder + "/.+?)\"", "g");
        let images = new Array();
        page.matchAll(rx).forEach(img => {
            images.push(img[1]);
        });
        return images.sort();
    });

}

const addImages = async () => {
    const div = document.getElementById('album');
    if (!div) {
        return;
    }

    const response = await fetch('/files/images/album.json');
    const albums = await response.json();
    for (index in albums) {
        if (albums[index].headertitle) {
            let subDiv = document.createElement("div");
            let h1 = document.createElement("h1");
            h1.innerText = albums[index].headertitle;
            subDiv.appendChild(createImageDiv(albums[index]));
            subDiv.appendChild(h1);
            div.appendChild(subDiv);
        } else {
            let title = albums[index].title;
            getImagePaths(albums[index].folder).then(paths => {
                let h2 = document.createElement("h2");
                h2.innerText = title;
                div.appendChild(h2);
                div.appendChild(createAlbumDiv(paths));
            });
        }
    }
};

