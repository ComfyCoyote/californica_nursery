import ContactUs from "@/components/contact-us/contact-us";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/layout/layout";
import type { ReactElement } from "react";


const Contact: NextPageWithLayout = (props) => {

    return(
        <ContactUs />
    )
}


Contact.getLayout = function getLayout(page: ReactElement){
    return(
        <Layout>
            {page}
        </Layout>
    )
  }


export default Contact;