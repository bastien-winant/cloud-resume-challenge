import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router"
import { Provider } from "@/components/ui/provider"
import Layout from "@/components/Layout";
import Index from "@/routes/index"
import About from "@/routes/about"
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: "about", element: <About /> }
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
