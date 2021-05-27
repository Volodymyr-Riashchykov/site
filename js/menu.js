(() => {
    const menuBtnRef = document.querySelector('[data-menu-button]');
    const mobileBtnRef = document.querySelector('[data-menu]');
 
    menuBtnRef.addEventListener("click", () => {
        const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);
        mobileBtnRef.classList.toggle("is-open");
        document.body.classList.toggle("modal-open");
    });
})();