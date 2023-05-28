import { Stack } from "@mui/material";
import React from "react";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../../layout/Layout";
import LoginScreen from "../../screens/authentication/login/LoginScreen";
import SignUpScreen from "../../screens/authentication/signup/SignUpScreen";
import Editor from "../../screens/editor/Editor";
import BlogsScreen from "../../screens/blogs/BlogsScreen";
import DesktopScreen from "../../screens/desktop/DesktopScreen";
import ErrorPage from "../../screens/ErrorPage";
import EditDetailsScreen from "../../screens/profile/EditDetailsScreen";
import ProfileDetailScreen from "../../screens/profile/ProfileDetailScreen";
import Profile from "../../screens/profile/Profile";
import PrivateUserRoutes from "./PrivateUserRoutes";
import PrivateAdminRoutes from "./PrivateAdminRoutes";
import AdminLoginScreen from "../../screens/authentication/login/AdminLoginScreen";
import AutorizationScreen from "../../screens/blogs/AutorizationScreen";
const routes = createBrowserRouter([
  //Dashboard
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: (
      <Layout>
        <DesktopScreen />
      </Layout>
    ),
  },
  {
    path: "/admin",
    errorElement: <ErrorPage />,
    element: (
      <PrivateAdminRoutes>
        <Layout>
          <DesktopScreen />
        </Layout>
      </PrivateAdminRoutes>
    ),
  },
  {
    path: "/edit-profile",
    errorElement: <ErrorPage />,
    element: (
      <PrivateUserRoutes>
        <Layout>
          <EditDetailsScreen />
        </Layout>
      </PrivateUserRoutes>
    ),
  },
  {
    path: "/profile-detail",
    errorElement: <ErrorPage />,
    element: (
      <PrivateUserRoutes>
        <Layout>
          <Profile />
        </Layout>
      </PrivateUserRoutes>
    ),
  },

  {
    path: "/blogs/:id",
    errorElement: <ErrorPage />,
    element: (
      <PrivateUserRoutes>
        <Layout>
          <BlogsScreen />
        </Layout>
      </PrivateUserRoutes>
    ),
  },
  {
    path: "/author-consent",
    errorElement: <ErrorPage />,
    element: (
      <PrivateUserRoutes>
        <Layout>
          <AutorizationScreen />
        </Layout>
      </PrivateUserRoutes>
    ),
  },
  {
    path: "/story",
    errorElement: <ErrorPage />,
    element: (
      <PrivateUserRoutes>
        <Layout>
          <Editor />
        </Layout>
      </PrivateUserRoutes>
    ),
  },
  {
    path: "/profile",
    errorElement: <ErrorPage />,
    element: (
      <PrivateUserRoutes>
        <Layout>
          <Profile />
        </Layout>
      </PrivateUserRoutes>
    ),
  },
  {
    path: "/login",
    errorElement: <ErrorPage />,
    element: <LoginScreen />,
  },
  {
    path: "/admin-login",
    errorElement: <ErrorPage />,
    element: <AdminLoginScreen />,
  },
  {
    path: "/signup",
    errorElement: <ErrorPage />,
    element: <SignUpScreen />,
  },
]);
const MainRoutes = () => {
  return (
    <>
      <Stack height={"100vh"}>
        <RouterProvider router={routes} />
        <Toaster />
      </Stack>
    </>
  );
};

export default MainRoutes;
