// Compoenents

const langs = document.querySelector(".languages");

const langSkills = document.querySelectorAll(".languages ul li span");
let started = false;

window.onscroll = () => {
    if (window.scrollY > 130) {
            if (!started) {
          let startIndex = 0;
          langSkills.forEach((span) => {
            let interValid = setInterval(() => {
              span.style.width = `${startIndex++}%`;
              if (parseInt(startIndex) >= parseInt(span.dataset.width)) {
                clearInterval(interValid);
              }
            }, 4000 / parseInt(span.dataset.width));
          });
        };
        started = true;
      }
}
