const shadowWrapperEl = document.getElementsByClassName("shadow-wrapper")[0];

function doSomething(scrollTop) {
    shadowWrapperEl.style.opacity = scrollTop / 900;
};

let ticking = false;

window.addEventListener('scroll', function(e) {
    const scrollTop = window.scrollY;

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
            if (navBarEl.classList.contains("scrolled")) {
                navBarEl.classList.remove("scrolled");
            }

            if (navSearchEl.classList.contains("scrolled")) {
                navSearchEl.classList.remove("scrolled");
            }

            if (navTitleEl.classList.contains("scrolled")) {
                navTitleEl.classList.remove("scrolled");
            }
        } else {
            if (!navBarEl.classList.contains("scrolled")) {
                navBarEl.classList.add("scrolled");
            }

            if (!navSearchEl.classList.contains("scrolled")) {
                navSearchEl.classList.add("scrolled");
            }

            if (!navTitleEl.classList.contains("scrolled")) {
                navTitleEl.classList.add("scrolled");
            }
        }

        toggleClasses();
    }, 333);
}

toggleClasses();

