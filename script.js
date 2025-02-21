document.addEventListener('DOMContentLoaded', function () {
  let nav = document.querySelector('.nav-container');
  let navOffset = nav.offsetTop; // Lấy vị trí ban đầu của nav

  window.addEventListener('scroll', function () {
    if (window.pageYOffset >= navOffset) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  let scrollToTopBtn = document.getElementById('scrollToTop');

  // Hiện nút khi cuộn xuống 300px
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'flex';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  // Cuộn lên đầu trang khi click
  scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
