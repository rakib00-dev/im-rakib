// header NavBar onScroll
const NavBarScroll = document.getElementById('navBarFix');

window.onscroll = () => {
  const scrollValue = window.scrollY;
  if (scrollValue >= 82) {
    NavBarScroll.style.top = '20px';
    NavBarScroll.style.position = 'sticky';
  } else {
    NavBarScroll.style.top = null;
    NavBarScroll.style.position = null;
  }
  console.log(scrollValue);
};
