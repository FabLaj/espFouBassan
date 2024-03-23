import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css';
import 'leaflet/dist/leaflet.css';
import { Routes, Route, Switch } from 'react-router-dom';
import NavBar from './component/Navbar.jsx';
import MainPageContent from './component/MainPageContent.jsx';
import { Suspense } from 'react';
import SideBar from './component/SideBar.jsx';
import HomePage from './component/HomePage.jsx';
import GrandTrajet from './component/GrandTrajet.jsx';

const App = () => {

  return (
    <>
      <NavBar></NavBar>
      <Suspense fallback={<div className='container'>Chargement...</div>}>
        <Routes>
          <Route path='/' index element={<HomePage/>}/>
          <Route path=":tag" element={<SideBar/>}>
            <Route path=':date' element={<MainPageContent/>}/>
            <Route path='all' element={<GrandTrajet/>}/>
          </Route>
        </Routes>
      </Suspense>
  </>
  );
}

export default App;

//Il faut que je trouve une manière de mieux gérer les routes, permettre l'affichage d'élément par élément et de pouvoir changer les éléments déj;a présent
//Par example, changer le Fou de bassan pour le nom du fou et permettre L'URL de s'adapter et non s'installer sur ce qui est déjà présent
//J'aimerais également ici régler le problème de profondeur