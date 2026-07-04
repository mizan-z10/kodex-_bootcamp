import { createContext, useState } from "react"; 

export let CartStore = createContext(); 

export let ContextProvider = ({children}) => { 
    const [cardItem, setCardItem] = useState([]); 
    console.log("this is cart item",cardItem);

    return (
        <CartStore.Provider value={{cardItem, setCardItem}}> 
            {children} 
        </CartStore.Provider>
    )
}