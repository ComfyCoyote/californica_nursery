import { useState } from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import NameForm from './name-form';
import PriceForm from './pricing';
import ProductInfoForm from './product-info';
import UploadImageContainer from '../upload-image';
import { FormikProps } from 'formik';
import { FormValues } from '@/pages/admin/product-management/newProduct';
import AdditionalInfo from './additional-info';


const tabOptions = [
    'Title and Description',
    'Pricing',
    'Product Specs',
    'Images',
    'Additional Information',

    
]

interface NewProductTabBarPropTypes {
  formik: any;
  selectedImage: File[];
  setSelectedImage: (file: any | null) => (void)
}

export default function NewProductTabBar(props : NewProductTabBarPropTypes){
  const [selectedTab, setSelectedTab] = useState(0);
  const [product, setProduct] = useState({});

  const {formik, selectedImage, setSelectedImage} = props

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <Tabs isLazy onChange={handleTabChange} index={selectedTab}>
      <TabList>
        {tabOptions.map((item: string) => {
            return(
                <Tab key={item}>
                    {item}
                </Tab>
            )
        })}
      </TabList>
      <TabPanels>
        <TabPanel>
          <NameForm formik={formik}/>
        </TabPanel>
        <TabPanel>
          <PriceForm formik={formik}/>
        </TabPanel>
        <TabPanel>
          <ProductInfoForm formik={formik}/>
        </TabPanel>
        <TabPanel>
            <UploadImageContainer selectedImages={selectedImage} setSelectedImages={setSelectedImage}/>
        </TabPanel>
        <TabPanel>
            <AdditionalInfo formik={formik}/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}


