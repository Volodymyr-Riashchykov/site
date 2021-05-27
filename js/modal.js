(() => {
    const refs = {
        // openModalBtn: document.querySelector('[data-modal-open]'),
        // closeModalBtn: document.querySelector('[data-modal-close]'),
        // modal: document.querySelector('[data-modal]'),
        openItem: document.querySelector('[data-open]'),
        modall: document.querySelector('[data-ref]'),
    };

    // refs.openModalBtn.addEventListener('click', toggleModal);
    // refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.openItem.addEventListener('click', toggleItem);

    // function toggleModal() {
    //     document.body.classList.toggle("modal-open");
    //     refs.modal.classList.toggle('is-hidden');
    // }
    function toggleItem() {
        refs.modall.classList.toggle('item-open');
    }
})();