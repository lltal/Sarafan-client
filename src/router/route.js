import MessagePage from "../pages/MessagePage";
import SignupPage from "../pages/SignupPage";
import OAuth2RedirectHandler from "../model/user/OAuth2RedirectHandler";

export const publicRoutes = [
    {path: '/signup', element: <SignupPage/>},
    {path: "/oauth2/redirect", element: <OAuth2RedirectHandler/>}
]

export const privateRoutes = [
    ...publicRoutes,
    {path: '/messages', element: <MessagePage/>}
]

