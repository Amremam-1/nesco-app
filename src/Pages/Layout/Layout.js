import { Outlet } from "react-router-dom";
import Footer from "../../Components/Home/Footer/Footer";
import { useTranslation } from "react-i18next";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useRef } from "react";
// import Scrollbar from 'smooth-scrollbar';


const Layout = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const ref = useRef();

  // Scrollbar.init(ref);
  // Scrollbar.init(document.getElementById('#my-scrollbar'));


  return (
    <HelmetProvider>
      <main>
        <Outlet />
        <Footer />
      </main>
    </HelmetProvider>
  )
}

export default Layout;