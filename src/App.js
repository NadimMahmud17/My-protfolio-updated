import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Work from './components/Works/Work';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';


function App() {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
      <Experience></Experience>
      <Work></Work>
      <Portfolio></Portfolio>
      <Testimonials></Testimonials>
      <h1>fotter and animation comming soon</h1>
    </div>
  );
}

export default App;
