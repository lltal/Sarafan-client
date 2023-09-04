import MessagePage from "../pages/MessagePage";

export const privateRoutes = [
    {path: 'messages', element: <MessagePage/>}
]

export const publicRoutes = [
    {path: '/signup', element: <MessagePage/>}
]