// Mobile nav toggle
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn?.addEventListener("click", () => {
  const expanded = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", String(!expanded));
  mobileNav.hidden = expanded;
});

// Close mobile nav when clicking a link
mobileNav?.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.matches("a")) {
    mobileNav.hidden = true;
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal on scroll
const reveals = Array.from(document.querySelectorAll(".reveal"));
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.12 }
);
reveals.forEach((el) => io.observe(el));

// Newsletter form (front-end only)
const newsletterForm = document.getElementById("newsletterForm");
const formNote = document.getElementById("formNote");

newsletterForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    formNote.textContent = "Please enter a valid email address.";
    return;
  }

  formNote.textContent = "Thanks — you’re in. Check your inbox soon.";
  newsletterForm.reset();
});

// Contact form (front-end only)
const contactForm = document.getElementById("contactForm");
const contactNote = document.getElementById("contactNote");

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !message) {
    contactNote.textContent = "Please add your name and a short message.";
    return;
  }

  contactNote.textContent = "Message received. We’ll reply within 24–48 hours.";
  contactForm.reset();
});
