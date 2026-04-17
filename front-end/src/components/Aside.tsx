export default function Aside() {
	return (
		<aside className="self-start md:sticky top-0 flex flex-col gap-20 border-t border-stone-400/40 py-7 mx-3 md:mx-0">
			<p className="w-[85%] max-w-100">
				A seasoned Senior Producer with 10+ years of experience,
				I excel in leading complex marketing and design projects from concept to completion.
			</p>
			<nav className="flex flex-col text-xs md:text-sm">
				<a
					href="mailto:bastien.winant@gmail.com"
					className="px-1.5 py-3 border-t border-stone-400/20 hover:bg-stone-50 hover:text-stone-950"
				>Email</a>
				<a
					href="https://github.com/bastien-winant"
					target="_blank"
					className="px-1.5 py-3 border-t border-stone-400/20 hover:bg-stone-50 hover:text-stone-950"
				>GitHub</a>
				<a
					href="https://www.xing.com/profile/Bastien_Winant"
					target="_blank"
					className="px-1.5 py-3 border-t border-stone-400/20 hover:bg-stone-50 hover:text-stone-950"
				>Xing</a>
			</nav>
		</aside>
	)
}