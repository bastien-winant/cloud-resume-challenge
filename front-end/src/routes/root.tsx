import Header from "../components/Header"
import Aside from "../components/Aside"
import { Outlet } from "react-router"
import { twMerge } from "tailwind-merge"

export default function Root() {
	return (
		<div className={twMerge(
			"min-h-dvh grid auto-rows-min grid-cols-1 md:grid-cols-[360px_1fr] p-5",
			"bg-stone-950 text-stone-100 text-base font-light"
		)}>
			<Header />
			<Aside />
			<main className="border-t border-stone-400/40 py-7 mx-3">
				<Outlet />
			</main>
		</div>
	);
}