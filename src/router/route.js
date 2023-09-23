import MessagePage from "../pages/MessagePage";
import SignupPage from "../pages/SignupPage";
import OAuth2RedirectHandler from "../model/user/OAuth2RedirectHandler";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import UsersPage from "../pages/UsersPage";
import UserIdPage from "../pages/UserIdPage";

export const publicRoutes = [
    {path: '/signup', element: <SignupPage/>},
    {path: '/login', element: <LoginPage/>},
    {path: "/oauth2/redirect", element: <OAuth2RedirectHandler/>}
]

export const privateRoutes = [
    ...publicRoutes,
    {path: '/profile', element: <ProfilePage/>},
    {path: '/messages/:id', element: <MessagePage/>},
    {path: '/users', element: <UsersPage/>},
    {path: '/users/:id', element: <UserIdPage/>}
]