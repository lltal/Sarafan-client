import MessagePage from "../pages/MessagePage";
import SignupPage from "../pages/SignupPage";
import OAuth2RedirectHandler from "../model/user/OAuth2RedirectHandler";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import UserPage from "../pages/UserPage";

export const publicRoutes = [
    {path: '/signup', element: <SignupPage/>},
    {path: '/login', element: <LoginPage/>},
    {path: "/oauth2/redirect", element: <OAuth2RedirectHandler/>}
]

export const privateRoutes = [
    ...publicRoutes,
    {path: '/profile', element: <ProfilePage/>},
    {path: '/messages', element: <MessagePage/>},
    {path: '/users', element: <UserPage/>}
]