import Headerpage from './components/Front-end/HomePage/Headerpage'
import BannerUIhome from "./components/Front-end/HomePage/BannerUIHome";
import FlexitensUIHome from "./components/Front-end/HomePage/FlexitensHome";
import FeatruresHome from "./components/Front-end/HomePage/FeaturesHome";
import FeaturesProducts1 from "./components/Front-end/HomePage/FeaturesProducts1";
import FeaturesProducts2 from "./components/Front-end/HomePage/FeaturesProducs2";
import FeaturesProducts3 from "./components/Front-end/HomePage/FeaturesProducs3";
import Getstarted from "./components/Front-end/HomePage/Getstarted";
import Footer from "./components/Front-end/HomePage/Footer";

function App() {

  return(
    <div >
      <Headerpage/>
      <BannerUIhome/>
      <FlexitensUIHome/>
      <FeatruresHome/>
      <FeaturesProducts1/>
      <FeaturesProducts2/>
      <FeaturesProducts3/>
      <Getstarted/>
      <Footer/>
    </div>
  )
  
}

export default App;
