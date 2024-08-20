import React from 'react';
import WhatsAppButton from './WhatsAppButton'; // Adjust the import path as needed

import Contact from './Components/Contact/Contact';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Email from './Components/Email'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Email />} />
          <Route path="/send-email" element={<Contact />} />
        </Routes>
        <WhatsAppButton />
      </Router>
    </div>
  );
}

export default App;

