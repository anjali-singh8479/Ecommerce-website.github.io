let hamburger=document.querySelector(".hamburger");
let close=document.querySelector(".close");
let mobileNav=document.querySelector(".mobile-nav");
hamburger.addEventListener("click", function () {
    mobileNav.classList.add('open');
  });
  close.addEventListener("click", function () {
    mobileNav.classList.remove('open');
  });

