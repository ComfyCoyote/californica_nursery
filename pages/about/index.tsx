import AboutPage from "@/components/about/about-page"
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/layout/layout";
import type { ReactElement } from "react";

const About: NextPageWithLayout = (props) => {

    return(
        <AboutPage />
    )
}

About.getLayout = function getLayout(page: ReactElement){
    return(
        <Layout>
            {page}
        </Layout>
    )
  }
  

export default About;