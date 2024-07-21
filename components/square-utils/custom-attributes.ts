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

export const plantAttributeMapping: PlantAttributes = {
    'soilMoisture': "Square:a11811ec-64b6-4aaa-bf02-a1a84ce9e867",
    'plantType': "Square:8bd38961-b53d-4f1a-8c45-d7e4d02b801a",
    'difficulty': "Square:67ef524a-68ae-49eb-8fa9-27de90660c6a",
    'dormancy': "Square:0e4417c9-cb0a-46e2-93ca-813fcc5f105a",
    'growthRate': "Square:e1c09dc1-d774-4baa-8eb1-d5fbe382f802",
    'sun': "Square:3f1890c9-6d18-4949-89db-3e4c007b91fe",
    'lifeCycle': "Square:f17c0b0f-6c4b-45e2-9dbc-40e6f092df05",
    'ecosystems': "Square:4ae7315c-2948-4e44-9310-4f178273bd2a",
    'flowerColor': "Square:49a0d982-b34b-4a7a-8acb-6bf6630d0537",
    'growthForm': "Square:06563530-5d71-4036-99a9-f4eeb9d13794"

}


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
