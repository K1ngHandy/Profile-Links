import { links } from "../data/links.js";

export class Main {
    constructor(mainSelector) {
        this.main = document.querySelector(mainSelector);
        this.setupLinks();
    }

    setupLinks() {
        const hrUpper = document.createElement('hr');
        hrUpper.classList.add('hr');
        const hrLower = document.createElement('hr');
        hrLower.classList.add('hr');

        let socialLinks = document.createElement('div');
        socialLinks.classList.add('social-links');

        links.forEach(({ href, src, title }) => {
            let anchor = document.createElement('a');
            anchor.href = href;
            anchor.setAttribute('target', '_blank');

            let img = document.createElement('img');
            img.src = src;
            img.title = title;
            img.alt = title;

            anchor.appendChild(img);
            socialLinks.append(anchor);
        });
        
        this.main.append(hrUpper, socialLinks, hrLower);
    }
}