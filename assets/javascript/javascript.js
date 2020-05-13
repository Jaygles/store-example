const shadowWrapperEl = document.getElementsByClassName("shadow-wrapper")[0];

function doSomething(scrollTop) {
    shadowWrapperEl.style.opacity = scrollTop / 900;
};

let ticking = false;

window.addEventListener('scroll', function(e) {
    scrollTop = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function() {
        doSomething(scrollTop);
        ticking = false;
      });

      ticking = true;
    }
  });

const navBarEl = document.getElementsByClassName("nav-bar")[0];
const navSearchEl = document.getElementsByClassName("nav-search")[0];
const navTitleEl = document.getElementsByClassName("nav-title")[0];

function toggleClasses() {
    setTimeout(() => {
        if (window.scrollY < 525) {
            navBarEl.classList.remove("scrolled");
            navSearchEl.classList.remove("scrolled");
            navTitleEl.classList.remove("scrolled");
        } else {
            navBarEl.classList.add("scrolled");
            navSearchEl.classList.add("scrolled");
            navTitleEl.classList.add("scrolled");
        }

        toggleClasses();
    }, 333);
}

toggleClasses();

