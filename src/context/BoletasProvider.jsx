import { createContext, useState } from "react"

const BoletasContext = new createContext();

const BoletasProvider = ({children}) => {
    
    const [showMenu, setShowMenu] = useState(false)
    const [showOrder, setShowOrder] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setShowOrder(false);
    };

    const toggleOrders = () => {
        setShowOrder(!showOrder);
        setShowMenu(false);
    };

    const handleSetShowOrder = order => {
        setShowOrder(order)
    }

    return (
        <BoletasContext.Provider 
            value={{
                showMenu,
                showOrder,
                toggleMenu,
                toggleOrders,
                handleSetShowOrder,
            }}
        >
            {children}
        </ BoletasContext.Provider>
    )
}

export {
    BoletasProvider
}

export default BoletasContext