import { Outlet } from "react-router-dom"
import { Footer, Header } from '.'
import { ToastContainer } from "react-toastify"

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default Layout