import { BrowserRouter as Router, Routes, Route } from "react-router"
import Layout from "@/components/Layout.jsx"
import Index from "@/pages/Index.jsx"
import About from "@/pages/About.jsx"
import './App.css'

function App() {
  return (
    <Router>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Index />} />
					<Route path="about" element={<About />} />
				</Route>
			</Routes>
    </Router>
  )
}

export default App
