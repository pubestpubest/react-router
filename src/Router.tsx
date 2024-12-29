import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/ProfilePage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "/profile/:profileId",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
