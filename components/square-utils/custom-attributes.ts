import { PlantAttributes } from "@/Interfaces/interfaces"

export const PLANT_CATEGORY_ID = "D3C6IP7C54EQIVCPEXVZ3GF7"
export const SEED_CATEGORY_ID = "L3ZHDHK6PECMYE552SF7OM4E"
export const MERCH_CATEGORY_ID = "RFJSGP4VD2ORANC5GVV5E6WU"
export const LAND_CATEGORY_ID = "DCZQK2SJZMBMKJXDSHG5HBXD"

export const LOCATION_ID = "L3C4J69QTRCAA"

/*
mature size is no longer a key
form is now plant type


*/




export const attributeSelectionMapping = {
    flowerColor: "7VJXNGHBTZ7P4WHGZ2GQPSHL",
    dormancy: "PQWZSRAOF6N7DWJCVXCZ4KRD",
    lifeCycle: "M54WP4JUNMDX64XE4SXTY5US",
    plantType: "PQJVV27VT5S3OIYFPVVVFE2D",
    soilMoisture: "PJGVN7QD6R2CCAYG2ZSPOTHX",
    difficulty: "6LOTTMYJHOVTNZF2IRFMNMYI",
    sun: "WXT2OEFLILYVVWPMHVFB3T44",
    ecosystems: "EMANJUNNUZVJGQ5TN6NLYFA7",
    growthForm: "HW22ERID4Y75QG3BFBPRAFVP"

}

interface ReversedAttributeSelectionMapping {
  [key: string]: string;
}


export const attributeSelectionMappingReverse: ReversedAttributeSelectionMapping= {
  "7VJXNGHBTZ7P4WHGZ2GQPSHL": "flowerColor",
  "PQWZSRAOF6N7DWJCVXCZ4KRD": "dormancy",
  "M54WP4JUNMDX64XE4SXTY5US": "lifeCycle",
  "PQJVV27VT5S3OIYFPVVVFE2D": "plantType",
  "PJGVN7QD6R2CCAYG2ZSPOTHX": "soilMoisture",
  "6LOTTMYJHOVTNZF2IRFMNMYI": "difficulty",
  "WXT2OEFLILYVVWPMHVFB3T44": "sun",
  "EMANJUNNUZVJGQ5TN6NLYFA7": "ecosystems",
  "HW22ERID4Y75QG3BFBPRAFVP": "growthForm"
};

export const attributeArray = [
  'soilMoisture',
  'form',
  'difficulty',
  'dormancy',
  'growthRate',
  'flowerColor',
  'ecosystems',
  'lifeCycle',
  'sun',
  'growthForm'
]
