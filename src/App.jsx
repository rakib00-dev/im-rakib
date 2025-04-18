import Header from './Components/Header';
import Skills from './Components/Skills';
import Testimonial from './Components/Testimonial';
import Services from './Components/Services';
import About from './Components/About';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Carousel from './Components/Carousel';
// import { useEffect, useRef } from 'react';

function App() {
  // cursor follower
  // const cursor = useRef();

  // useEffect(() => {
  //   window.addEventListener('mousemove', (e) => {
  //     if (cursor) {
  //       cursor.current.setAttribute(
  //         'style',
  //         `top: ${e.pageY - 40}px; left:${e.pageX - 30}px`
  //       );
  //     } else {
  //       console.log('Error faced');
  //     }
  //   });
  // }, [cursor]);

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

  return (
    <>
      {/* <div className="cursor" ref={cursor}></div> */}
      <Header />
      {/* <Skills /> */}
      <Carousel />
      <Testimonial />
      <Services />
      <Projects />
      <About />
      <Footer />
    </>
  );
}

export default App;
