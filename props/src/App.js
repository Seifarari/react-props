import './App.css';
import React from 'react';
import Data from './profile/profile';

function App() {
  const styleApp = {color: "white", textAlign: "center", fontSize: 40.3, backgroundColor: 'black'}
  return (
    <div className="App" style={styleApp}>

         <Data fullName="Seif Allah Arari" bio="22 years old FullStack JS student" />
          
    </div>
  );
}

export default App;