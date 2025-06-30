import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Analytics from "../pages/Analytics";

import Transactions from "../pages/Transactions";
import Users from "../pages/Users";
import Subscribers from "../pages/Subscribers";
import TermsAndConditions from "../pages/TermsAndConditions";
import Myaccount from "../pages/Myaccount";
import Notifications from "../pages/Notifications";
import Login from "../pages/Login";
import ForgetPassword from "../pages/ForgetPassword";
import OtpVerify from "../pages/OtpVerify";
import ResetPasswrod from "../pages/ResetPasswrod";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Analytics></Analytics>,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/subscribers",
        element: <Subscribers />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/change-password",
        element: <h1>Change Password</h1>,
      },
      {
        path: "/terms-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/my-account",
        element: <Myaccount />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },

      {
        path: "*",
        element: <h1>404</h1>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/otp-verify",
    element: <OtpVerify />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswrod />,
  },
]);

export default router;
