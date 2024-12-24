import type { OrderLineItemModifier, OrderLineItemAppliedDiscount, OrderLineItemAppliedTax } from "square";


export interface Seed extends Product{
    seedAttributes: PlantAttributes | null
}


export interface Plant extends Product {
    plantAttributes?: PlantAttributes;
}

export interface Merch extends Product {
    merchAttributes?: MerchAttributesAsArray;
}

export interface Product {
    id?: string;
    name?: string;
    description?: string;
    images?: Array<any>;
    imageUrls?: Array<string | null>
    price?: Array<PriceVariation>;


}

export interface SelectOption {
    id?: string;
    value?: string;

}

export interface AttributeSelection {
    name?: string;
    key?: string;
    selectionArr?: SelectOption[]
}

export interface PlantAttributes {
        [key: string]: string[];

        soilMoisture:  string[]; 
        plantType:  string[]; 
        difficulty:  string[]; 
        dormancy:  string[];
        growthRate:  string[];
        flowerColor:  string[];
        ecosystems:  string[];
        lifeCycle:  string[];
        sun:  string[]; 
        growthForm:  string[];
    
}

export interface MerchAttributesAsArray {
    [key: string]: any;

    type?: string;

}

export interface AttributeSelectionMap {
    [key: string]: any;

    soilMoisture?: AttributeSelection 
    plantType?: AttributeSelection 
    difficulty?: AttributeSelection 
    dormancy?: AttributeSelection
    growthRate?: AttributeSelection
    flowerColor?: AttributeSelection
    ecosystems?: AttributeSelection
    lifeCycle?: AttributeSelection
    sun?: AttributeSelection 
    growthForm?: AttributeSelection
}


export interface OrderItem {
    [key: string]: any;

    name: string;
    quantity: string;
    catalogObjectId: string;
    modifiers?: OrderLineItemModifier[];
    appliedDiscounts?: OrderLineItemAppliedDiscount[]
    appliedTaxes: OrderLineItemAppliedTax[]
    misc: any

}


export interface PriceVariation {
    id: string;
    price: string;
    type: string;
    amount: string;
}
/*
(Clothing Image)
w/ 2 photos

Default Data
Name: Name
Price: tbd
ClothingSize: sm, m, L, XL, XXL
Quantity: tbd

Specialty Classifications (based off Calscape)
Type: t-shirt, long sleeve, 

Description 
	Short description/slogan of the product

Analytics 
AmountSold: number
TotalRevenue: number

*/

export interface Apparel {
    id: string;
    name: string;
    description: string;
    size: string;
    isListed: boolean
    quantity: string;
    price: string;
    type: string;
    amt_sold: number;
    total_revenue: number;
    sku: string;
    date_added: Date;
    added_by: string;
    image_primary: string;
    image_alt: string;
    owner: string;
    imageUrls?: Array<string | null>;

}