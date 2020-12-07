import  React from 'react';
import './App.css';

import Chat from './chat';
import Sidebar from './sidebar';

function App() {
  return (
    <div className="App">
      <div className="app_body">
         {/* sidebar of whatsapp */}

       <Sidebar/>

        {/* Chat component of whatsapp */}

        <Chat/>
      </div>
      
     
    </div>
  );
}

export default App;
