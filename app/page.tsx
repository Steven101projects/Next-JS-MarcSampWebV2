import BannerPage from "./userSite/components/banner_components/BannerPage";
import MainHeader from "./userSite/MainHeader";
import MainFooter from "./userSite/MainFooter";


import AboutPage from "./userSite/components/about_components/AboutPage";
import ServicesPage from "./userSite/components/service_components/ServicesPage";
import ContactPage from "./userSite/components/contact_components/ContactPage";
import FeaturesPage from "./userSite/components/more-info-components/Features";


export default function Home() {
  return (
    <>
<MainHeader />

<BannerPage />
<ServicesPage />
<AboutPage />
<FeaturesPage />
<ContactPage />


<MainFooter />
    </>
  );
}
