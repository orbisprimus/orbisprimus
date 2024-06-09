function setActivePage() {
    document.querySelectorAll("nav>a").forEach((link) => {
        if (link.href === window.location.href) {
            link.classList = "active";
        }
});
}

document.addEventListener("DOMContentLoaded", function() {
    setActivePage();
});

class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class='header'>
                <img src='images/header.png' alt='Orbis Primus'>
            </div>
        `
    }
}
window.customElements.define('orbis-header', AppHeader)

class AppNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id='navbar'>
                <a href='/'>Om oss</a>
                <a href='boka.html'>Boka oss</a>
                <a href='ansok.html'>Ansök</a>
                <a href='kontakt.html'>Kontakta oss</a>
            </nav>
        `
    }
}
window.customElements.define('orbis-nav', AppNav)

class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <a href='http://www.instagram.com/orbisprimus'><img src='images/instagram.png' alt='orbisprimus på Instagram'></a>
                <a href='http://www.facebook.com/orbisprimus'><img src='images/facebook.png' alt='orbisprimus på Facebook'></a>
            </footer>
        `
    }
}
window.customElements.define('orbis-footer', AppFooter)
