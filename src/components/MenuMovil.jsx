import {
    RiMenu3Fill,
    RiUser3Line,
    RiAddLine,
    RiPieChartLine,
    RiCloseLine,
    RiArrowDownSLine,
  } from "react-icons/ri";
  
  import useBoletas from "../hooks/useBoletas";

export default function MenuMovil() {

    const {toggleMenu,toggleOrders,showMenu} = useBoletas()
    
  return (
    <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
    <button className="p-2">
      <RiUser3Line />
    </button>
    <button className="p-2">
      <RiAddLine />
    </button>
    <button onClick={toggleOrders} className="p-2">
      <RiPieChartLine />
    </button>
    <button onClick={toggleMenu} className="text-white p-2">
      {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
    </button>
  </nav>
  )
}
