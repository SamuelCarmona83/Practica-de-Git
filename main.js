window.onload = () => {
    console.log('Soy el script')
    const modal = document.querySelector('#modal')
    const open = document.querySelector('#open-modal')
    open.addEventListener('click', () => modal.classList.remove('hidden'))
    const close = document.querySelector('#close-modal')
    close.addEventListener('click', () => modal.classList.add('hidden') )
}