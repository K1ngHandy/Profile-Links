import { Nav } from "./nav.js";
import { Footer } from "./footer.js";
import { Main } from "./main.js";

document.addEventListener('DOMContentLoaded', () => {
    try {
        new Nav('.nav-container');
    } catch (error) {
        console.error('Error initializing NavBar:', error);
    }
    try {
        new Main('.main-container');
    } catch (error) {
        console.error('Error initializing Main:', error);
    }
    try {
        new Footer('.footer-container');
    } catch (error) {
        console.error('Error initializing Footer:', error);
    }
});