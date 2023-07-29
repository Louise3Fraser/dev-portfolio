import React, {useEffect, useState} from "react";
import { BrowserRouter } from "react-router-dom";
import {motion} from "framer-motion"
import Sidebar from "./components/Sidebar";
import AppRouter from "./AppRouter"
import "./App.css";
// import { motion } from "framer-motion";

function App() {
  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0
  // });
  // const [cursorVariant, setCursorVariant] = useState("default");

  // console.log(mousePosition)
  // useEffect(() => {
    
  //   const mouseMove = e => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY
  //     })
  //   }

  //   window.addEventListener("mousemove", mouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   }
  // }, []);

  // const variants = {
  //   default: {
  //     x: mousePosition.x - 16,
  //     y: mousePosition.y - 16,
  //   },
  //   text: {
  //     height: 150,
  //     width: 150,
  //     x: mousePosition.x - 75,
  //     y: mousePosition.y - 75,
  //     backgroundColor: "yellow",
  //     mixBlendMode: "difference"
  //   }
  // }

  // const textEnter = () => setCursorVariant("text");
  // const textLeave = () => setCursorVariant("default");

 
  return (
    <div className="App">
     {/* <motion.div
        className='cursor'
        animate="default"
      />
       */}
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
