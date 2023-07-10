import './App.css'
import Intro from './pages/intro/index.js'
import Content from './pages/content/index.js'
import Section from './pages/section/index.js'
import Footer from './pages/footer/index.js'

function App() {
  return (
    <div className='App'>
      <Intro />
      <Content />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
