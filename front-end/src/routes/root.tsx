import Header from "../components/Header"
import Aside from "../components/Aside"
import { Outlet } from "react-router"
import { twMerge } from "tailwind-merge"

export default function Root() {
	return (
		<div className={twMerge(
			"min-h-dvh p-5 md:px-8 grid grid-cols-1 md:grid-cols-[320px_1fr] lg:grid-cols-[360px_1fr]",
			"auto-rows-min gap-x-12 text-stone-100 text-sm lg:text-base font-extralight"
		)}>
			<Header />
			<Aside />
			<main className="mx-2.5 md:mx-0">
				<Outlet />
			</main>
		</div>
	)
}