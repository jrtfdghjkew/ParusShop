import React, {useState} from 'react';
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider";
import Sale from "../components/Sale/Sale";
import Services from "../components/Services/Services";
import BestSeles from "../components/BestSeles/BestSeles";
import NewProducts from "../components/NewProducts/NewProducts";
import AboutCompany from "../components/AboutCompany/AboutCompany";
import AddressWarehouse from "../components/AddressWarehouse/AddressWarehouse";
import Footer from "../components/Footer/Footer";

const Shop = () => {
    return (
        <div>
            <Navbar/>
            <Slider autoPlay={true} autoPlayTime={15000}/>
            <Sale/>
            <Services/>
            <BestSeles/>
            <NewProducts/>
            <AboutCompany/>
            <AddressWarehouse/>
            <Footer/>
        </div>
    );
};

export default Shop;