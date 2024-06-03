import { useState } from "react";
import "./App.css";
import ProductList from "./pages/ProductList";
import StarRating from "./components/StarRating";
import Modal from "./components/Modal";
import ShuffleList from "./components/ShuffleList";
import DropDown from "./components/DropDown";
import List from "./components/List";
import CusotmHooks from "./components/CusotmHooks";
import InfiniteScroll from "./components/InfiniteScroll";
import CounterRef from "./ref/CounterRef";
import StopWatch from "./components/StopWatch";
function App() {
  return (
    <>
      {/* <CusotmHooks /> */}
      {/* <StarRating limit={6} rating={1} /> */}
      {/* <DropDown /> */}
      {/* <List /> */}
      {/* <Modal /> */}
      {/* <ShuffleList /> */}
      {/* <ProductList /> */}
      {/* <InfiniteScroll /> */}
      {/* <CounterRef /> */}
      <StopWatch />
    </>
  );
}

export default App;
