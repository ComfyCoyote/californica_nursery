import { VStack, Tabs, Text } from '@chakra-ui/react';
import { plantCustomAttributeValues, merchCustomAttributeValues } from '@/components/square-utils/customAttributeValueObject';
import SearchSidebarDropdown from './search-sidebar-dropdown';
import type { CustomOption } from './search-sidebar-dropdown';
import { theme } from '@/theme/theme';

interface AttributeSeachPropTypes {
    type: string
}

interface AttributeTitle {
    [key: string]: any;
}

const attributes: AttributeTitle = {
    'flowerColor': 'Flower Color',
    'dormancy': 'Dormancy',
    'lifeCycle': 'Life Cycle',
    'plantType': 'Plant Type',
    'soilMoisture': 'Soil Moisture',
    'difficulty': 'Difficulty',
    'sun': 'Sun',
    'ecosystem': 'Ecosystem',
    'growthForm': 'Growth Form'
  }
  


const AttributeSearch: React.FC<AttributeSeachPropTypes> = ({type}) => {

    return(
        
        <>
        {
            contextAttributes().map((i) => {
                return(
                <VStack
                    alignItems={'flex-start'}
                    spacing={3} 
                    key={i.name}>
                    <Text fontWeight={600} color={theme.palette.cream}>
                    {attributes[i.name]}
                    </Text>
                    <SearchSidebarDropdown att_id={i.att_id} options={getSelectOptions(i.attributes)}/>
                </VStack>
                
                )
            })
        }
        </>
          
          

    )

    function contextAttributes(){
        if(type === 'merch'){
            return merchCustomAttributeValues
    
        } else {
            return plantCustomAttributeValues
        }
    }

    function getSelectOptions(attributes: any): CustomOption[]{

        return Object.entries<string>(attributes).map((i) => {
          return {
            label: i[1], 
            value: i[0]
            }
          }
        )
    
      }



}




export default AttributeSearch