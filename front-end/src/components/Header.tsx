import { useLocation, Link } from "react-router"
import { twMerge } from "tailwind-merge";

export default function Header() {
	const location = useLocation()

	return (
		<header className={twMerge(
			"md:col-span-2 flex items-start justify-between h-52",
			"text-xl capitalize"
		)}>
			<hgroup>
				<h1 className="font-medium">alexandra moore,</h1>
				<p className="text-stone-400">senior producer</p>
			</hgroup>
			<Link to={ location.pathname === "/" ? "projects" : "/" } className="font-medium">
				{ location.pathname === "/" ? "about" : "back" }
			</Link>
		</header>
	)
}