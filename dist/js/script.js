// navber fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

// hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// modal popup
function toggleModal(id) {
  document.getElementById('modal' + id).classList.toggle('hidden');
  console.log('open modal');
}


// Ambil elemen-elemen yang diperlukan
function openModal(id) {
  const modal = document.querySelector('#portfolioModal' + id);
  modal.classList.remove('hidden');

}

function closeModal(id) {
  const modal = document.querySelector('#portfolioModal' + id);
  modal.classList.add('hidden');

}