import {Outlet} from 'react-router-dom'

import Sidebar from '../components/Sidebar';
import Carrito from "../components/Carrito"
import MenuMovil from '../components/MenuMovil';

export default function MainLayout() {
  return (
    <div className="bg-[#262837] w-full min-h-screen">
    <Sidebar />
    <main className='flex-1 h-screen overflow-y-scroll lg:pl-32 lg:pr-96 pb-20'>
        <Outlet />
    </main>
    <Carrito />

     {/* Menu movil */}
     <MenuMovil />
     
    </div>
  )
}
