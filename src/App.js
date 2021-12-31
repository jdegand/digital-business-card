import './App.css';
import Info from './components/Info/Info';
import About from './components/About/About';
import Paragraph from './components/Paragraph/Paragraph';
import Footer from './components/Footer/Footer';

function App() {

  const aboutContent = `I am a frontend developer with a particular interest in making things simple and automating daily tasks.
  I try to keep up with security and best practices, and am always looking for new things to learn.`;

  const interestsContent = `Food expert.  Music scholar.  Reader.  Internet fanatic.  Bacon buff.  
  Entrepreneur.  Travel geek.  Pop culture ninja.  Coffee fanatic.`;

  return (
    <div className="App">
      <Info />
      <Paragraph title="About" content={aboutContent} />
      <Paragraph title="Interests" content={interestsContent} />
      <Footer />
    </div>
  );
}

export default App;
