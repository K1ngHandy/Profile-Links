import { NavBar } from "./nav-bar.js";
import { Footer } from "./footer.js";
import { MainContainer } from "./main-container.js";

document.addEventListener('DOMContentLoaded', () => {
    try {
        new NavBar('.nav-container');
    } catch (error) {
        console.error('Error initializing NavBar:', error);
    }
    try {
        new MainContainer('.main-container');
    } catch (error) {
        console.error('Error initializing Main:', error);
    }
    try {
        new Footer('.footer-container');
    } catch (error) {
        console.error('Error initializing Footer:', error);
    }
});