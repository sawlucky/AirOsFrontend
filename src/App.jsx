import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Live from "./Components/Live";
import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
import DonateUs from "./Components/DonateUs";
import Contact from "./Components/Contact";
// import AdminPannel from "./Components/AdminPannel";
// import AdminLogin from "./Components/Admin/AdminLogin"
import PaymentUnsuccessful from "./Components/PaymentUnsuccessful";
import PaymentSuccess from "./Components/PaymentSuccess";
import ErrorPage from "./Components/ErrorPage";
import AuthSuccess from "./Components/AuthSuccess";
const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/live",
      element: <Live />,
    },
    {
      path: "/about",
      element: <AboutUs />,
      children: [
        {
          element: <Navbar />,
        },
      ],
    },
    {
      path: "/donate",
      element: <DonateUs />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/auth/success",
      element: <AuthSuccess />,
    },
    // {
    //   path: "/adminLogin",
    //   element: <AdminLogin />,
    // },

    {
      path: "/cancel",
      element: <PaymentUnsuccessful />,
    },
    {
      path: "/success",
      element: <PaymentSuccess />,
      },
      {
          path: "*",
          element:<ErrorPage/>
    }
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
