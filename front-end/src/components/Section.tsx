type SectionProps = {
	title: string
	children?: React.ReactNode
}

export default function Section({ title, children }: SectionProps) {
	return (
		<section className="flex flex-col gap-10 border-t border-stone-400/40 py-7">
			<h2 className="text-xs capitalize font-normal">{title}</h2>
			{children}
		</section>
	)
}