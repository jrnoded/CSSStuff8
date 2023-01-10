const tl = gsap.timeline({ paused: true });

tl.to("#toast", {
  y: -200,
  duration: 0.6,
  ease: Power4.easeInOut,
})
  .to("#toast", {
    width: "60%",
    duration: 1,
    ease: Power4.easeInOut,
  })
  .to("#msg", {
    y: 0,
    display: "block",
    autoAlpha: 1,
    duration: 0.8,
    delay: -0.4,
    ease: Power4.easeInOut,
  });

var btn = document.getElementById("btn");

btn.onclick = function (event) {
  event.preventDefault();
  tl.play();

  setTimeout(function () {
    tl.reverse();
  }, 4000);
};
