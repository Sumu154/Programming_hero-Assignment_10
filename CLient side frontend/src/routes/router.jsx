import { createBrowserRouter, RouterProvider, } from "react-router-dom"; 
import App from "../App";
import PrivateRoute from "./PrivateRoute";

// import layouts 


// import pages
import HomePage from "../pages/HomePage";
import AuthLayout from "../Layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ErrorPage from "../pages/ErrorPage";
import AddCampaignPage from "../pages/AddCampaignPage";
import CampaignsPage from "../pages/CampaignsPage";
import CampaignDetails from "../components/DetailsComponents/CampaignDetails";
import MyCampaignPage from "../pages/MyCampaignPage";
import UpdateCampaignPage from "../pages/UpdateCampaignPage";
import MyDonationPage from "../pages/MyDonationPage";






const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: '/allCampaigns',
        element: <CampaignsPage></CampaignsPage>
      },
      {
        path: "/addCampaign",
        element: <PrivateRoute> <AddCampaignPage></AddCampaignPage> </PrivateRoute>
      },
      {
        path: "/campaign/:id",
        element: <PrivateRoute> <CampaignDetails></CampaignDetails> </PrivateRoute>,
        loader: async ( {params} ) => {
          const res = await fetch(`https://server-side-backend.vercel.app/api/campaign/${params.id}`);
          const campaign = await res.json();
          return campaign;
        }
      },
      {
        path: "/myCampaigns",
        element: <PrivateRoute> <MyCampaignPage></MyCampaignPage>  </PrivateRoute>
      },
      {
        path: "/updateCampaign/:id",
        element: <PrivateRoute>  <UpdateCampaignPage></UpdateCampaignPage>  </PrivateRoute>,
        loader: async ( {params} ) => {
          const res = await fetch(`https://server-side-backend.vercel.app/api/campaign/${params.id}`);
          const campaign = await res.json();
          return campaign;
        }
      },
      {
        path: "/myDonations",
        element: <PrivateRoute> <MyDonationPage></MyDonationPage> </PrivateRoute>
      }
    ]
  },
  {
    path: 'auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/auth/register',
        element: <RegisterPage></RegisterPage>
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);

export default router;