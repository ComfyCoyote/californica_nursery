import { PlantAttributes } from "@/Interfaces/interfaces"

export const PLANT_CATEGORY_ID = "D3C6IP7C54EQIVCPEXVZ3GF7"
export const SEED_CATEGORY_ID = "L3ZHDHK6PECMYE552SF7OM4E"
export const MERCH_CATEGORY_ID = "RFJSGP4VD2ORANC5GVV5E6WU"
export const LAND_CATEGORY_ID = "DCZQK2SJZMBMKJXDSHG5HBXD"


/*
mature size is no longer a key
form is now plant type


*/

export const plantAttributeMapping: PlantAttributes = {
    'soilMoisture': "Square:a11811ec-64b6-4aaa-bf02-a1a84ce9e867",
    'plantType': "Square:06563530-5d71-4036-99a9-f4eeb9d13794",
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




const customAttributeSample = { "Square:11d01017-8351-4d9c-91c4-a26996caec6d": {
    "name": "Soil Moisture",
    "string_value": "Low",
    "custom_attribute_definition_id": "HDL6MY7VLMVT7DY2SH4VKYI2",
    "type": "STRING",
    "key": "Square:11d01017-8351-4d9c-91c4-a26996caec6d"
  },
  "Square:3bf2131a-ee26-4d4a-8f1f-c500f4fe4df8": {
    "name": "Form",
    "string_value": "Medium Shrub",
    "custom_attribute_definition_id": "IZ6METIZRNLA6V76ORPW27AR",
    "type": "STRING",
    "key": "Square:3bf2131a-ee26-4d4a-8f1f-c500f4fe4df8"
  },
  "Square:509c85f6-9dc9-470c-a17e-8b7678f7f50c": {
    "name": "Difficulty",
    "string_value": "Easy",
    "custom_attribute_definition_id": "GQULC2WJZA3EUEJUDQ2DJDV3",
    "type": "STRING",
    "key": "Square:509c85f6-9dc9-470c-a17e-8b7678f7f50c"
  },
  "Square:70775afd-7ac0-4a54-b5bb-1f3b784a8e47": {
    "name": "Dormancy",
    "string_value": "Semi-Deciduous",
    "custom_attribute_definition_id": "7N3MBZEWBBU5SSRZMJAEBAZI",
    "type": "STRING",
    "key": "Square:70775afd-7ac0-4a54-b5bb-1f3b784a8e47"
  },
  "Square:e1c09dc1-d774-4baa-8eb1-d5fbe382f802": {
    "name": "Growth Rate",
    "string_value": "Moderate",
    "custom_attribute_definition_id": "5QP3BHTCNVODD37PLPI7HCZF",
    "type": "STRING",
    "key": "Square:e1c09dc1-d774-4baa-8eb1-d5fbe382f802"
  },
  "Square:e6617c18-5e84-4c27-9bbf-261c5e8acf54": {
    "name": "Sun",
    "string_value": "Full Sun",
    "custom_attribute_definition_id": "GGLEV735INJI3MURVBATOROP",
    "type": "STRING",
    "key": "Square:e6617c18-5e84-4c27-9bbf-261c5e8acf54"
  },
  "Square:f1cc4bf3-5322-4cb6-8550-0f965b6d1114": {
    "name": "Type",
    "string_value": "Perennial",
    "custom_attribute_definition_id": "RIXXWVBQ4SCLU6UKO4OGT3GH",
    "type": "STRING",
    "key": "Square:f1cc4bf3-5322-4cb6-8550-0f965b6d1114"
  }
}