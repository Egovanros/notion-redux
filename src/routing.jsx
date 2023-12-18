import SecureRoute from "./components/SecureRoute";
import Auth from "./pages/Auth";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Notes from "./pages/Notes";
import SingleNote from "./pages/SingleNote";

export const routes = [
    {
        path: "/",
        element:
            <SecureRoute>
                <Home />
            </SecureRoute>
    },
    {
        path: "/auth",
        element: <Auth />
    },
    {
        path: "/notes",
        element:
            <SecureRoute>
                <Notes />
            </SecureRoute>
    },
    {
        path: "/notes/:id",
        element:
            <SecureRoute>
                <SingleNote />
            </SecureRoute>
    },
    {
        path: "/edit-note/:id",
        element:
            <SecureRoute>
                <EditNote />
            </SecureRoute>
    },
    {
        path: "/create-note",
        element:
            <SecureRoute>
                <CreateNote />
            </SecureRoute>
    },
    {
        path: "*",
        element: <NotFound />
    }
]