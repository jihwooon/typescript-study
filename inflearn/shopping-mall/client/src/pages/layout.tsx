import { Suspense } from "react"
import { Outlet } from "react-router"

const Layout: React.FC = () => {
  return (
    <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        <div>Footer</div>
    </div>
  )
}

export default Layout
