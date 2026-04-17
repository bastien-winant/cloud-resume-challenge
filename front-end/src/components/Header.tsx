import { useLocation, Link } from "react-router"
import { twMerge } from "tailwind-merge";

export default function Header() {
	const location = useLocation()

	return (
		<header className={twMerge(
			"md:col-span-2 flex items-start justify-between h-52",
			"text-xl xl:text-2xl capitalize"
		)}>
			<hgroup>
				<h1 className="font-medium">bastien winant,</h1>
				<p className="text-stone-400">cloud developer</p>
			</hgroup>
			<Link to={ location.pathname === "/" ? "about" : "/" } className="font-medium hover:outline-none">
				{ location.pathname === "/" ? "about" : "back" }
			</Link>
		</header>
	)
}