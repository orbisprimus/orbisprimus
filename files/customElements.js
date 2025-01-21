function setActivePage() {
    document.querySelectorAll("nav>a").forEach((link) => {
        if (
            link.href === window.location.href
            || link.href === window.location.href + "index"
        ) {
            link.classList = "active";
            return;
        }
});
}

document.addEventListener("DOMContentLoaded", function() {
    setActivePage();
});

class AppNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id='navbar'>
                <a href='index'>Om oss</a>
                <a href='boka'>Boka oss</a>
                <a href='ansok'>Ansök</a>
            </nav>
        `
    }
}
window.customElements.define('orbis-nav', AppNav)

class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class='header' role='banner'>
                <a href='' aria-label="Om Orbis Primus"><img src='files/images/header.png' alt='' loading='eager'></a>
            </div>
            <orbis-nav></orbis-nav>
        `
    }
}
window.customElements.define('orbis-header', AppHeader)

class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <a href='http://www.instagram.com/orbisprimus' aria-label='Orbis Primus på Instagram'><img src='files/images/instagram_light.png' alt=''></a>
                <a href='http://www.facebook.com/orbisprimus' aria-label='Orbis Primus på Facebook'><img src='files/images/facebook_light.png' alt=''></a>
            </footer>
        `
    }
}
window.customElements.define('orbis-footer', AppFooter)

class Menu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="menu">
                <a class="skiplink" href="#main-ansok">Hoppa till huvudinnehåll</a>
                <orbis-header></orbis-header>
                <orbis-footer></orbis-footer>
            </div>
        `
    }
}
window.customElements.define('orbis-menu', Menu);
