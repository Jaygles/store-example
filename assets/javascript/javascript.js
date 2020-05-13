const shadowWrapperEl = document.getElementsByClassName('shadow-wrapper')[0];

function doSomething(scrollTop) {
  shadowWrapperEl.style.opacity = scrollTop / 900;
}

let ticking = false;

window.addEventListener('scroll', function (e) {
  if (!ticking) {
    const scrollTop = window.scrollY;

    window.requestAnimationFrame(function () {
      doSomething(scrollTop);
      ticking = false;
    });

    ticking = true;
  }
});

const navBarEl = document.getElementsByClassName('nav-bar')[0];
const navSearchEl = document.getElementsByClassName('nav-search')[0];
const navTitleEl = document.getElementsByClassName('nav-title')[0];

function toggleClasses() {
  setTimeout(() => {
    if (window.scrollY < 525) {
      if (navBarEl.classList.contains('scrolled')) {
        navBarEl.classList.remove('scrolled');
      }

      if (navSearchEl.classList.contains('nav-scrolled')) {
        navSearchEl.classList.remove('nav-scrolled');
      }

      if (navTitleEl.classList.contains('nav-title-scrolled')) {
        navTitleEl.classList.remove('nav-title-scrolled');
      }
    } else {
      if (!navBarEl.classList.contains('scrolled')) {
        navBarEl.classList.add('scrolled');
      }

      if (!navSearchEl.classList.contains('nav-scrolled')) {
        navSearchEl.classList.add('nav-scrolled');
      }

      if (!navTitleEl.classList.contains('nav-title-scrolled')) {
        navTitleEl.classList.add('nav-title-scrolled');
      }
    }

    toggleClasses();
  }, 333);
}

toggleClasses();
