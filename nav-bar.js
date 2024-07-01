export class NavBar {
    constructor(menuIconSelector, navLinksSelector) {
        this.menuIcon = document.querySelector(menuIconSelector);
        this.navLinks = document.querySelector(navLinksSelector);
        this.addEventListeners();
    }

    addEventListeners() {
        if (this.menuIcon) {
            this.menuIcon.addEventListener('click', this.toggleMenu.bind(this));
        }
    }

    toggleMenu() {
        if (this.navLinks) {
            this.navLinks.classList.toggle('active');
        }
    }
}