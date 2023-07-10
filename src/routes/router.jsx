import App from '../components/App';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About';
import { Outlet, createBrowserRouter } from 'react-router-dom';

const HeaderAndFooter = () => {
   return <main>
      <div className='wrapper'>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
  </main>
}

export const router = createBrowserRouter([
    {
        element: <HeaderAndFooter />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
//   { path: "/", element: <App />, errorElement: <h1>404 not found</h1> },
//   { path: "/about", element: <About /> }
])
