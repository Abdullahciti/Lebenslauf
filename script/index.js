// Compoenents

const langSkills = document.querySelectorAll(".languages ul li span");
let started = false;
const codeSkills = document.querySelectorAll(".wrapper .exp li span");
let startedTwo = false;

window.onscroll = () => {
      if (window.scrollY > 50) {
            if (!startedTwo) {
          let startIndex = 0;
          codeSkills.forEach((el) => {
            let interValid = setInterval(() => {
              el.style.width = `${startIndex++}%`;
              if (parseInt(startIndex) >= parseInt(el.dataset.width)) {
                clearInterval(interValid);
              }
            }, 4000 / parseInt(el.dataset.width));
          });
          console.log("heelo")
        };
        startedTwo = true;
      }
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
