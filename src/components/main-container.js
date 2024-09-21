import { links } from "../data/links.js";
import { getThreads } from "../components/threads.js";

export class MainContainer {
    constructor(mainSelector) {
        this.mainContainer = document.querySelector(mainSelector);
        this.setupLinks();
        this.getThreads();
    }

    setupLinks() {
        const hrTop = document.createElement('hr');
        hrTop.classList.add('hr');
        const hrLower = document.createElement('hr');
        hrLower.classList.add('hr');

        let socialLinks = document.createElement('div');
        socialLinks.classList.add('social-links');

        links.forEach(({ href, src, title }) => {
            let anchor = document.createElement('a');
            anchor.href = href;

            let img = document.createElement('img');
            img.src = src;
            img.title = title;
            img.alt = title;

            anchor.appendChild(img);
            socialLinks.append(anchor);
        });

        this.mainContainer.append(hrTop, socialLinks, getThreads(), hrLower);
    }
}