import { useEffect, useState } from "react";
import "./App.scss";
import { Navigation } from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Catalog } from "./components/Catalog";
import { Header } from "./components/Header";
import JsonData from "./data/data.json";
import { ModalDescription } from "./components/ModalDescription";
import { About } from "./components/About";
import { OrderPage } from "./components/OrderPage";
import { TelegramIcon } from "./components/TelegramIcon";
import { Footer } from "./components/Footer";
import { HowChooseSupModal } from "./components/HowChooseSupModal";
import { GladiatorHeader } from "./components/GladiatorHeader";
import { HitSellersHeader } from "./components/HitSellersHeader";
import { PayShipModal } from "./components/PayShipModal";
import { Map } from "./components/Map";


function App() {
  const [pageData, setPageData] = useState({});
  useEffect(() => {
    setPageData(JsonData);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [selectItem, setSelectItem] = useState(undefined);
  const [showOrderPage, setShowOrderPage] = useState(false);
  const [showHowCooseSupModal, setShowHowCooseSupModal] = useState(false);
  const [showPayShipModal, setShowPayShipModal] = useState(false)

  return (
    <div className="App">
      <Navigation
      setShowPayShipModal={setShowPayShipModal}
         />
      <Header
        showHowCooseSupModal={showHowCooseSupModal}
        setShowHowCooseSupModal={setShowHowCooseSupModal}
      />
      <TelegramIcon />
      <About />
      <HitSellersHeader 
        data={pageData.Iboard}
        setSelectItem={setSelectItem}
        setShowModal={setShowModal}/>
      <GladiatorHeader/>

      <OrderPage
        showOrderPage={showOrderPage}
        setShowOrderPage={setShowOrderPage}
        selectItem={selectItem}
        setSelectItem={setSelectItem}
      />
      <Catalog
        setSelectItem={setSelectItem}
        data={pageData.Gladiator}
        setShowModal={setShowModal}
      />
      
      
      <PayShipModal 
        showPayShipModal={showPayShipModal}
        setShowPayShipModal={setShowPayShipModal}
      />
      <ModalDescription
        
        setShowOrderPage={setShowOrderPage}
        setSelectItem={setSelectItem}
        selectItem={selectItem}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <HowChooseSupModal
        showHowCooseSupModal={showHowCooseSupModal}
        setShowHowCooseSupModal={setShowHowCooseSupModal}
      />
     
      <Map/>
      
      <Footer />
    </div>
  );
}

export default App;
