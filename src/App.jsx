
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Text from './components/Text/Text';
import About from './components/About/About';
import Clintes from './components/Clients/Clintes';
import Text2 from './components/Text2/Text2';
import Clients_feedback from './components/Clients Feedback/Clients feedback';
import Services from './components/Services/Services';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Ready from './components/Ready/Ready';
import Footer from './components/Footer/Footer';
// import HeroLarge from './components/Herolg/HeroLarge';
// import HeroSm from './components/Hero/HeroSm';

function App() {


  return (
    <>
    <div className='bg-[#02021E]'>
      {/* <h1 className='text-green-700 text-bold'>welcome</h1> */}
      <Navbar/>
      <Hero/>
      {/* <HeroLarge/> */}
      <Text/>
      <About/>
      <Services/>
      <Clintes/>
      <Text2/>
      <Clients_feedback/>
      <WhyChooseUs/>
      <Ready/>
      <Footer/>
      </div>
    </>
  )
}

export default App
