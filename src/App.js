// eslint-disable-next-line no-unused-expressions
import './App.css';
import { 
  BrowserRouter,
  Routes,
  Route, } from "react-router-dom";
import Stake from './components/Stake';
import Landing from './components/Landing.js';
import About from './components/About.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/main.css';
// import './assets/css/blueimp-gallery.min.css'
// import './assets/css/blueimp-gallery.min.css.map'
import './assets/css/bootstrap-grid.min.css'
import './assets/css/bootstrap-grid.min.css.map'
import './assets/css/bootstrap-reboot.min.css'
import './assets/css/bootstrap-reboot.min.css.map'
import './assets/css/magnific-popup.css'
import './assets/css/select2.min.css'
import './assets/css/splide.min.css'

// import './assets/js/main.js'

import React, {useState} from 'react';
import { StoreContext } from './store';
import { WalletProvider } from './context/wallet';

const App = () => {
  const [showToast, setShowToast] = useState(false);
  const [load, setLoad] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [stake, setStake] = useState(true);
  const [lan, setLan] = useState(false);

  const value = {
    showToast, setShowToast,
    load, setLoad, 
    walletConnected, setWalletConnected,
    stake, setStake,
    lan, setLan,
  }

  return (
    <WalletProvider>
      <StoreContext.Provider value= {value}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/stake" element={<Stake />} />
            <Route path="/faqs" exact element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </StoreContext.Provider>
    </WalletProvider>
  );
}

export default App;
