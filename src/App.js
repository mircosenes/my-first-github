import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

// -----------------------CONNESSIONE AL SERVER NODEJS-------------------------

  const [customers, setCustomers] = useState([]);

  // mi connetto al server nodejs che accede al database
  //tramite array.map per ogni elemento dell'array di json (cliente) ritornato da nodejs
  // salvo nella mia variabile di stato customer il nome di ciasun cliente
  useEffect(() => {

    document.addEventListener("click", function (err) { //quando clicco su ricarica

      fetch("http://localhost:8080/customers")
        .then((res) => res.json())
        .then((data) => setCustomers(data.map((customer) => (customer.name))))
        .catch(rejected => {
          console.log(rejected);
        });

    });

  },[displayCustomers]); //quando viene renderizzato displayCustomers rifà la fetch


// ----------------------------(backend in db.js)----------------------------------


  function displayCustomers() {
    return customers.map((customer, index) => {
      return <li key={index}>{customer}</li>
    });
  }

  if (customers.length === 0) {
    return (
      <div>
        <h1>Ancora nessun dato...</h1>
        <button id='request' onClick={displayCustomers} > richiedi dati </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Data from my NodeJS Server</h1>
      <ul>Nomi dei Clienti: {displayCustomers()}</ul>
    </div>
  );
}

export default App;
