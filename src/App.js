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


function App() {
  const [pageData, setPageData] = useState({});
  useEffect(() => {
    setPageData(JsonData);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [selectItem, setSelectItem] = useState(undefined);
  const [showOrderPage, setShowOrderPage] = useState(false)

  

  return (
    <div className="App">
      <Navigation />
      <Header />

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
    </div>
  );
}

export default App;
