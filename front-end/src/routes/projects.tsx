import Project from "../components/Project"

export default function Projects() {
	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
			<Project />
			<Project />
			<Project />
			<Project />
			<Project />
			<Project />
		</div>
	);
}