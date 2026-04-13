export default function Aside() {
	return (
		<aside className="self-start md:sticky top-0 flex flex-col gap-20 border-t border-stone-400/40 py-7 mx-3">
			<p className="w-[85%]">
				A seasoned Senior Producer with 10+ years of experience,
				I excel in leading complex marketing and design projects from concept to completion.
			</p>
			<nav className="flex flex-col text-xs">
				<a
					href="mailto:bastien.winant@gmail.com"
					className="px-1.5 py-3 border-t border-stone-400/20"
				>hello@figma.com</a>
				<a
					href="https://github.com/bastien-winant"
					target="_blank"
					className="px-1.5 py-3 border-t border-stone-400/20"
				>(555) 123-4567</a>
				<a
					href="https://www.xing.com/profile/Bastien_Winant"
					target="_blank"
					className="px-1.5 py-3 border-t border-stone-400/20"
				>Linkedin</a>
			</nav>
		</aside>
	)
}