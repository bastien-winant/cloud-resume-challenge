import { BrowserRouter as Router, Routes, Route } from "react-router"
import Layout from "@/components/Layout.jsx"
import './App.css'

function App() {
  return (
    <Router>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<p>this is the index page</p>} />
					<Route path="about" element={<p>this is the about page</p>} />
				</Route>
			</Routes>
    </Router>
  )
}

export default App
