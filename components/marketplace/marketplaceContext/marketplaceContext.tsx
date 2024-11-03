import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of individual items
interface MarketplaceItem {
    // Add specific item properties here
    id: string;
    // other properties...
}

// Define the shape of the API response
interface ItemsResponse {
    data: {
        cursor: string;
        items: MarketplaceItem[];
    };
}

interface MarketplaceContextProps {
    plantData: MarketplaceItem[];
    seedData: MarketplaceItem[];
    merchData: MarketplaceItem[];
    cursor: string;
    setCursor: React.Dispatch<React.SetStateAction<string>>;
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
    cursor: '',
    setCursor: () => {},
    setItems: () => {},
    setItemsBySearch: () => {}
});

export const useMarketplace = () => useContext(MarketplaceContext);

export const MarketplaceProvider: React.FC<MarketplaceProviderProps> = ({ children }) => {
    const [plantData, setPlantData] = useState<MarketplaceItem[]>([]);
    const [seedData, setSeedData] = useState<MarketplaceItem[]>([]);
    const [merchData, setMerchData] = useState<MarketplaceItem[]>([]);
    const [cursor, setCursor] = useState<string>('');

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