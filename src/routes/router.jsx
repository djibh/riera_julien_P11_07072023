import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../components/Homepage';
import BaseLayout from '../layouts/BaseLayout';
import About from '../components/about/About';
import Apartment from '../components/apartment/Apartment';
import Errorpage from '../components/Errorpage';

export const router = createBrowserRouter([
    {
        element: <BaseLayout />,
        errorElement: <Errorpage />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: '/apartment/:id',
                element: <Apartment />
            }
        ]
    }
])
