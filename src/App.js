
import './App.css';
import From from './from';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DataReport from './DataReport'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<From />} />
          <Route exact path="/Data" element={<DataReport />} />
          <Route exact path="/" element={<From />}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
