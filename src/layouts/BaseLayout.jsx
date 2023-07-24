import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

function BaseLayout() {
  return <>
                <Navbar />
                <main>
                    <Outlet />
                </main>
            <Footer />
        </>
     }

export default BaseLayout
