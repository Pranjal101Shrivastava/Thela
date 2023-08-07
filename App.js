import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path="/" element={<h1>Product listing component</h1>}></Route>
        <Route path="/add" element={<h1>Add listing component</h1>}></Route>
        <Route path="/update" element={<h1>update listing component</h1>}></Route>
        <Route path="/logout" element={<h1>logout listing component</h1>}></Route>
        <Route path="/profile" element={<h1>Profile listing component</h1>}></Route>
      </Routes>
      <h1>E-Dashboard</h1>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
