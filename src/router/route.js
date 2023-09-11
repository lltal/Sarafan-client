import MessagePage from "../pages/MessagePage";
import SignupPage from "../pages/SignupPage";
import OAuth2RedirectHandler from "../model/user/OAuth2RedirectHandler";
import ProfilePage from "../pages/ProfilePage";

export const privateRoutes = [
    {path: '/signup', element: <SignupPage/>},
    {path: "/oauth2/redirect", element: <OAuth2RedirectHandler/>}
]

export const publicRoutes = [
    ...privateRoutes,
    {path: '/profile', element: <ProfilePage/>},
    {path: '/messages', element: <MessagePage/>}
]

