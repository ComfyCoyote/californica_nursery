interface BaseFilter {
    price: string[] | null;
    name: string | null;

}


export interface PlantFilters extends BaseFilter {
    soilMoisture: string[] | null;
    plantType?: string[] | null;
    difficulty?: string[] | null; 
    dormancy?: string[] | null;
    growthRate?: string[] | null;
    flowerColor?: string[] | null;
    ecosystems?: string[] | null;
    lifeCycle?: string[] | null;
    sun?: string[] | null; 
    growthForm?: string[] | null;

}


export interface SeedFilters extends BaseFilter {
    seedAttributes: string[] | null;

}

export interface MerchFilters extends BaseFilter {
    size: string[] | null;

}