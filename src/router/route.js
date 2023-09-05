import MessagePage from "../pages/MessagePage";
import SignupPage from "../pages/SignupPage";

export const privateRoutes = [
    {path: '/signup', element: <SignupPage/>},
    {path: '/messages', element: <MessagePage/>}
]

export const publicRoutes = [
    {path: '/signup', element: <SignupPage/>}
]