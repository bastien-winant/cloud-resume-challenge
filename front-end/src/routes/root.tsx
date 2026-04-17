import Header from "../components/Header"
import Aside from "../components/Aside"
import { Outlet } from "react-router"
import { twMerge } from "tailwind-merge"

export default function Root() {
	return (
		<div className={twMerge(
			"min-h-dvh grid auto-rows-min grid-cols-1 md:grid-cols-[360px_1fr] gap-x-10 p-5 md:px-7",
			"bg-stone-950 text-stone-100 text-sm xl:text-base font-light"
		)}>
			<Header />
			<Aside />
			<div className="mx-3 flex flex-col gap-100 bg-stone-950">
				<main>
					<Outlet />
				</main>
				<a href="mailto:bastien.winant@gmail.com" className="mb-2 text-xl xl:text-2xl font-medium">Contact me</a>
			</div>
		</div>
	);
}