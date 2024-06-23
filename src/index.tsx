import {createRoot} from "react-dom/client";
import {App} from "./components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Main} from "@/page/main";
import {About} from "@/page/about";
import {Quizzes} from "@/page/quizzes";
import {KnowledgeDatabase} from "@/page/knowledgeDatabase";
import {Suspense} from "react";
import {Profile} from "@/page/profile";
import {FullscreenAuth} from "@/page/auth";

const root = document.getElementById('root')

if (!root) {
  throw new Error('root not found')
}

const container = createRoot(root)
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/main',
        element: <Suspense fallback={'Loading...'}><Main/></Suspense>
      },
      {
        path: '/about',
        element: <Suspense fallback={'Loading...'}><About/></Suspense>
      },
      {
        path: '/quizzes',
        element: <Suspense fallback={'Loading...'}><Quizzes/></Suspense>
      },
      {
        path: '/knowledgeDatabase',
        element: <Suspense fallback={'Loading...'}><KnowledgeDatabase/></Suspense>
      },
      {
        path: '/profile',
        element: <Suspense fallback={'Loading...'}><Profile/></Suspense>
      },
      {
        path: '/auth',
        element: <Suspense fallback={'Loading...'}><FullscreenAuth/></Suspense>
      },
    ]
  },
]);
container.render(<RouterProvider router={router}/>
)