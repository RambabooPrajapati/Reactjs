import './App.css'
// import Signup from './pages/Signup';
// import SignupV2 from './pages/SignupV2';
// import Signupv3Mui from './pages/Signupv3Mui';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./Layout";
import Dashboard from './pages/Dashboard';
// import Product from './pages/Product';
import Cart from './pages/Cart';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/home",
        element: <Home />,}
    ]
  }
  
])
function App() {
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  );
}
// function App() {
//   return (
//     <>
//       {/* <Signup /> */}
//       {/* <SignupV2 /> */}
//       {/* <Signupv3Mui/> */}
//     </>
//   );
// }

export default App;
