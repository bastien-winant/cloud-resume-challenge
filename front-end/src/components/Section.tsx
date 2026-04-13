type SectionProps = {
	title: string
	children?: React.ReactNode
}

export default function Section({ title, children }: SectionProps) {
	return (
		<section className="flex flex-col gap-10">
			<h2 className="text-xs capitalize">{title}</h2>
			{children}
		</section>
	)
}