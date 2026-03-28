import Section from "../components/Section"
import Project from "../components/Project"

export default function Projects() {
	return (
		<Section title="projects">
			<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
				<Project />
				<Project />
				<Project />
			</div>
		</Section>
	)
}