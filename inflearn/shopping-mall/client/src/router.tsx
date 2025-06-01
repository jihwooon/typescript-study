import { createBrowserRouter, createRoutesFromElements, Route } from "react-router"
import Layout from "./pages/layout"
import ProductList from "./pages/products/ProductList"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<div>Home</div>} />
      <Route path="products" element={<ProductList />} />
      <Route path="products/:productId" element={<div>Product Detail</div>} />
    </Route>
  )
)
