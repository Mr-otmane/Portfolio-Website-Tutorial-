/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenufunction() {
  var menuBtn = document.getElementById("myNavmenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += "responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();

  function headerShadow() {
    const navHeader = document.getElementById("header");

    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
    }
  }
};
/* ----- TYPING EFFECT ----- */

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */

/* -- HOME -- */

/* -- PROJECT BOX -- */

/* -- HEADINGS -- */

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */

/* -- ABOUT SKILLS & FORM BOX -- */

/* ----- CHANGE ACTIVE LINK ----- */
