import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AboutPage from './components/AboutPage';
import ServicePage from './components/ServicePage';
import MenuPage from './components/MenuPage';
import ContactPage from './components/ContactPage';
import OurTeamPage from './components/OurTeamPage';
import BookingPage from './components/BookingPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
      <Route path='/service' element={<ServicePage/>}></Route>
      <Route path='/menu' element={<MenuPage/>}></Route>
      <Route path='/contact' element={<ContactPage/>}></Route>
      <Route path='/ourteam' element={<OurTeamPage/>}></Route>
      <Route path='/booking' element={<BookingPage/>}></Route>
    </Routes>
  </BrowserRouter>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
