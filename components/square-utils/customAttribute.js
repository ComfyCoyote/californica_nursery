const custom = {
    "objects": [
      {
        "type": "CUSTOM_ATTRIBUTE_DEFINITION",
        "id": "BIVZBZOP3GWYCNHSWMGJNHUW",
        "updated_at": "2024-02-27T03:46:28.074Z",
        "created_at": "2023-11-15T01:16:24.258Z",
        "version": 1709005588074,
        "is_deleted": false,
        "present_at_all_locations": true,
        "custom_attribute_definition_data": {
          "type": "BOOLEAN",
          "name": "Is Alcoholic",
          "description": "Enabling this toggle on an item indicates that it contains alcohol.",
          "source_application": {
            "application_id": "sq0idp-w46nJ_NCNDMSOywaCY0mwA",
            "name": "Square Online Store"
          },
          "allowed_object_types": [
            "ITEM"
          ],
          "seller_visibility": "SELLER_VISIBILITY_READ_WRITE_VALUES",
          "app_visibility": "APP_VISIBILITY_HIDDEN",
          "key": "is_alcoholic"
        }
      },
      {
        "type": "CUSTOM_ATTRIBUTE_DEFINITION",
        "id": "TEFBMLIDSQ7TCZRPDMR4DN7J",
        "updated_at": "2023-11-15T01:16:24.597Z",
        "created_at": "2023-11-15T01:16:24.597Z",
        "version": 1700010984597,
        "is_deleted": false,
        "present_at_all_locations": true,
        "custom_attribute_definition_data": {
          "type": "STRING",
          "name": "Ecom Storefront Classic Site ID",
          "description": "Ecommerce bridge target storefront classic site ID. Used to create site-item associations after copying items.",
          "source_application": {
            "application_id": "sq0idp-w46nJ_NCNDMSOywaCY0mwA",
            "name": "Square Online Store"
          },
          "allowed_object_types": [
            "ITEM"
          ],
          "seller_visibility": "SELLER_VISIBILITY_HIDDEN",
          "app_visibility": "APP_VISIBILITY_HIDDEN",
          "string_config": {
            "enforce_uniqueness": false
          },
          "key": "ecom_target_classic_site_id"
        }
      },
      {
        "type": "CUSTOM_ATTRIBUTE_DEFINITION",
        "id": "7VJXNGHBTZ7P4WHGZ2GQPSHL",
        "updated_at": "2024-01-29T03:00:33.221Z",
        "created_at": "2024-01-29T02:57:23.412Z",
        "version": 1706497233221,
        "is_deleted": false,
        "present_at_all_locations": true,
        "custom_attribute_definition_data": {
          "type": "SELECTION",
          "name": "Flower Color",
          "source_application": {
            "application_id": "Square"
          },
          "allowed_object_types": [
            "ITEM",
            "ITEM_VARIATION"
          ],
          "seller_visibility": "SELLER_VISIBILITY_READ_WRITE_VALUES",
          "app_visibility": "APP_VISIBILITY_READ_WRITE_VALUES",
          "selection_config": {
            "max_allowed_selections": 100,
            "allowed_selections": [
              {
                "uid": "5JI2MG5RBPOYRNCG4UXYMGZ5",
                "name": "Blue"
              },
              {
                "uid": "SJYS3MKGTMIGTDWNWFYP5A2G",
                "name": "Green"
              },
              {
                "uid": "EII6CPAPR3PPPXBDDUPOZT4A",
                "name": "Orange"
              },
              {
                "uid": "TUT72HDPPK7BIIBNPS737YDG",
                "name": "Pink"
              },
              {
                "uid": "2FSGIG77QI7NSKWFDKZHD33G",
                "name": "Purple"
              },
              {
                "uid": "S4PRP5C7J7QEEICPIFAZ6FMH",
                "name": "Red"
              },
              {
                "uid": "WEAQEB24J44CXLIQFLOECBTR",
                "name": "Tan"
              },
              {
                "uid": "IGP247YRGGB3RGGBGVIVJPL6",
                "name": "White"
              },
              {
                "uid": "FCB46F6UQUSHOW5L4UR4QST7",
                "name": "Yellow"
              }
            ]
          },
          "key": "49a0d982-b34b-4a7a-8acb-6bf6630d0537"
        }
      },
      {
        "type": "CUSTOM_ATTRIBUTE_DEFINITION",
        "id": "PQWZSRAOF6N7DWJCVXCZ4KRD",
        "updated_at": "2024-01-29T03:11:55.12Z",
        "created_at": "2024-01-29T03:11:55.12Z",
        "version": 1706497915120,
        "is_deleted": false,
        "present_at_all_locations": true,
        "custom_attribute_definition_data": {
          "type": "SELECTION",
          "name": "Dormancy",
          "source_application": {
            "application_id": "Square"
          },
          "allowed_object_types": [
            "ITEM",
            "ITEM_VARIATION"
          ],
          "seller_visibility": "SELLER_VISIBILITY_READ_WRITE_VALUES",
          "app_visibility": "APP_VISIBILITY_READ_WRITE_VALUES",
          "selection_config": {
            "max_allowed_selections": 100,
            "allowed_selections": [
              {
                "uid": "QXKVIDR6CQUMDO4GYPAVRBJ4",
                "name": "Deciduous"
              },
              {
                "uid": "ASA6L3CM2TDACMYNUVFOQU3E",
                "name": "Evergreen"
              },
              {
                "uid": "K5XIPGJSQXD7RP3QUO2H2XLF",
                "name": "Semi-Deciduous"
              }
            ]
          },
          "key": "0e4417c9-cb0a-46e2-93ca-813fcc5f105a"
        }
      },
      {
        "type": "CUSTOM_ATTRIBUTE_DEFINITION",
        "id": "M54WP4JUNMDX64XE4SXTY5US",
        "updated_at": "2024-01-29T03:12:22.528Z",
        "created_at": "2024-01-29T03:12:22.528Z",
        "version": 1706497942528,
        "is_deleted": false,
        "present_at_all_locations": true,
        "custom_attribute_definition_data": {
          "type": "SELECTION",
          "name": "Life Cycle",
          "source_application": {
            "application_id": "Square"
          },
          "allowed_object_types": [
            "ITEM",
            "ITEM_VARIATION"
          ],
          "seller_visibility": "SELLER_VISIBILITY_READ_WRITE_VALUES",
          "app_visibility": "APP_VISIBILITY_READ_WRITE_VALUES",
          "selection_config": {
            "max_allowed_selections": 1,
            "allowed_selections": [
              {
                "uid": "JYKVFXU5GCEE5R6CRR2FRTO6",
                "name": "Annual"
              },
              {
                "uid": "BQRK4P5MWOCFE6CGGLU3CLHP",
                "name": "Biennial"
              },
              {
                "uid": "CV7VWUJAC6TJYEGRM5CQX6WI",
                "name": "Perennial"
              }
            ]
          },
          "key": "f17c0b0f-6c4b-45e2-9dbc-40e6f092df05"
        }
      },
      {
        "type": "CUSTOM_ATTRIBUTE_DEFINITION",
        "id": "PQJVV27VT5S3OIYFPVVVFE2D",
        "updated_at": "2024-02-09T02:19:51.081Z",
        "created_at": "2024-01-29T03:13:57.729Z",
        "version": 1707445191081,
        "is_deleted": false,
        "present_at_all_locations": true,
        "custom_attribute_definition_data": {
          "type": "SELECTION",
          "name": "Plant Type",
          "source_application": {
            "application_id": "Square"
          },
          "allowed_object_types": [
            "ITEM",
            "ITEM_VARIATION"
          ],
          "seller_visibility": "SELLER_VISIBILITY_READ_WRITE_VALUES",
          "app_visibility": "APP_VISIBILITY_READ_WRITE_VALUES",
          "selection_config": {
            "max_allowed_selections": 100,
            "allowed_selections": [
              {
                "uid": "EISGCJBAGMH6QEFZ6KUALJCH",
                "name": "Cactus"
              },
              {
                "uid": "WLETVG3UFAXJWY4JR2V6E4EK",
                "name": "Large Bunchgrass"
              },
              {
                "uid": "GNMZO2S4VL3KVXHZG26YFRWT",
                "name": "Large Shrub"
              },
              {
                "uid": "MV4GB6P3Y4KB7ISVEG6DMHM3",
                "name": "Large Tree"
              },
              {
                "uid": "JAT6YAT7HPWLGTXVBFZQEWLU",
                "name": "Medium Bunchgrass"
              },
              {
                "uid": "KDNAHQJAC2YR5VNOJVDFJIYH",
                "name": "Medium Shrub"
              },
              {
                "uid": "KV3UGWZR7RR64BANTY5A7EBF",
                "name": "Small Bunchgrass"
              },
              {
                "uid": "SNSNF5BIBWKLB4VYQWZCOQ55",
                "name": "Small Shrub"
              },
              {
                "uid": "GXRKL2RFYH6GFJ2HEKSL7OUE",
                "name": "Small Tree"
              },
              {
                "uid": "OGSP4NIHRCC4WGRAJL4263EL",
                "name": "Subshrub"
              },
              {
                "uid": "DZEEUJ4OUK6SEIXYD52DM233",
                "name": "Succulent"
              },
              {
                "uid": "SKPMVAJ7YHRKLOOYM3SO2NQR",
                "name": "Vine"
              }
            ]
          },
          "key": "8bd38961-b53d-4f1a-8c45-d7e4d02b801a"
        }
      },
      {
        "type": "CUSTOM_ATTRIBUTE_DEFINITION",
        "id": "PJGVN7QD6R2CCAYG2ZSPOTHX",
        "updated_at": "2024-01-29T03:14:21.995Z",
        "created_at": "2024-01-29T03:14:21.995Z",
        "version": 1706498061995,
        "is_deleted": false,
        "present_at_all_locations": true,
        "custom_attribute_definition_data": {
          "type": "SELECTION",
          "name": "Soil Moisture",
          "source_application": {
            "application_id": "Square"
          },
          "allowed_object_types": [
            "ITEM",
            "ITEM_VARIATION"
          ],
          "seller_visibility": "SELLER_VISIBILITY_READ_WRITE_VALUES",
          "app_visibility": "APP_VISIBILITY_READ_WRITE_VALUES",
          "selection_config": {
            "max_allowed_selections": 100,
            "allowed_selections": [
              {
                "uid": "N6TAGMG5UBOIIWL2MNOW4OEC",
                "name": "High"
              },
              {
                "uid": "23NCPP3GX246HDC533HP3I7M",
                "name": "Low"
              },
              {
                "uid": "QYSX5MGZLHXYSARSJPOAXN7Z",
                "name": "Medium"
              }
            ]
          },
          "key": "a11811ec-64b6-4aaa-bf02-a1a84ce9e867"
        }
      },
      {
        "type": "CUSTOM_ATTRIBUTE_DEFINITION",
        "id": "6LOTTMYJHOVTNZF2IRFMNMYI",
        "updated_at": "2024-01-29T03:15:05.592Z",
        "created_at": "2024-01-29T03:15:05.592Z",
        "version": 1706498105592,
        "is_deleted": false,
        "present_at_all_locations": true,
        "custom_attribute_definition_data": {
          "type": "SELECTION",
          "name": "Difficulty",
          "source_application": {
            "application_id": "Square"
          },
          "allowed_object_types": [
            "ITEM",
            "ITEM_VARIATION"
          ],
          "seller_visibility": "SELLER_VISIBILITY_READ_WRITE_VALUES",
          "app_visibility": "APP_VISIBILITY_READ_WRITE_VALUES",
          "selection_config": {
            "max_allowed_selections": 1,
            "allowed_selections": [
              {
                "uid": "WQY4BSCKAUS4GSJIH3AC36LW",
                "name": "Difficult"
              },
              {
                "uid": "JUTF6MKKFMVF4PG3XZBZNSXW",
                "name": "Easy"
              },
              {
                "uid": "6FTT55QRY7ZECMAWHS3V2J5F",
                "name": "Moderate"
              }
            ]
          },
          "key": "67ef524a-68ae-49eb-8fa9-27de90660c6a"
        }
      },
      {
        "type": "CUSTOM_ATTRIBUTE_DEFINITION",
        "id": "WXT2OEFLILYVVWPMHVFB3T44",
        "updated_at": "2024-01-29T03:15:41.384Z",
        "created_at": "2024-01-29T03:15:41.384Z",
        "version": 1706498141384,
        "is_deleted": false,
        "present_at_all_locations": true,
        "custom_attribute_definition_data": {
          "type": "SELECTION",
          "name": "Sun",
          "source_application": {
            "application_id": "Square"
          },
          "allowed_object_types": [
            "ITEM",
            "ITEM_VARIATION"
          ],
          "seller_visibility": "SELLER_VISIBILITY_READ_WRITE_VALUES",
          "app_visibility": "APP_VISIBILITY_READ_WRITE_VALUES",
          "selection_config": {
            "max_allowed_selections": 100,
            "allowed_selections": [
              {
                "uid": "A7QDXUEQOZXOKFWLXIPTMF3C",
                "name": "Full Shade"
              },
              {
                "uid": "JEPNZZL6OHXUVYSQOYVIZ4R7",
                "name": "Full Sun"
              },
              {
                "uid": "PEGZBC66465Q766NBPLL4HOR",
                "name": "Part Shade"
              }
            ]
          },
          "key": "3f1890c9-6d18-4949-89db-3e4c007b91fe"
        }
      },
      {
        "type": "CUSTOM_ATTRIBUTE_DEFINITION",
        "id": "EMANJUNNUZVJGQ5TN6NLYFA7",
        "updated_at": "2024-01-29T03:48:56.434Z",
        "created_at": "2024-01-29T03:18:06.609Z",
        "version": 1706500136434,
        "is_deleted": false,
        "present_at_all_locations": true,
        "custom_attribute_definition_data": {
          "type": "SELECTION",
          "name": "Ecosystems",
          "source_application": {
            "application_id": "Square"
          },
          "allowed_object_types": [
            "ITEM",
            "ITEM_VARIATION"
          ],
          "seller_visibility": "SELLER_VISIBILITY_READ_WRITE_VALUES",
          "app_visibility": "APP_VISIBILITY_READ_WRITE_VALUES",
          "selection_config": {
            "max_allowed_selections": 100,
            "allowed_selections": [
              {
                "uid": "D2VYDDHPUD6FUH6PFTY7Z7RX",
                "name": "Chaparral"
              },
              {
                "uid": "22WFCLXTVYGMWP5JEN5DYICK",
                "name": "Coast Sagescrub"
              },
              {
                "uid": "R3UPPZSQKFVEUFEIY34WYKGX",
                "name": "Coastal Bluff"
              },
              {
                "uid": "B6XBNKBVUEF7ASG52WKIX27A",
                "name": "Coastal Prairie"
              },
              {
                "uid": "WEGBJIUNYVUBBXW52QD3KCRQ",
                "name": "Coastal Salt Marsh"
              },
              {
                "uid": "MKUEZTKSTSHDM4PSNNEQ6HCK",
                "name": "Coastal Sand Dunes"
              },
              {
                "uid": "2PGB5X3IRW7ROE6E3FL5KY7Y",
                "name": "Coastal Succulent Scrub"
              },
              {
                "uid": "NDONZYRHGYMCYSI3MVC73BBQ",
                "name": "Desert"
              },
              {
                "uid": "3DUOBYSBVIG5Y5GM3R4AGPRF",
                "name": "Oak Woodland"
              },
              {
                "uid": "7M2ULDAL7G2ZFUSLUUEYD7HS",
                "name": "Riparian Woodland"
              }
            ]
          },
          "key": "4ae7315c-2948-4e44-9310-4f178273bd2a"
        }
      },
      {
        "type": "CUSTOM_ATTRIBUTE_DEFINITION",
        "id": "HW22ERID4Y75QG3BFBPRAFVP",
        "updated_at": "2024-01-29T04:06:26.088Z",
        "created_at": "2024-01-29T03:39:26.245Z",
        "version": 1706501186088,
        "is_deleted": false,
        "present_at_all_locations": true,
        "custom_attribute_definition_data": {
          "type": "SELECTION",
          "name": "Growth Form",
          "source_application": {
            "application_id": "Square"
          },
          "allowed_object_types": [
            "ITEM",
            "ITEM_VARIATION"
          ],
          "seller_visibility": "SELLER_VISIBILITY_READ_WRITE_VALUES",
          "app_visibility": "APP_VISIBILITY_READ_WRITE_VALUES",
          "selection_config": {
            "max_allowed_selections": 100,
            "allowed_selections": [
              {
                "uid": "YVMWH7VCJ5UQFNL5HP35RHQS",
                "name": "Mounding"
              },
              {
                "uid": "OP3MDCLF6FKHYMFKYAP6YZC2",
                "name": "Spreading"
              },
              {
                "uid": "LMIWBRIECHX32PDBAO6QVMZ4",
                "name": "Upright"
              }
            ]
          },
          "key": "06563530-5d71-4036-99a9-f4eeb9d13794"
        }
      },
      {
        "type": "CUSTOM_ATTRIBUTE_DEFINITION",
        "id": "UVROUPJ2XGBY4BJV6SS3UUH3",
        "updated_at": "2024-04-11T02:12:02.447Z",
        "created_at": "2024-04-11T02:12:02.447Z",
        "version": 1712801522447,
        "is_deleted": false,
        "present_at_all_locations": true,
        "custom_attribute_definition_data": {
          "type": "SELECTION",
          "name": "Merch",
          "source_application": {
            "application_id": "Square"
          },
          "allowed_object_types": [
            "ITEM",
            "ITEM_VARIATION"
          ],
          "seller_visibility": "SELLER_VISIBILITY_READ_WRITE_VALUES",
          "app_visibility": "APP_VISIBILITY_READ_WRITE_VALUES",
          "selection_config": {
            "max_allowed_selections": 100,
            "allowed_selections": [
              {
                "uid": "HQ6LZFE6QWXDSLFG6GKHYX2Z",
                "name": "Hats"
              },
              {
                "uid": "5RDQ6RKMI6B6VA266L5L4J3T",
                "name": "Stickers"
              },
              {
                "uid": "VPHSV5IJZPKFFTIHSLQODBL3",
                "name": "T-Shirts"
              }
            ]
          },
          "key": "2247b7aa-3fb9-4e58-8a5e-a8ee664cdff7"
        }
      }
    ],
    "latest_time": "2024-08-08T00:40:12.357Z"
  }

  const map = custom.objects.map((i) => {
    const obj = {}
    obj["att_id"] = i.id
    obj["name"] = i.custom_attribute_definition_data.name
    return obj
  } )

  console.log(map)



  try {
    const response = await client.catalogApi.searchCatalogItems({
      customAttributeFilters: [
        {
          customAttributeDefinitionId: '7VJXNGHBTZ7P4WHGZ2GQPSHL',
          selectionUidsFilter: [
            'FCB46F6UQUSHOW5L4UR4QST7'
          ]
        },
        {
          customAttributeDefinitionId: 'PQWZSRAOF6N7DWJCVXCZ4KRD',
          selectionUidsFilter: [
            'QXKVIDR6CQUMDO4GYPAVRBJ4'
          ]
        }
      ]
    });
  
    console.log(response.result);
  } catch(error) {
    console.log(error);
  }