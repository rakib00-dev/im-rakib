// cursor follower
const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', (e) => {
  cursor.setAttribute(
    'style',
    `top: ${e.pageY - 40}px; left:${e.pageX - 30}px`
  );
});

// window onLoad Entry
const navBarScroll = document.getElementById('navBarFix');
const headerSection = document.getElementById('header-section');

window.addEventListener('load', () => {
  navBarScroll.style.top = '5px';
  navBarScroll.style.opacity = '1';
  headerSection.style.top = '0';
  headerSection.style.opacity = '1';
});

// header NavBar onScroll
window.addEventListener('scroll', () => {
  const scrollValue = window.scrollY;
  if (scrollValue >= 82) {
    navBarScroll.style.top = '20px';
    navBarScroll.style.position = 'sticky';
  } else {
    navBarScroll.style.top = '5px';
    navBarScroll.style.position = null;
  }
});

// const form = document.getElementById('form');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const formBody = e.target;
//   const name = e.target.name.value;
//   const email = e.target.email.value;
//   const message = e.target.message.value;
//   form.reset();
//   const body = { name, email, message };
//   console.log(body);
// });
