

export interface CustomAttributeValues {
    [key: string]: string | any
    
    "id": string
    "att_id": string
    "name": string
    "attributes": any
}


export const plantCustomAttributeValues: CustomAttributeValues[] = [
    {       
        "id": "Square:49a0d982-b34b-4a7a-8acb-6bf6630d0537",
        "name": "flowerColor",
        "att_id": '7VJXNGHBTZ7P4WHGZ2GQPSHL',
        "attributes": {
            "5JI2MG5RBPOYRNCG4UXYMGZ5": "Blue",
            "SJYS3MKGTMIGTDWNWFYP5A2G": "Green",
            "EII6CPAPR3PPPXBDDUPOZT4A": "Orange",
            "TUT72HDPPK7BIIBNPS737YDG": "Pink",
            "2FSGIG77QI7NSKWFDKZHD33G": "Purple",
            "S4PRP5C7J7QEEICPIFAZ6FMH": "Red",
            "WEAQEB24J44CXLIQFLOECBTR": "Tan",
            "IGP247YRGGB3RGGBGVIVJPL6": "White",
            "FCB46F6UQUSHOW5L4UR4QST7": "Yellow"
        }
    },
    {   "id": "Square:0e4417c9-cb0a-46e2-93ca-813fcc5f105a", 
        "att_id": 'PQWZSRAOF6N7DWJCVXCZ4KRD',
        "name": "dormancy",
        "attributes": {
            "QXKVIDR6CQUMDO4GYPAVRBJ4": "Deciduous",
            "ASA6L3CM2TDACMYNUVFOQU3E": "Evergreen",
            "K5XIPGJSQXD7RP3QUO2H2XLF": "Semi-Deciduous",
            "KRY53OB626NBDB4OTG7UKHH5": "Summer Deciduous",
            "QGDGYWZHRJPGYEITMYKRWB6Y": "Winter Deciduous"
        }
    },
    {   "id": "Square:f17c0b0f-6c4b-45e2-9dbc-40e6f092df05", 
        "att_id": 'M54WP4JUNMDX64XE4SXTY5US',
        "name": "lifeCycle",
        "attributes": {
            "JYKVFXU5GCEE5R6CRR2FRTO6": "Annual",
            "BQRK4P5MWOCFE6CGGLU3CLHP": "Biennial",
            "CV7VWUJAC6TJYEGRM5CQX6WI": "Perennial"
        }
    },
    {   "id": "Square:8bd38961-b53d-4f1a-8c45-d7e4d02b801a", 
        "att_id": 'PQJVV27VT5S3OIYFPVVVFE2D',
        "name": "plantType",
        "attributes": {
            "EISGCJBAGMH6QEFZ6KUALJCH": "Cactus",
            "PHSAWKEIPOT3YMXOMQXHKGTM": "Herbaceous Perennial",
            "WLETVG3UFAXJWY4JR2V6E4EK": "Large Bunchgrass",
            "GNMZO2S4VL3KVXHZG26YFRWT": "Large Shrub",
            "MV4GB6P3Y4KB7ISVEG6DMHM3": "Large Tree",
            "SUJRJDMPMI7KUPLOD5FXD5BG": "Medium Tree",
            "JAT6YAT7HPWLGTXVBFZQEWLU": "Medium Bunchgrass",
            "KDNAHQJAC2YR5VNOJVDFJIYH": "Medium Shrub",
            "KV3UGWZR7RR64BANTY5A7EBF": "Small Bunchgrass",
            "SNSNF5BIBWKLB4VYQWZCOQ55": "Small Shrub",
            "GXRKL2RFYH6GFJ2HEKSL7OUE": "Small Tree",
            "OGSP4NIHRCC4WGRAJL4263EL": "Subshrub",
            "DZEEUJ4OUK6SEIXYD52DM233": "Succulent",
            "SKPMVAJ7YHRKLOOYM3SO2NQR": "Vine"
            }
    },
    {   "id": "Square:a11811ec-64b6-4aaa-bf02-a1a84ce9e867",
        "att_id": 'PJGVN7QD6R2CCAYG2ZSPOTHX', 
        "name": "soilMoisture",
        "attributes": {
            "N6TAGMG5UBOIIWL2MNOW4OEC": "High",
            "23NCPP3GX246HDC533HP3I7M": "Low",
            "QYSX5MGZLHXYSARSJPOAXN7Z": "Medium"
        }
    },
    {   "id": "Square:67ef524a-68ae-49eb-8fa9-27de90660c6a",
        "att_id": '6LOTTMYJHOVTNZF2IRFMNMYI',  
        "name": "difficulty",
        "attributes": {
            "WQY4BSCKAUS4GSJIH3AC36LW": "Difficult",
            "JUTF6MKKFMVF4PG3XZBZNSXW": "Easy",
            "6FTT55QRY7ZECMAWHS3V2J5F": "Moderate"
        }
    },
    {   "id": "Square:3f1890c9-6d18-4949-89db-3e4c007b91fe",
        "att_id": 'WXT2OEFLILYVVWPMHVFB3T44', 
        "name": "sun",
        "attributes": {
            "A7QDXUEQOZXOKFWLXIPTMF3C": "Full Shade",
            "JEPNZZL6OHXUVYSQOYVIZ4R7": "Full Sun",
            "PEGZBC66465Q766NBPLL4HOR": "Part Shade"
        }
    },
    {   "id": "Square:4ae7315c-2948-4e44-9310-4f178273bd2a",
        "att_id": 'EMANJUNNUZVJGQ5TN6NLYFA7',
        "name": "ecosystem", 
        "attributes": {
            "D2VYDDHPUD6FUH6PFTY7Z7RX": "Chaparral",
            "22WFCLXTVYGMWP5JEN5DYICK": "Coast Sagescrub",
            "R3UPPZSQKFVEUFEIY34WYKGX": "Coastal Bluff",
            "B6XBNKBVUEF7ASG52WKIX27A": "Coastal Prairie",
            "WEGBJIUNYVUBBXW52QD3KCRQ": "Coastal Salt Marsh",
            "MKUEZTKSTSHDM4PSNNEQ6HCK": "Coastal Sand Dunes",
            "2PGB5X3IRW7ROE6E3FL5KY7Y": "Coastal Succulent Scrub",
            "NDONZYRHGYMCYSI3MVC73BBQ": "Desert",
            "3DUOBYSBVIG5Y5GM3R4AGPRF": "Oak Woodland",
            "7M2ULDAL7G2ZFUSLUUEYD7HS": "Riparian Woodland"
        }
    },
    {   "id": "Square:06563530-5d71-4036-99a9-f4eeb9d13794",
        "att_id": "HW22ERID4Y75QG3BFBPRAFVP", 
        "name": "growthForm",
        "attributes": {
            "YVMWH7VCJ5UQFNL5HP35RHQS": "Mounding",
            "OP3MDCLF6FKHYMFKYAP6YZC2": "Spreading",
            "LMIWBRIECHX32PDBAO6QVMZ4": "Upright"
        } 
    }     
]


export const merchCustomAttributeValues: CustomAttributeValues[] = [
    {
        "id": "",
        "att_id": "UVROUPJ2XGBY4BJV6SS3UUH3",
        "name": "merch",
        "attributes": {
            "HQ6LZFE6QWXDSLFG6GKHYX2Z": "Hats",
            "5RDQ6RKMI6B6VA266L5L4J3T": "Stickers",
            "VPHSV5IJZPKFFTIHSLQODBL3": "T-Shirts"
        }
       
    }
      
]