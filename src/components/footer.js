export class Footer {
    constructor(footerSelector) {
        this.footer = document.querySelector(footerSelector);

        if (this.footer) {
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
        const url = "https://solo.to/k1nghandy";
        this.footer.innerHTML = 
            `<p>&copy; 2024 - <a href=${url} target="_blank" rel="noopener noreferrer">K1ngHandy</a>; All rights reserved.</p>`;
    }
}