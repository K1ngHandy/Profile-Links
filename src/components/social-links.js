import { links } from "../data/links";

export class SocialLinks {
    constructor(socialSelector) {
        this.contact = document.querySelector(socialSelector);
        this.setupLinks();
    }

    setupLinks() {
        console.log('Links', links);
        
        let heading = document.createElement('h3');
        heading.innerText = "Contact";

        let socialLinks = document.createElement('div');
        socialLinks.classList.add('social-links');

        links.forEach(({ href, src, title }) => {
            let socialLink = document.createElement('div');
            socialLink.classList.add('social-link');

            let anchor = document.createElement('a');
            anchor.href = href;
            anchor.target = "_blank"; // open in new tab

            let img = document.createElement('img');
            img.src = src;
            img.title = title;
            img.alt = title;

            anchor.appendChild(img);

            socialLink.append(anchor);

            socialLinks.appendChild(socialLink);
        });

        this.contact.append(heading, socialLinks);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SocialLinks('.contact');
});