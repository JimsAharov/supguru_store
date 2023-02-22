import { useEffect, useState } from "react";
import "./App.scss";
import { Navigation } from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Catalog } from "./components/Catalog";
import { Header } from "./components/Header";
import JsonData from "./data/data.json";
import { Img } from "./components/img";
import { ModalDescription } from "./components/ModalDescription";
import { About } from "./components/About";
import { ChooseSup } from "./components/ChooseSup";
import { OrderPage } from "./components/OrderPage";
import { TelegramIcon } from "./components/TelegramIcon";
import { Footer } from "./components/Footer";
import { HowChooseSupModal } from "./components/HowChooseSupModal";


function App() {
  const [pageData, setPageData] = useState({});
  useEffect(() => {
    setPageData(JsonData);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [selectItem, setSelectItem] = useState(undefined);
  const [showOrderPage, setShowOrderPage] = useState(false);
  const [showHowCooseSupModal, setShowHowCooseSupModal] = useState(false);

  

  return (
    <div className="App">
      <Navigation />
      <Header showHowCooseSupModal={showHowCooseSupModal} setShowHowCooseSupModal={setShowHowCooseSupModal} />
      <TelegramIcon/>
      <About />
      <ChooseSup />
      
      <OrderPage showOrderPage={showOrderPage} setShowOrderPage={setShowOrderPage} selectItem={selectItem}/>
      <Catalog
        setSelectItem={setSelectItem}
        data={pageData.Gladiator}
        setShowModal={setShowModal}
      
      />
      <Img />
      <Catalog
        data={pageData.Iboard}
        setSelectItem={setSelectItem}
        setShowModal={setShowModal}
      />
      <ModalDescription
        setShowOrderPage={setShowOrderPage}
        setSelectItem={setSelectItem}
        selectItem={selectItem}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <HowChooseSupModal showHowCooseSupModal={showHowCooseSupModal} setShowHowCooseSupModal={setShowHowCooseSupModal}/>
      <iframe title="map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aae787bd5cbfc82facc29f66c57d0d39adfbee5bf959358c554664e479115eeb6&amp;source=constructor" width="1054" height="565" frameborder="0"></iframe>
      <Footer/>
    </div>
  );
}

export default App;
