import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Modal from "./components/Modal";
import ShuffleList from "./components/ShuffleList";
import DropDown from "./components/DropDown";
import List from "./components/List";
import CusotmHooks from "./components/CusotmHooks";
import InfiniteScroll from "./components/InfiniteScroll";
import CounterRef from "./ref/CounterRef";
import StopWatch from "./components/StopWatch";
import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Pure from "./components/pure component/Main";
import Folder from "./components/Folder/Folder";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/shuffle-list" element={<ShuffleList />} />
        <Route path="/dropdown" element={<DropDown />} />
        <Route path="/list" element={<List />} />
        <Route path="/custom-hooks" element={<CusotmHooks />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll />} />
        <Route path="/counter-ref" element={<CounterRef />} />
        <Route path="/stop-watch" element={<StopWatch />} />
        <Route path="/pure" element={<Pure />} />
        <Route path="/folder" element={<Folder />} />
      </Routes>
    </Router>
  );
}

export default App;
