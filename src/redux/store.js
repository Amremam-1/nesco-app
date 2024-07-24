import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./slices/ProductsSlice";
import CategoriesSlice from "./slices/CategoriesSlice";
import authSlice from "./slices/authSlice";
import FaqsSlice from "./slices/FaqsSlice";
import SettingSlice from "./slices/SettingSlice";
import ReviewSlice from "./slices/ReviewSlice";
import SliderSlice from "./slices/SliderSlice";
import CartSlice from "./slices/CartSlice";
import FavoriteSlice from "./slices/FavoriteSlice";
import AccountSlice from "./slices/AccountSlice";
import AddressSlice from "./slices/AddressSlice";
import PaymentSlice from "./slices/PaymentSlice";
import StoreSlice from "./slices/StoreSlice";
import CheckoutSlice from "./slices/CheckoutSlice";
import CouponSlice from "./slices/CouponSlice";
import UserSlice from "./slices/UserSlice";
import CitiesSlice from "./slices/CitiesSlice";
import ShippingAddressSlice from "./slices/ShippingAddressSlice";
import InvoiceSlice from "./slices/InvoiceSlice";
import UserOrdersSlice from "./slices/UserOrdersSlice";
import pagesDataSlice from "./slices/pagesDataSlice";
import MenuSlice from "./slices/MenuSlice";

export const store = configureStore({
  reducer: {
    authSlice: authSlice,
    ProductsSlice: ProductsSlice,
    CategoriesSlice: CategoriesSlice,
    FaqsSlice: FaqsSlice,
    SettingSlice: SettingSlice,
    ReviewSlice: ReviewSlice,
    SliderSlice: SliderSlice,
    CartSlice: CartSlice,
    FavoriteSlice: FavoriteSlice,
    AccountSlice: AccountSlice,
    AddressSlice: AddressSlice,
    PaymentSlice: PaymentSlice,
    StoreSlice: StoreSlice,
    CheckoutSlice: CheckoutSlice,
    CouponSlice: CouponSlice,
    UserSlice: UserSlice,
    CitiesSlice: CitiesSlice,
    ShippingAddressSlice: ShippingAddressSlice,
    InvoiceSlice: InvoiceSlice,
    UserOrdersSlice: UserOrdersSlice,
    pagesDataSlice: pagesDataSlice,
    MenuSlice: MenuSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
})
