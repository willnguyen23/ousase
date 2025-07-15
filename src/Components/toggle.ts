const toggleButton = document.getElementById('menu-toggle') as HTMLButtonElement | null;
const menu = document.getElementById('menu') as HTMLElement | null;


if (toggleButton && menu) {
    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}
