import React,{useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter,Routes,Route,useLocation} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/original.css';
import './styles/react.css';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import VerELer from './pages/VerELer';
import Machos from './pages/Machos';
import Ninhadas from './pages/Ninhadas';
import Contactos from './pages/Contactos';
import Femeas from './pages/Femeas';
import Estalao from './pages/Estalao';
import SpitzAlemao from './pages/SpitzAlemao';
import Videos from './pages/Videos';
import DogDetails from './pages/DogDetails';

function App(){
 const {pathname}=useLocation();
 const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{window.scrollTo(0,0)},[pathname]);
 useEffect(()=>{const update=()=>setScrolled(window.scrollY>20);window.addEventListener('scroll',update);update();return ()=>window.removeEventListener('scroll',update)},[]);
 return <><Header scrolled={scrolled}/><main><Routes>
  <Route path="/" element={<Home/>}/><Route path="/cao/:dogId" element={<DogDetails/>}/><Route path="/index.html" element={<Home/>}/>
  <Route path="/biasdream.html" element={<SobreNos/>}/><Route path="/biasdreamvereler.html" element={<VerELer/>}/><Route path="/biasdreammachos.html" element={<Machos/>}/>
  <Route path="/biasdreamninhadas.html" element={<Ninhadas/>}/><Route path="/biasdreamcontactos.html" element={<Contactos/>}/><Route path="/biasdreamfemeas.html" element={<Femeas/>}/>
  <Route path="/spitzalemaoestalao.html" element={<Estalao/>}/><Route path="/spitzalemao.html" element={<SpitzAlemao/>}/><Route path="/biasdreamkennelvideos.html" element={<Videos/>}/><Route path="*" element={<Home/>}/>
 </Routes></main><Footer/>{scrolled&&<button id="movetop" style={{display:'block'}} title="Voltar ao topo" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}><span className="fa fa-level-up"/></button>}</>;
}
createRoot(document.getElementById('root')).render(<BrowserRouter><App/></BrowserRouter>);
