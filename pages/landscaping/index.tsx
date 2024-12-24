import SecondaryLandscapingPage from "@/components/landscaping/secondary-landscaping-page";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/layout/layout";
import type { ReactElement } from "react";


const Landscaping: NextPageWithLayout = (props) => {

    return(
        <SecondaryLandscapingPage />
    )
}


Landscaping.getLayout = function getLayout(page: ReactElement){
    return(
        <Layout>
            {page}
        </Layout>
    )
  }


export default Landscaping;