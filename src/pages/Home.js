import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Home = () => {
    return(
        <>
            <Header/>
            <Menu/>
            <Products/>
            <Footer/>    
        </>
    );
}

export default Home