import './styles/style.scss';
import Banner from './components/Banner';
import Coding from './components/Coding';
import Projects from './components/Projects';

function App() {
  return (
    <div className="portfolio__container">
      <div className="">
        <Banner />
        <Coding />
        <Projects />
      </div>

    </div>
  );
}

export default App;
