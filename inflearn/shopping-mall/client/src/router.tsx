import { createBrowserRouter, createRoutesFromElements, Route } from "react-router"
import Layout from "./pages/layout"
import ProductDetailPage from "./pages/products/ProductDetailPage"
import ProductListPage from "./pages/products/ProductListPage"
import CartPage from "./pages/cart/CartPage"
import PaymentPage from "./pages/payment/PaymentPage"
import AdminPage from "./pages/admin/AdminPage"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<div>Home</div>} />
      <Route path="products" element={<ProductListPage />} />
      <Route path="products/:productId" element={<ProductDetailPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="payment" element={<PaymentPage/>}/>
      <Route path="admin" element={<AdminPage/>}/>
    </Route>
  )
)
