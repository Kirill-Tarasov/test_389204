import React, { useState}from "react";
import CryptoCell from "./CryptoCell";
import Table from "./Table";
import "../assets/styles/main/body.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import alfa_img from "../assets/images/alfa.png"
import qiwi_img from "../assets/images/qiwi.png"
import raif_img from "../assets/images/raif.png"
import sber_img from "../assets/images/sber.png"
import tink_img from "../assets/images/tink.png"
import vtb_img from "../assets/images/vtb.png"
import yoom_img from "../assets/images/yoom.png"
import binance_img from "../assets/images/Binance_Logo.png"



const ToggleButton = () => {
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };
  return (
    <div
      style={{
        backgroundColor: isOn ? "#7c71eb" : "#95a5a6",
        borderRadius: "25px",
        width: "45px",
        height: "20px",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        padding: "3px",
      }}
      onClick={handleToggle}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "50%",
          width: "19px",
          height: "19px",
          transition: "transform 0.2s ease-in-out",
          transform: isOn ? "translateX(26px)" : "translateX(0)",
        }}
      ></div>
    </div>
  );
};


const Body = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabSelect = (index) => {
      setActiveTab(index);
    };
    return (
        <div className="main">

            <div className="FileringAds">
                <div className="CryptoCellList">
                    <CryptoCell name="bitcoin" />
                    <CryptoCell name="usdt" />
                    <CryptoCell name="ethereum" />
                    <CryptoCell name="dogecoin" />
                    <CryptoCell name="litecoin" />
                    <CryptoCell name="shib" />
                </div>
                <div className="wrapperFilterSection">
                    <div className="PaymentSystems FilterSection">
                        <div className="titleFilterName"><span>Способы оплаты:</span></div>
                        <div className="WrapperYoomoney TumblerElem"><ToggleButton /><img src={yoom_img} alt="Логотип" width="18px" height="18px" />Yoomoney</div>
                        <div className="WrapperSber TumblerElem"><ToggleButton /><img src={sber_img} alt="Логотип" width="18px" height="18px" />Sber</div>
                        <div className="WrapperTinkoff TumblerElem"><ToggleButton /><img src={tink_img} alt="Логотип" width="18px" height="18px" />Tinkoff</div>
                        <div className="WrapperQiwi TumblerElem"><ToggleButton /><img src={qiwi_img} alt="Логотип" width="18px" height="18px" />Qiwi</div>
                        <div className="WrapperAlfa TumblerElem"><ToggleButton /><img src={alfa_img} alt="Логотип" width="18px" height="18px" />Alfa</div>
                        <div className="WrapperVtb TumblerElem"><ToggleButton /><img src={vtb_img} alt="Логотип" width="18px" height="18px" />Vtb</div>
                        <div className="WrapperRaiffeisen TumblerElem"><ToggleButton /><img src={raif_img} alt="Логотип" width="18px" height="18px" />Raiffeisen</div>
                    </div>
                    <div className="Exchanges FilterSection">
                        <div className="titleFilterName">Биржы:</div>
                        <div className="WrapperBinance TumblerElem"><ToggleButton /><img src={binance_img} alt="Логотип" width="18px" height="18px" />Binance</div>
                    </div>
                    <div className="TradingVolume FilterSection">
                        <div className="titleFilterName">Лимиты обьявления:</div>
                        <div className="WrapperVolume TumblerElem"><ToggleButton />Сорт. лимит</div>
                    </div>
                </div>
            </div>
            
            <div className="BestOffer">
                <div className="titleFilterName">Лучшее предложние</div>
                <div className="BestSell">Продажа </div>
                <div className="BestBuy">Покупка</div>
            </div>
            
            <div className="Graphics">
                <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
                  <TabList>
                    <Tab>P2P</Tab>
                    <Tab>Биржа</Tab>
                  </TabList>
                  <TabPanel>
                    <div className="Graphic">
                      <img src={alfa_img} alt="Логотип Альфа-банка" />
                      <span className="Graphic__Title">Альфа-банк</span>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="Graphic">
                      <img src={qiwi_img} alt="Логотип Балтийской биржи" />
                      <span className="Graphic__Title">Балтийская биржа</span>
                    </div>
                  </TabPanel>
                </Tabs>
            </div>

            <div className="TableOrders">
                <div className="TitleTable">Заголовок таблицы</div>
                <Table />
            </div>
        </div>
    );
};

export default Body;