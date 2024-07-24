import './i18n';
import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Layout from './Pages/Layout/Layout';
import HomePage from './Pages/Home/HomePage';
import LoginPage from './Pages/Login/LoginPage';
import RegisterPage from './Pages/Register/RegisterPage';
import StorePage from './Pages/Store/StorePage';
import ProductPage from './Pages/Product/ProductPage';
import FaqsPage from './Pages/Faqs/FaqsPage';
import ContactUsPage from './Pages/ContactUs/ContactUsPage';
import FranchisingLicensingPage from './Pages/FranchisingLicensing/FranchisingLicensingPage';
import BusinessWithNestrettoPage from './Pages/BusinessWithNestretto/BusinessWithNestrettoPage';
import AccountPage from './Pages/Account/AccountPage';
import StoreLocatorPage from './Pages/StoreLocator/StoreLocatorPage';
import OurMenuPage from './Pages/OurMenu/OurMenuPage';
import NewsPage from './Pages/News/NewsPage';
import Spinner from './Components/Utils/Spinner/Spinner';
import ErrorPage from './Pages/Error/ErrorPage';
import CorporateLogin from './Pages/CorporateLogin/CorporateLogin';

import AboutPage from './Pages/About/AboutPage';
import CartPage from './Pages/Cart/CartPage';
import TermsPage from './Pages/Terms/TermsPage'
import SiteMapPage from './Pages/SiteMap/SiteMapPage'
import ForgetPassowrd from './Pages/ForgetPassword/ForgetPassword'
import TrackOrderPage from './Pages/TrackOrder/TrackOrderPage';
import CheckoutPage from './Pages/Checkout/CheckoutPage';
import CareersPage from './Pages/Careers/CareersPage'
import ResetPasswordPage from './Pages/ResetPassword/ResetPasswordPage';
import GiftsPage from './Pages/Gifts/GiftsPage';
import GiftPage from './Pages/GiftPage/GiftPage';
import InvoicePage from './Pages/Invoice/InvoicePage';

// import Scrollbar from 'smooth-scrollbar';



// const options = {
  
// }

// Scrollbar.init(document.getElementById('my-scrollbar'), options);

const LazyHomePage = React.lazy(() => import("./Pages/Home/HomePage"));
// const LazyStorePage = React.lazy(() => import("./Pages/Store/StorePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <React.Suspense fallback={<Spinner />}><LazyHomePage /></React.Suspense> },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/corporate-login",
        element: <CorporateLogin />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/faqs",
        element: <FaqsPage />,
      },
      {
        path: "/contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "/franchising-and-licensing",
        element: <FranchisingLicensingPage />,
      },
      {
        path: "/business-with-nestretto",
        element: <BusinessWithNestrettoPage />,
      },
      {
        path: "/store-locator",
        element: <StoreLocatorPage />,
      },
      {
        path: "/our-menu",
        element: <OurMenuPage />,
      },
      // {
      //   path: "/news",
      //   element: <NewsPage forNews={true} />,
      // },
      // {
      //   path: "/news/:id",
      //   element: <NewsPage forNewsId={true} />,
      // },
      // {
      //   path: "/gallery",
      //   element: <NewsPage forGallery={true} />,
      // },
      // {
      //   path: "/videos",
      //   element: <NewsPage forVideos={true} />,
      // },
      // --------Kareem Pages------------
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },    
      {
        path: "/track-order",
        element: <TrackOrderPage />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassowrd />,
      },
      {
        path: "/reset-password",
        element: <ResetPasswordPage />,
      },
      {
        path: "/sitemap",
        element: <SiteMapPage />,
      },
      {
        path: "/termsConditions",
        element: <TermsPage />,
      },
      {
        path: "/careers",
        element: <CareersPage />,
      },
      {
        path: "/gift",
        element: <GiftsPage />,
      },
      {
        path: "/gift/:giftId",
        element: <GiftPage />,
      },
      {
        path: "/user/invoice",
        element: <InvoicePage />,
      },
    ]
  },
  {
    path: "/store",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // { index: true, element: <React.Suspense fallback={<Spinner />}><LazyStorePage /></React.Suspense> },
      { index: true, element: <StorePage /> },
      { path: "best-seller", element: <div>best-seller Page Route</div> },
      { path: "special-offers", element: <div>special-offers Page Route</div> },
      { path: "all-categories", element: <div>All Categories Page Route</div> },
      { path: "category/:categoryId", element: <div>Category Page Route</div> },
      { path: "product/:prodId", element: <ProductPage />},
      { path: "account", element: <AccountPage />},
      { path: "account/addresses", element: <AccountPage clickedLink="addresses" />},
      { path: "account/wallet", element: <AccountPage clickedLink="wallet" />},
      { path: "account/orders", element: <AccountPage clickedLink="orders" />},
      { path: "account/wishlist", element: <AccountPage clickedLink="wishlist" />},
      { path: "account/ratings-reviews", element: <AccountPage clickedLink="ratings-reviews" />},
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

