import Main from "./components/02-main/Main";
import Projects from "./components/05-projects/Projects";
import Skills from "./components/04-skills/Skills";
import ContactMe from "./components/06-contact-me/Contact-me";
import Footer from "./components/07-footer/Footer";
import Header from "./components/01-header/Header";


function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <hr />

      <Skills />
      <hr />
      <Projects />
      <hr />
      <ContactMe />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
