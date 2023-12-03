import {useState} from 'react'

import Sidebar from "./components/Sidebar"
import Balotas from "./components/Balotas"
import Carrito from "./components/Carrito"
import MenuMovil from './components/MenuMovil';

function App() {
  
  return (
    <div className="bg-[#262837] w-full min-h-screen">
     <Sidebar />
     <main className='flex-1 h-screen overflow-y-scroll lg:pl-32 lg:pr-96 pb-20'>
     <Balotas />
     </main>
     <Carrito />

      {/* Menu movil */}
      <MenuMovil />
      
     </div>
  )
}

export default App
