export class NavBar {
    constructor(navSelector) {
        this.navContainer = document.querySelector(navSelector);
        this.setupNavBar();
        this.addEventListeners();
        this.toggleMenu();
    }
    
    setupNavBar() {
        let logo = document.createElement('div');
        logo.classList.add('logo');

        let attr = document.createElement('a');
        attr.setAttribute('href', '/public/index.html');

        let linkImage = document.createElement('img');
        linkImage.setAttribute('src', '/public//assets/images/KingHandy.jpeg');
        linkImage.setAttribute('alt', 'K1ngHandy AI logo');

        attr.appendChild(linkImage);
        logo.appendChild(attr);

        this.menuIcon = document.createElement('div');
        this.menuIcon.classList.add('menu-icon');
        this.menuIcon.innerHTML = '&#9776;';

        this.navLinks = document.createElement('ul');
        this.navLinks.classList.add('nav-links');

        let listItem1 = document.createElement('li');
        let link1 = document.createElement('a');
        link1.setAttribute('href', 'index.html');
        link1.innerText = "Home";
        listItem1.appendChild(link1);

        let listItem2 = document.createElement('li');
        let link2 = document.createElement('a');
        link2.setAttribute('href', 'contact.html');
        link2.innerText = "Contact";
        listItem2.append(link2);

        this.navLinks.append(listItem1, listItem2);
        
        this.navContainer.append(logo, this.menuIcon, this.navLinks);
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

// Initialize NavBar when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    new NavBar('.nav-container');
});