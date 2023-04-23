const navLinksEls = document.querySelectorAll('a');
const windowPathname = window.location.pathname;

navLinksEls.forEach(navLinkEL => {
    if (navLinkEL.href.includes(windowPathname)) {
        navLinkEL.classList.add('active')
    }
});

