import Nav from "./Nav";

// function Home() {
//   return (
//     <section>
//       <Nav />
//       <h1>HOMEHOMEHOMEHOMHOMOHJOJMOMOMOJMNOHJOSHDFOHSDFOHB</h1>
//       <h2>Planetside 2 motherfucker</h2>
      
//     </section>
//   );
// }

// export default Home;

import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="Home">
        
      <header className="Home-header">
        <h1>Ian Hnizdo the TF2 GOD</h1>
        
        <Nav />
        
      </header>
      <main>
        <section id="home">
          <h2>Welcome</h2>
          <p>Hi! I'm a software developer and this is my portfolio. Have a look at my projects and blog posts to learn more about my work and expertise.</p>
        </section>
        <section id="portfolio">
          <h2>Portfolio</h2>
          <p>Here are some of my projects:</p>
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul>
        </section>
        <section id="blog">
          <h2>Blog</h2>
          <p>Here are my latest blog posts:</p>
          <ul>
            <li>Blog Post 1</li>
            <li>Blog Post 2</li>
            <li>Blog Post 3</li>
          </ul>
        </section>
        <section id="about">
          <h2>About</h2>
          <p>Learn more about my background, skills, and experience.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Feel free to get in touch with me via email or social media.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Software Developer's Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;