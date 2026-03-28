import { Link, useLocation } from "react-router"
import { twMerge } from "tailwind-merge"

export default function Header() {
	const location = useLocation()

	return (
		<header className={twMerge(
			"md:col-span-2 h-52 lg:h-56 flex items-start justify-between",
			"text-xl md:text-2xl font-medium capitalize"
		)}>
			<hgroup>
				<h1>bastien winant,</h1>
				<p className="font-extralight text-stone-400">cloud developer</p>
			</hgroup>
			<Link to={location.pathname === "/" ? "projects" : "/"}>
				{location.pathname === "/" ? "projects" : "back"}
			</Link>
		</header>
	)
}