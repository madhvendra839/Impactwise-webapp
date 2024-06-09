import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import Login from './Login';
import About from './About';
import Contact from './Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-j44cay1a2hfkhwt2.us.auth0.com"
  clientId="hp3aRxbqRxdLum5EA9CM85B0TTv6hybz"
  authorizationParams={{
    redirect_uri: "http://localhost:3000/app"
  }}
>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> Login route at root path
        <Route path="/app" element={<App />} /> {/* App route at /app path */}
        <Route path="/about" element={<About />} /> {/* App route at /app path */}
        <Route path="/contact" element={<Contact />} /> {/* App route at /app path */}
      </Routes>
    </BrowserRouter>
</Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
