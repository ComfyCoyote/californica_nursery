import { useState } from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';


interface TabBarPropTypes {
    
    tabOptions: string[]
}

const TabBar: React.FC<TabBarPropTypes> = ({tabOptions}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <Tabs isLazy onChange={handleTabChange} index={selectedTab}>
      <TabList>
        {tabOptions.map((item: string) => {
            return(
                <Tab>
                    {item}
                </Tab>
            )
        })}
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>Content for Tab 1</p>
        </TabPanel>
        <TabPanel>
          <p>Content for Tab 2</p>
        </TabPanel>
        <TabPanel>
          <p>Content for Tab 3</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TabBar;
