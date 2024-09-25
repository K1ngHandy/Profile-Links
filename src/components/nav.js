export class NavBar {
    constructor(navSelector) {
        this.navContainer = document.querySelector(navSelector);
        if (!this.navContainer) {
            throw new Error(`Element with selector ${navSelector} not found.`);
        }
        this.setupNavBar();
        this.addEventListeners();
    }
    
    setupNavBar() {
        let logo = document.createElement('div');
        logo.classList.add('logo');

        let attr = document.createElement('a');
        attr.setAttribute('href', '/public/index.html');

        let linkImage = document.createElement('img');
        linkImage.setAttribute('src', '/public//assets/images/k1nghandy.jpeg');
        linkImage.setAttribute('alt', 'K1ngHandy AI logo');

        attr.appendChild(linkImage);
        logo.appendChild(attr);

        this.menuIcon = document.createElement('div');
        this.menuIcon.classList.add('menu-icon');
        this.menuIcon.innerHTML = '&#9776;';

        this.navList = document.createElement('ul');
        this.navList.classList.add('nav-list');

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

        this.navList.append(listItem1, listItem2);
        
        this.navContainer.append(logo, this.menuIcon, this.navList);
    }

    addEventListeners() {
        this.menuIcon.addEventListener('click', () => this.toggleMenu());
    }

    toggleMenu() {
        try {
            this.navList.classList.toggle('active');
        } catch (error) {
            console.log('Error:', error);
        }
    }
}