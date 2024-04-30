import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardDetails from "./components/CardDetails";
import Cards from "./components/Cards";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart" element={<CardDetails />} />
      </Routes>
    </>
  );
}

export default App;
