document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const closeModalButton = document.querySelector('.modal_close');


    function openModal() {
        modal.style.display = 'flex';
    }


    function closeModal() {
        modal.style.display = 'none';
    }


    setTimeout(openModal, 10000);


    function handleScroll() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            openModal();
            window.removeEventListener('scroll', handleScroll); // Удаляем обработчик
        }
    }


    window.addEventListener('scroll', handleScroll);


    closeModalButton.addEventListener('click', closeModal);


    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});