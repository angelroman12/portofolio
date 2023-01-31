const toContact = document.querySelectorAll('.to-contact');
const contactSection = document.getElementById('contact');

toContact.forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    contactSection.scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// To Projects Section
const projectsSection = document.getElementById('projects');
const toProjects = document.querySelectorAll('.to-projects');

toProjects.forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    projectsSection.scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Year in the footer
const year = document.querySelector('.year');
const newDate = new Date().getFullYear();
year.textContent = newDate;

// Scroll to top
// const headerElement = document.querySelector('.header');
// const heroBtn = document.querySelector('.logo-link');

// heroBtn.forEach(
//   (btn = e => {
//     e.preventDefault();
//     headerElement.scrollIntoView({ behavior: 'smooth' });
//   })
// );
