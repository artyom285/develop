import './App.css';
import Home from './components/pages/Home';
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import { useState } from 'react';

function App() {
  const [sidebar, setSidebar] = useState(false);

  const sidebarFunc = () => setSidebar(!sidebar);

  return (
    <div className="App">
      <Navbar button={sidebarFunc}></Navbar>
      <Home></Home>
      <Sidebar side={sidebar} button={sidebarFunc}></Sidebar>
    </div>
  )
}

export default App
