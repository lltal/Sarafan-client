import SignupPage from "../pages/SignupPage";
import OAuth2RedirectHandler from "../model/user/OAuth2RedirectHandler";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import UsersPage from "../pages/UsersPage";
import UserIdPage from "../pages/UserIdPage";
import ChatIdPage from "../pages/ChatIdPage";
import ChatsPage from "../pages/ChatsPage";

export const publicRoutes = [
    {path: '/signup', element: <SignupPage/>},
    {path: '/login', element: <LoginPage/>},
    {path: "/oauth2/redirect", element: <OAuth2RedirectHandler/>}
]

export const privateRoutes = [
    ...publicRoutes,
    {path: '/profile', element: <ProfilePage/>},
    {path: '/chats', element: <ChatsPage/>},
    {path: '/chats/:chatId', element: <ChatIdPage/>},
    {path: '/users', element: <UsersPage/>},
    {path: '/users/:id', element: <UserIdPage/>},
]