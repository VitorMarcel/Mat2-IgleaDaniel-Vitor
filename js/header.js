class script {
    constructor(mobilemenu, navList, navLinks) {
        this.mobilemenu = document.querySelector(mobilemenu) ;
        this.navList = document.querySelector(navList) ;
        this.navLinks = document.querySelectorAll(navLinks) ;
        this.activeClass = "active";

        this.handleClik = this.handleClik.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade .5s ease forwards ${index / 7 + .3}s`);
        });
    }

    handleClik() {
        this.navList.classList.toggle(this.activeClass);
        this.mobilemenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobilemenu.addEventListener("click" , this.handleClik);
    }

    init() {
        if(this.mobilemenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const Script = new script(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
Script.init();