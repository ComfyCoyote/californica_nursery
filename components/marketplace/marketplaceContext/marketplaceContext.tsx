import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';


interface MarketplaceItem {
    
    id: string;
    
}

interface CursorStore {
    [key: string]: string;

    "/plantsCursor": string;
    "/merchCursor": string;
    "/seedsCursor": string
}

interface MarketplaceContextProps {
    plantData: MarketplaceItem[];
    seedData: MarketplaceItem[];
    merchData: MarketplaceItem[];
    cursor: CursorStore;
    setCursor: React.Dispatch<React.SetStateAction<CursorStore>>;
    setItems: (location: string, items: any) => void;
    setItemsBySearch: (location: string, items: any) => void;
}

interface MarketplaceProviderProps {
    children: ReactNode;
}

const MarketplaceContext = createContext<MarketplaceContextProps>({
    plantData: [],
    seedData: [],
    merchData: [],
    cursor: {"/plantsCursor": '', "/merchCursor": '', "/seedsCursor": ''},
    setCursor: () => {},
    setItems: () => {},
    setItemsBySearch: () => {}
});

export const useMarketplace = () => useContext(MarketplaceContext);

export const MarketplaceProvider: React.FC<MarketplaceProviderProps> = ({ children }) => {
    const [plantData, setPlantData] = useState<MarketplaceItem[]>([]);
    const [seedData, setSeedData] = useState<MarketplaceItem[]>([]);
    const [merchData, setMerchData] = useState<MarketplaceItem[]>([]);
    const [cursor, setCursor] = useState({"/plantsCursor": '', "/merchCursor": '', "/seedsCursor": ''});


    useEffect(() => {
        const plantsCursor = sessionStorage.getItem("/plantsCursor") ?? ''
        const seedsCursor = sessionStorage.getItem("/seedsCursor") ?? ''
        const merchCursor = sessionStorage.getItem("/merchCursor") ?? ''

        setCursor({
            "/plantsCursor": plantsCursor,
            "/seedsCursor": seedsCursor,
            "/merchCursor": merchCursor
        })
    }, [])

    function setItems(location: string, items: any){
        console.log('setitems')
        if (items) {
            if (location === "/plants") {
                console.log()
                setPlantData([...plantData, ...items]);
            }
            if (location === "/seeds") {
                setSeedData([...seedData, ...items]);
            }
            if (location === "/merch") {
                setMerchData([...merchData, ...items]);
            }
        }
    }

    function setItemsBySearch(location: string, items: any){
        console.log('setitemsbysearch')
        console.log(items)
        if(items) {
            if (location === "/plants") {
                setPlantData(items);
            }
            if (location === "/seeds") {
                setSeedData(items);
            }
            if (location === "/merch") {
                setMerchData(items);
            }
        }
    }

    return (
        <MarketplaceContext.Provider 
            value={{ 
                plantData,
                seedData,
                merchData,
                setCursor, 
                cursor, 
                setItems,
                setItemsBySearch 
            }}
        >
            {children}
        </MarketplaceContext.Provider>
    );
};