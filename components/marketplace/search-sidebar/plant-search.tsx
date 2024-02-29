import MultiSelectDropdown from "@/components/shared-components/search-dropdown"
import { DrawerBody } from "@chakra-ui/react"




const PlantSearchBody = () => {

    return(
        <DrawerBody>
              <MultiSelectDropdown options={testOptions} setState={setOption}/>
              <MultiSelectDropdown options={testOptions} setState={setOption}/>
              <MultiSelectDropdown options={testOptions} setState={setOption}/>
              <MultiSelectDropdown options={testOptions} setState={setOption}/>
        </DrawerBody>
    )
}