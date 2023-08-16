
export interface Plant {
    id: string;
    name: string;
    sci_name: string;
    pot_size: string;
    description: string;
    size: string;
    category: string;
    sub_category: string;
    listing_status: string;
    quantity: string;
    price: string;
    type: string;
    mature_size: string;
    form: string;
    growth: string;
    fragrance: string;
    color: string;
    season: string;
    difficulty: string;
    amt_sold: number;
    total_revenue: number;
    sku: string;
    date_added: Date;
    added_by: string;
    image_primary: string;
    image_alt: string;
    owner: string;
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

}