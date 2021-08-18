const mobileBurger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.nav__mobile');

const popupBack = document.querySelector('.popup-back');
const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.fox__signIn');
const closePopup1 = document.querySelector('.popup__header-close');
const closePopup2 = document.querySelectorAll('.popup .fox__signIn');

/* Burger */
mobileBurger.addEventListener('click', openMenu);

function openMenu(){
    mobileMenu.classList.toggle('active');
    mobileBurger.classList.toggle('active');
};
/* Burger */

/* Popup */
openPopup.addEventListener('click', () => {
    popupBack.classList.add('active');
    popup.classList.add('active');
});

closePopup1.addEventListener('click', closePopupMenu);

for (let close of closePopup2) {
    close.addEventListener('click', closePopupMenu);
}

function closePopupMenu () {
    popupBack.classList.remove('active');
    popup.classList.remove('active');
}

popupBack.addEventListener('click', closePopupMenu);
/* Popup */