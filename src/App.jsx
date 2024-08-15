import { useEffect, useState } from "react";

import "./App.css";
// import Nav from "./components/nav";
import About from "./components/About";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import {InfinitySpin} from "react-loader-spinner"
import Nav from "./components/Nav";
// import ContactApi from "./components/ContactFrom";

function App() {
  const [loading, setLoading]= useState(false)
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },2000)
    },[])
  return (
    
    <div className="overflow-hidden">
     {
      loading ?<div className="flex items-center justify-center bg-slate-800 h-[100vh] "> <InfinitySpin visible={true}
      width="200"
      color="#fff"
      ariaLabel="infinity-spin-loading"/> </div> : <div className=" bg-slate-800">
    <Nav/>
      <Banner />
      <About />
      <Services/>
      <Projects/>
      <Contacts/>
      {/* <ContactApi/> */}
      <Footer/>
    </div>
     }
    </div>
  );
}

export default App;
