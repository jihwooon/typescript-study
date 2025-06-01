import { createBrowserRouter, createRoutesFromElements, Route } from "react-router"
import Layout from "./pages/layout"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<div>Home</div>} />
      <Route path="products" element={<div>Products</div>} />
      <Route path="products/:productId" element={<div>Product Detail</div>} />
    </Route>
  )
)
