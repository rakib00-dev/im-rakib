// window onLoad Entry
const navBarScroll = document.getElementById('navBarFix');
const headerSection = document.getElementById('header-section');

window.onload = () => {
  navBarScroll.style.top = '5px';
  navBarScroll.style.opacity = '1';
  headerSection.style.top = '0';
  headerSection.style.opacity = '1';
};
console.log(navBarScroll);

// header NavBar onScroll

window.onscroll = () => {
  const scrollValue = window.scrollY;
  if (scrollValue >= 82) {
    navBarScroll.style.top = '20px';
    navBarScroll.style.position = 'sticky';
  } else {
    navBarScroll.style.top = '5px';
    navBarScroll.style.position = null;
  }
};
