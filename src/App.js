import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Filter from "./components/Filter";
import Restaurent from "./components/Restaurent";
import RestaurentList from "./components/RestaurentList";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
