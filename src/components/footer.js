export class Footer {
    constructor (footerSelector) {
        this.footerContainer = document.querySelector(footerSelector);

        if (this.footerContainer) {
            try {
                this.createFooter();
            } catch (error) {
                console.error('Error createFooter():', error);
            }
        } else {
            console.error('Footer not found...', error);
        }
    }

    createFooter() {
        console.log('Footer being created...');

        const url = "https://solo.to/k1nghandy";
        this.footerContainer.innerHTML = 
            `<p>&copy; 2024 - <a href="${url}" target="_blank" rel="noopener noreferrer">K1ngHandy</a>; All rights reserved.</p>`;
    }
}