/* =====================================
   TYPING ANIMATION
===================================== */

const typingElement = document.getElementById("typing");

const words = [
  "Cyber Security Enthusiast",
  "Ethical Hacking Learner",
  "Digital Safety Educator",
  "Cyber Awareness Creator",
  "Founder of SecureWithRatheesh"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!deleting) {
    typingElement.textContent =
      currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {
      deleting = true;

      setTimeout(typeEffect, 2000);
      return;
    }

  } else {

    typingElement.textContent =
      currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      wordIndex++;

      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

if (typingElement) {
  typeEffect();
}

/* =====================================
   INSTAGRAM MODAL
===================================== */

const modal =
  document.getElementById("instagramModal");

const instagramBtn =
  document.getElementById("instagramBtn");

const closeBtn =
  document.querySelector(".close");

if (instagramBtn) {

  instagramBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

}

if (closeBtn) {

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

}

window.addEventListener("click", (e) => {

  if (e.target === modal) {
    modal.style.display = "none";
  }

});

/* =====================================
   SCROLL ANIMATION
===================================== */

const cards =
  document.querySelectorAll(".card");

const observer =
new IntersectionObserver(
(entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0px)";

}

});

},
{
threshold: 0.2
}
);

cards.forEach(card => {

card.style.opacity = "0";

card.style.transform =
"translateY(40px)";

card.style.transition =
"all 0.7s ease";

observer.observe(card);

});

/* =====================================
   NAVBAR SHADOW
===================================== */

window.addEventListener("scroll", () => {

const navbar =
document.querySelector(".navbar");

if (!navbar) return;

if (window.scrollY > 50) {

navbar.style.boxShadow =
"0 5px 20px rgba(0,229,255,0.15)";

} else {

navbar.style.boxShadow = "none";

}

});

/* =====================================
   CONTACT FORM VALIDATION
   (Used in contact.html later)
===================================== */

function validateForm() {

const name =
document.getElementById("name");

const phone =
document.getElementById("phone");

const email =
document.getElementById("email");

if (!name || !phone || !email) {
return true;
}

if (name.value.trim().length < 3) {

alert(
"Please enter a valid name."
);

return false;
}

const phoneRegex =
/^[0-9]{10}$/;

if (
!phoneRegex.test(phone.value)
) {

alert(
"Please enter a valid 10-digit phone number."
);

return false;
}

const emailRegex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (
!emailRegex.test(email.value)
) {

alert(
"Please enter a valid email address."
);

return false;
}

return true;

}

/* =====================================
   SECURITY IMPROVEMENTS
===================================== */

/* Disable F12 */

document.addEventListener(
"keydown",
(event) => {

if (
event.key === "F12"
) {
event.preventDefault();
}

if (
event.ctrlKey &&
event.shiftKey &&
event.key === "I"
) {
event.preventDefault();
}

if (
event.ctrlKey &&
event.shiftKey &&
event.key === "J"
) {
event.preventDefault();
}

if (
event.ctrlKey &&
event.key === "U"
) {
event.preventDefault();
}

}
);

console.log(
"SecureWithRatheesh Loaded Successfully"
);

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if(menu && nav){

menu.addEventListener("click", () => {

nav.classList.toggle("active");

});

}

const topBtn =
document.getElementById("topBtn");

window.onscroll = function(){

if(
document.body.scrollTop > 300 ||
document.documentElement.scrollTop > 300
){
topBtn.style.display = "block";
}else{
topBtn.style.display = "none";
}

};

if(topBtn){

topBtn.addEventListener("click", () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (!topBtn) return;

  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

if (topBtn) {
  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}