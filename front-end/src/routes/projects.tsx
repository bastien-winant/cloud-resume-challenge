import Section from "../components/Section"

export default function Projects() {
	return (
		<Section title="projects">
			<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
				<article className="border h-52"></article>
				<article className="border h-52"></article>
				<article className="border h-52"></article>
			</div>
		</Section>
	)
}