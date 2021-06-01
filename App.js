import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Information from './components/information';
import data from './data';
function App() {

  const [product, setProduct] = useState(data);


  return (
    <main>
      <Header />
      <Information data={product} />
    </main>
  );
}

export default App;
