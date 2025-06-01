import { Suspense } from "react"
import { Outlet } from "react-router"
import Gnb from "../compoents/GnB"

const Layout: React.FC = () => {
  return (
    <div>
      <Gnb />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        <div>Footer</div>
    </div>
  )
}

export default Layout
