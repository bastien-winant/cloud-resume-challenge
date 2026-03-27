import {twMerge} from "tailwind-merge";

export default function Aside() {
	return (
		<aside className={twMerge(
			"self-start md:sticky md:top-0 mx-2.5 md:mx-0 py-7 flex flex-col gap-20 border-t border-stone-400/30",
			""
		)}>
			<p className="w-[80%] lg:w-[85%] max-w-96">
				A seasoned Senior Producer with 10+ years of experience,
				I excel in leading complex marketing and design projects from concept to completion.
			</p>
			<nav className="flex flex-col text-xs font-normal">
				<a
					href="mailto:bastien.winant@gmail.com"
					className={twMerge(
						"px-1 py-3 border-t border-stone-400/20",
						"hover:bg-stone-100 hover:text-stone-950"
					)}
				>hello@figma.com</a>
				<a
					href="https://github.com/bastien-winant"
					target="_blank"
					className={twMerge(
						"px-1 py-3 border-t border-stone-400/20",
						"hover:bg-stone-100 hover:text-stone-950"
					)}
				>(555) 123-4567</a>
				<a
					href="https://www.xing.com/profile/Bastien_Winant"
					target="_blank"
					className={twMerge(
						"px-1 py-3 border-t border-stone-400/20",
						"hover:bg-stone-100 hover:text-stone-950"
					)}
				>Linkedin</a>
			</nav>
		</aside>
	)
}