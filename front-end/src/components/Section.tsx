import type { ReactNode } from "react"

type SectionProps = {
	title: string
	children?: ReactNode
}

export default function Section({ title, children }: SectionProps) {
	return (
		<section className="flex flex-col gap-8 py-7 border-t border-stone-400/30">
			<h2 className="text-xs capitalize font-medium">{title}</h2>
			{children}
		</section>
	)
}