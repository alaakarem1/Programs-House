
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
function App() {


  return (
    <>
      {/* <h1 className='text-green-700 text-bold'>welcome</h1> */}
      <Navbar/>
      <Hero/>
      <Text/>
      <About/>
      <Services/>
      <Clintes/>
      <Text2/>
      <Clients_feedback/>
      <WhyChooseUs/>

    </>
  )
}

export default App
