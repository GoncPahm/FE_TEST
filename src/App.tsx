import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import MainLayout from "./layouts/MainLayout";
import SignInLayout from "./layouts/SignInLayout";
import SignIn from "./pages/SignIn/SignIn";
import ProfileLayout from "./layouts/ProfileLayout";
import Profile from "./pages/Profile/Profile";
import PrivateRoute from "./components/PrivateRoute";
function App() {
    const router = createBrowserRouter([
        {
            element: <MainLayout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
            ],
        },
        {
            element: <SignInLayout />,
            children: [
                {
                    path: "/signin",
                    element: <SignIn />,
                },
            ],
        },
        {
            element: <ProfileLayout />,
            children: [
                {
                    element: <PrivateRoute />,
                    children: [
                        {
                            path: "/profile",
                            element: <Profile />,
                        }
                    ],
                },
            ],
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
